<template>
   <div class="form-wrapper">
      <Form/>
   </div>
</template>

<script>

import Form from '@/components/Form.vue'

export default {
   name:'FormWrapper.vue',
   components:{
      Form,
   },
   data(){
      return{
         message:'',
         isValid:true,
      }
   },
   methods:{
      closeAlert(){
         this.isValid = !this.isValid
      }
   }
}

</script>
