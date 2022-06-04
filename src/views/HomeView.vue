<template>
  <div class="home">
    <TemplateWrapper/>
  </div>
</template>

<script>
// @ is an alias to /src
import TemplateWrapper from '@/components/Template.vue'

export default {
  name: 'HomeView',
  components: {
    TemplateWrapper
  }
}
</script>
