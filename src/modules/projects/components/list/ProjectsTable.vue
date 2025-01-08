<template>
  <div class="my-5">
    <div class="flex flex-col-reverse md:flex-row justify-between items-end lg:items-center">
      <Filters />
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-border mt-4">
        <thead class="hidden md:table-header-group border-b">
        <tr class="bg-[#3A78B6]/80 text-white/80">
          <th class="py-2 px-4 text-left">Name</th>
          <th class="py-2 px-4 text-center">Tasks</th>
          <th class="py-2 px-4 text-center">Completed</th>
          <th class="py-2 px-4 text-left">Status</th>
          <th class="py-2 px-4 text-left">Due date</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <TableItem />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Filters from '@/modules/projects/components/list/components/Filters.vue'
import TableItem from '@/modules/projects/components/list/components/TableItem.vue'
</script>

<style scoped>

</style>
