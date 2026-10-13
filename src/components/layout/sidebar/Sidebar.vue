<script setup lang="ts">
import { Menu, Plus, Building, BadgeCheck, User, Settings, LogOut } from '@lucide/vue'
import SidebarLinks from './SidebarLinks.vue'
import { Button } from '@/components/ui/button/index.ts'
const links = [
  {
    title: 'Dashboard',
    icon: Menu,
    to: '/',
  },
  {
    title: 'Projects',
    icon: Building,
    to: '/projects',
  },
  {
    title: 'My Tasks',
    icon: BadgeCheck,
    to: '/tasks',
  },
]
const accountLinks = [
  {
    title: 'Profile',
    icon: User,
    to: '/profile',
  },
  {
    title: 'Settings',
    icon: Settings,
    to: '/settings',
  },
  {
    title: 'Sign out',
    icon: LogOut,
    to: '/signout',
  },
]
</script>

<template>
  <aside
    class="flex flex-col h-screen gap-2 border-r fixed bg-muted/40 lg:w-52 w-16 transition-[width]"
  >
    <div class="flex h-16 items-center border-b px-2 lg:px-4 shrink-0 gap-1 justify-between">
      <Button variant="outline" size="icon" class="w-8 h-8">
        <Menu />
      </Button>

      <Button variant="outline" size="icon" class="w-8 h-8">
        <Plus />
      </Button>
    </div>

    <nav class="flex flex-col gap-2 justify-between h-full relative">
      <div>
        <SidebarLinks :links="links" />
      </div>

      <div class="border-y text-center bg-background py-3">
        <SidebarLinks :links="accountLinks" />
      </div>
    </nav>
  </aside>
</template>
