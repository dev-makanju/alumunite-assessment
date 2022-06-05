<template>
   <div class="form-wrapper">
      <div v-show="isValid">
         <ErrorAlert 
            :message="message"
            @close-error="closeAlert"
         />
      </div>
      <Form/>
   </div>
</template>

<script>

import Form from '@/components/Form.vue'
import ErrorAlert from '@/components/Alerts/ErrorAlert.vue'

export default {
   name:'FormWrapper.vue',
   components:{
      Form,
      ErrorAlert
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
