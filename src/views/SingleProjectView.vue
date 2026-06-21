<script lang="ts" setup>
import { useRoute } from 'vue-router';
// This provide me with dynamic infomation about the current route
const route = useRoute()
</script>
<template>
  <div>
    <!-- To do intepolation we can use {{ }} -->
    <h1>Project {{ route.params?.id }}</h1>
  </div>
</template>
