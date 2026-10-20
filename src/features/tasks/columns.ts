// components/payments/columns.ts
import { createColumnHelper } from '@tanstack/vue-table'
import type { DataTableFeatures } from '../shared/tables/feature'
import type { Tables } from '../../../database/types'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Tables<'tasks'>>()

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
  // columnHelper.accessor('description', {
  //   header: 'Description',
  // }),
  columnHelper.accessor('collaborators', {
    header: 'Collaborators',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
])
