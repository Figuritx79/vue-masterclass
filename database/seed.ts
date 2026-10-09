import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
import { randomUUID } from 'node:crypto'
import type { UUID } from 'node:crypto'
type Configs = {
  supabaseURL: string
  serviceRoleKey: string
}

const configs: Configs = {
  supabaseURL: process.env.VITE_SUPABASE_URL as string,
  serviceRoleKey: process.env.SERVICE_ROLE_KEY as string,
}

export default configs

const { supabaseURL, serviceRoleKey } = configs
const supabaseClient = createClient(supabaseURL, serviceRoleKey)

type Project = {
  id: UUID
  name: string
  slug: string
  status: 'in-progress' | 'completed'
  collaborators: Array<string>
}
const logErrorAndExit = (tableName: string, error: any) => {
  console.error(
    `An error occurred in table '${tableName}' with code ${error.code}: ${error.message}`,
  )
  process.exit(1)
}

const logStep = (stepMessage: string) => {
  console.log(stepMessage)
}

const seedProjects = async (numEntries: number): Promise<Array<any> | null> => {
  logStep('Seeding projects...')
  const projects: Array<Project> = []
  for (let index = 0; index < numEntries; index++) {
    const name = faker.lorem.words(3)
    const slug = name.toLowerCase().replace(/ /g, '-')
    const id = randomUUID()
    const project: Project = {
      id: id,
      name: name,
      slug: slug,
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements(['1', '2', '3']),
    }
    projects.push(project)
  }

  const { data, error } = await supabaseClient.from('projects').insert(projects).select('id')

  if (error) return logErrorAndExit('Projects', error)
  logStep('Projects seeded successfully.')
  return data
}

const seedDatabase = async (numEntriesPerTable: number) => {
  await seedProjects(numEntriesPerTable)
}
const numEntriesPerTable = 10
await seedDatabase(numEntriesPerTable)
