<script lang="ts" setup>
import Sidebar from '@/components/layout/sidebar/Sidebar.vue'
import TopNavbar from '@/components/layout/TopNavbar.vue'
// storeToRefs mantain our store reactive, we can use ref to change the state without problems
const { pageData } = storeToRefs(usePageStore())
</script>

<template lang="html">
  <Sidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbar />
    <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
      <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-2xl">{{ pageData.title }}</h1>
      </div>
      <slot />
    </main>
  </div>
</template>
