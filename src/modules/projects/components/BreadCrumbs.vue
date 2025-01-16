<template>
  <div class="breadcrumbs text-sm font-medium text-gray-500">
    <ul>
      <li>
        <RouterLink to="/projects" class="hover:link hover:text-blue-500">
          <DirectoryIcon></DirectoryIcon>
          &nbsp;
          Home
        </RouterLink>
      </li>
      <li>
      <span class="inline-flex items-center gap-2">
        <FileIcon></FileIcon>
         <span class="capitalize">{{ name }}</span>
      </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import DirectoryIcon from '@/modules/common/icons/DirectoryIcon.vue'
import FileIcon from '@/modules/common/icons/FileIcon.vue'

interface Props {
  name: string
}

defineProps<Props>()

</script>

<style scoped>

</style>
