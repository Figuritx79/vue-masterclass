import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
import { randomUUID } from 'node:crypto'
import type { Database } from './types.ts'

type Configs = {
  supabaseURL: string
  serviceRoleKey: string
}

const configs: Configs = {
  supabaseURL: process.env.VITE_SUPABASE_URL as string,
  serviceRoleKey: process.env.SERVICE_ROLE_KEY as string,
}
const { supabaseURL, serviceRoleKey } = configs
const supabaseClient = createClient<Database>(supabaseURL, serviceRoleKey)

type Project = {
  id: string
  name: string
  slug: string
  status: 'in-progress' | 'completed'
  collaborators: Array<string>
}
const logErrorAndExit = (tableName: string, error: { code: string; message: string }): never => {
  console.error(
    `An error occurred in table '${tableName}' with code ${error.code}: ${error.message}`,
  )
  process.exit(1)
}

const logStep = (stepMessage: string) => {
  console.log(stepMessage)
}

const seedProjects = async (numEntries: number): Promise<Array<string>> => {
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
  return data.map((project) => project.id)
}

const seedTasks = async (numEntries: number, projectsIds: Array<string>) => {
  logStep('Seeding tasks...')
  const tasks = []

  for (let i = 0; i < numEntries; i++) {
    const id = randomUUID()
    tasks.push({
      id: id,
      name: faker.lorem.words(3),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      description: faker.lorem.paragraph(),
      due_date: faker.date.future().toISOString(),
      project_id: faker.helpers.arrayElement(projectsIds),
      collaborators: faker.helpers.arrayElements(['1', '2', '3']),
    })
  }

  const { data, error } = await supabaseClient.from('tasks').insert(tasks).select('id')

  if (error) return logErrorAndExit('Tasks', error)

  logStep('Tasks seeded successfully.')

  return data
}

const seedDatabase = async (numEntriesPerTable: number) => {
  const projectsIds = await seedProjects(numEntriesPerTable)
  await seedTasks(numEntriesPerTable, projectsIds)
}
const numEntriesPerTable = 10
await seedDatabase(numEntriesPerTable)
