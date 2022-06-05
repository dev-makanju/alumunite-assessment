<template>
   <div class="banner-wrapper">
      <div class="template-logo">
         <router-link class="link" to="/">
            <span>
               <img src="@/assets/images/Logo.png" onerror="this.style.display='none'">
            </span>
         </router-link>
      </div>
      <div class="template-nav">
         <router-link class="link" to="/">
            <span>
               <font-awesome-icon class="arror-l"  icon="arrow-left"></font-awesome-icon>
                  Back to Login  
               </span> 
         </router-link>
      </div>
      <div class="banner">
         <div class="banner-progress-wrapper">
            <ul class="progress-content">
               <li>
                  <div class="progress-wrapper">
                     <div>1</div>
                     <span  class="check">
                        <font-awesome-icon class="check-icon"  icon="check"></font-awesome-icon>
                     </span>
                  </div>
                  <h2 @click="toggleNavbar" :class="[ personalData ? 'nav-active' : '' ]">personal data</h2>
               </li>
               <!---ADDED A NEW FORM FOR MOBILE SCREENS-->
               <div v-if="isMobile" :class="['mobile-active', personalData ? 'open' : '' ]">
                  <FormWrapper/>
               </div>
               <li class="p-data">
                  <div class="progress-wrapper">
                     <div>2</div>
                     <font-awesome-icon v-show="dataFilled" class="check" icon="check"></font-awesome-icon>
                  </div>
                  <h2>alumni data</h2>
               </li>
            </ul>
         </div>
         <div class="text">
            <p>Select an account type to customise your Alumunite experience</p>
         </div>
         <div class="banner-image-wrapper">
            <img src="@/assets/images/Layer.png" onerror="this.style.display='none'">
         </div>
      </div>
   </div>
</template>

<script>

import FormWrapper from '@/components/FormWrapper.vue'

export default{
   name:'BannerWrapper',
   components:{
     FormWrapper
   },
   data(){
      return{
         dataFilled: false,
         isMobile: null,
         personalData: true,
      }
   },
   created(){
      addEventListener('resize' , this.checkScreenSize)
      this.checkScreenSize()
   },
   methods:{
      closeAlert(){
         this.$emit('close-error')
      },
      toggleNavbar(){
         this.personalData = !this.personalData
      },
      checkScreenSize(){
         const screenWidth = window.innerWidth
         if(screenWidth <=  650){
            this.isMobile = true; 
            return;
         }this.isMobile = false;
      }
   }
}

</script>

<style lang="css" scoped>
   .nav-active {
     color: rgb(170, 161, 161) !important;
   }

   .link {
      text-decoration: none;
      font-weight: 600;
      font-family: 'Poppins' , sans-serif;
      color: #000000;
      font-size: 10px;
   }

   .check-icon{
      font-size: 14px;
      font-weight: 600;
   }

   .check {
      background: var(--checkbackground);
      border-radius: 50%;
      color: #fff;
      font-size: 10px;
      width: 35px;
      padding: 5px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      position: absolute;
   }
   
   .template-logo{
      width: 80%;
      margin: 0px auto;
      padding: 1.5rem 0px;
      display: flex;
      justify-content: flex-start;
   }

   .template-nav{
      width: 80%;
      margin: 0px auto;
      padding: .5rem 0px;
      display: flex;
      justify-content: flex-start;
   }

   .progress-wrapper {
      position: relative;
      width: 37px;
   }

   .progress-content li{
      display: flex;
      align-items: center;
      transform: translateX(-10%);
   }

   .banner-progress-wrapper {
      border-left: 2px solid rgba(204, 199, 199, 0.541);
      width: 60%;
      margin: 0px auto;
   }

   .progress-content > li > h2 {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 700;
      font-family: 'Inria Sans', sans-serif;
      color: rgba(0, 0, 0, 0.792);
      cursor: pointer;
      margin-left: 12px;
   }

   .progress-content > li > h2:hover {
      color: rgb(163, 157, 157);
   }
   .progress-wrapper > div {
      border: 1px solid var(--basecolor);
      border-radius: 50%;
      background: #fff;
      width: 35px;
      height: 35px;
      color: var(--basecolor);
      font-weight: bold;
      display: block;
      padding: 8px;
      font-family: 'Inria Sans', sans-serif;
   }

   .p-data{
      margin-top: 2rem;
   }

   .arror-l{
      color: var(--basecolor);
      margin-right: .5rem;
   }

   .banner{
      margin-top: 1rem;
      margin: auto ;
   }

   .banner .text{
      width: 44%;
      padding: 0px 2px;
      margin: 0px auto;
      text-align: left;
   }

   .banner .text > p{
     font-size: 8px;
     color: #00000090;
   }

   .banner-image-wrapper {
      width: 80%;
      margin: 0px auto;
      margin-top: 5rem;
   }  

   @media (max-width: 650px) {
      .banner-image-wrapper {
         display: none;
      }
   }

   .banner-image-wrapper img{
      width: 150px;
      border-bottom: 1px solid rgb(214, 211, 211);
   }

   .mobile-active{
      max-height: 0;
      overflow: hidden;
      transition: max-height .5s ease ;
   }

   .mobile-active.open{
      max-height: 800px;
   }
   /********
   ***RESPONSIVE DESIGN FOR BANNER SECTION 
   ******/

   @media(max-width: 650px) {
      .template-logo, 
      .template-nav,
      .banner-progress-wrapper {
         width: 94%;
         transition: all .5s ease;
      }

      .progress-content {
         width: 98%;
      }

      .progress-content li{
         transform: translateX(-3%);
      }

      .banner .text{
         width: 95%;
         padding-bottom: 3rem;
      }

      .banner .text > p{
         font-size: 14px;
         color: #00000090;
      }
   }

</style>