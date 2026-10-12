<script setup lang="ts">
import { Search } from '@lucide/vue'
import Input from '@/components/ui/input/Input.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<!-- The App.vue is the root component and will contain the entire vue app -->
<!-- Only its content changes based on the requested route  -->
<template>
  <nav class="h-16 border-b bg-muted/40 flex flex-row items-center justify-between px-4">
    <form class="w-full max-w-96 relative h-fit">
      <Search class="absolute top-[50%] translate-y-[-50%] left-1.5 text-muted-foreground" />
      <Input type="text" name="" id="" placeholder="Search..." class="w-full bg-background pl-8" />
    </form>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
  <main>
    <!-- To use the router we need the RouterView component-->
    <RouterView />
  </main>
</template>
