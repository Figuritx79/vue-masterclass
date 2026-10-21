<script setup lang="ts">
import AuthLayout from '@/components/layout/main/AuthLayout.vue'
</script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <!-- supense help us to manage asyn top leve componets, is useful when we need  spinner for th entired page and a lot dynamic contentc, only when the hole promise page load -->
      <!-- suspense render the component only when the promise is resolve, so looks very nice -->
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>
        <template #fallback> <span>Loading...</span> </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
