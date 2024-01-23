<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navigationLinks = [{ name: 'Přehled', path: '/home' }]

const activePage = computed(() => {
  const currentPath = route.path

  for (const link of navigationLinks) {
    if (currentPath.includes(link.path)) {
      return link.name
    }
  }

  return ''
})
</script>

<template>
  <header>
    <router-link
      :to="link.path"
      :class="{ active: link.name === activePage }"
      v-for="link in navigationLinks"
      :key="link.name"
    >
      {{ link.name }}
    </router-link>
  </header>
</template>
