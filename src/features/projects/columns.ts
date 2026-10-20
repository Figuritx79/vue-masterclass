import { createColumnHelper } from '@tanstack/vue-table'
import type { DataTableFeatures } from '../shared/tables/feature'
import type { Tables } from '../../../database/types'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

const columnHelper = createColumnHelper<DataTableFeatures, Tables<'projects'>>()

export const columns = columnHelper.columns([
  columnHelper.accessor('id', {
    header: 'ID',
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: ({ row }) => {
      return h(
        RouterLink,
        { to: `/projects/${row.original.slug}`, class: 'text-left font-medium hover:bg-muted' },
        () => row.getValue('name'),
      )
    },
  }),
  columnHelper.accessor('slug', {
    header: 'Due Date',
  }),
  columnHelper.accessor('collaborators', {
    header: 'Collaborators',
  }),
])
