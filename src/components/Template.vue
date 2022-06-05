<template>
   <div class="template-wrapper">
      <div class="template">
         <Banner/>
      </div>
      <div class="template form">
         <FormWrapper/>
      </div>
   </div>
</template>

<script>

import Banner from '@/components/Banner.vue'
import FormWrapper from '@/components/FormWrapper.vue'

export default {
   name:'TemplateWrapper',
   components:{
      Banner , FormWrapper
   }
}

</script>

<style lang="css" scoped>
   .template-wrapper {
      height: 100vh;
      display: grid;
      grid-template-columns: 350px 1fr;
      transition: .5s ease;
      max-width: 1440px;
      margin: 0px auto;
   }

   @media (max-width: 1100px) {
      .template-wrapper {
         grid-template-columns: 300px 1fr;
      }
   }

   @media (max-width: 650px) {
      .template.form{
         display: none ;
      }

      .template-wrapper {
         grid-template-columns: 1fr;
      }
   }

   .template.form {
      background: #0084e30e;
      border-left: 2px solid rgba(180, 174, 174, 0.12);
      overflow-y: auto;
   }
   
   
</style>