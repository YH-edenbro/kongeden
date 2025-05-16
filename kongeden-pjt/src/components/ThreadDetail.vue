<template>
  
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { useThreadStore } from '@/stores/bookstore';
  import { computed } from 'vue';


  const route = useRoute()  
  const threadStore = useThreadStore()
  
  const threadId = parseInt(route.params.threadId, 10)

  const thread = computed(() =>{
    threadStore.threads.find((a) => a.threadId === threadId)
  })
</script>
  
<style scoped>

</style>