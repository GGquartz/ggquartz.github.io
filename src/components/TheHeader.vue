<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navigationLinks = [
  { name: 'Home', path: '/home', icon: 'home.svg' },
  { name: 'Galerie', path: '/gallery', icon: 'gallery.svg' },
  { name: 'Statistiky', path: '/stats', icon: 'stats.svg' },
  { name: 'Jonanopolis', path: '/jonanopolis', icon: 'jonanopolis.png' },
]

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
    <div class="main-header">
      <div class="logo">
        <h2>Chlapecký Web</h2>
      </div>
      <div class="nav-links">
        <div class="link" v-for="link in navigationLinks" :key="link.name">
          <router-link
            :to="link.path"
            :class="{ active: link.name === activePage }"
          >
            <img :src="require(`@/assets/icons/${link.icon}`)" alt="Icon" />
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
