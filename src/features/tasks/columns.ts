// components/payments/columns.ts
import { createColumnHelper } from '@tanstack/vue-table'
import type { DataTableFeatures } from '../shared/tables/feature'
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import type { TasksWithProjects } from './types'

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, TasksWithProjects[0]>()

export const columns = columnHelper.columns([
  columnHelper.accessor('id', {
    header: 'ID',
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: ({ row }) => {
      return h(
        RouterLink,
        { to: `/tasks/${row.original.id}`, class: 'text-left font-medium hover:bg-muted' },
        () => row.getValue('name'),
      )
    },
  }),
  columnHelper.accessor('due_date', {
    header: 'Due Date',
  }),
  columnHelper.accessor('collaborators', {
    header: 'Collaborators',
  }),
  columnHelper.accessor('projects', {
    header: 'Project',
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/projects/${row.original.projects?.slug}`,
          class: 'text-left font-medium hover:bg-muted',
        },
        () => row.original.projects?.name,
      )
    },
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
])
