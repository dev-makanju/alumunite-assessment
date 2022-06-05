<template>
   <div class="form-wrapper">
      <form @submit.prevent="formHandler">
            <h1>School Information</h1>
            <div class="form-control select">
               <label>Select a school you graduated from</label>
               <select name="" id="">
                  <option value="">Faith Academy</option>
                  <option value="">Academic Faith</option>
                  <option value="">United World school</option>
               </select>
            </div>
            <span class="form-link">Can't find your school here? <router-link class="form-nav-link" to="/">Add your school to this list</router-link></span>
            <div class="form-control radio-button">
               <input type="radio"><span>Still schooling here presently </span>
            </div>
            <div class="form-control">
               <label>Year Graduated</label>
               <input type="date" id="">
            </div>           
            <hr>  
            <div class="form-control select">
               <label>Select a school you graduated from</label>
               <select name="" id="">
                  <option value="">Faith Academy</option>
                  <option value="">Academic Faith</option>
                  <option value="">United World school</option>
               </select>
            </div>
            <span class="form-link">Can't find your school here? <router-link class="form-nav-link" to="/">Add your school to this list</router-link></span>
            <div class="form-control radio-button">
               <input type="radio"><span>Still schooling here presently</span>
            </div>
            <div class="form-control">
               <label>Year Graduated</label>
               <input type="date" id="">
            </div>
            <hr>
            <div class="form-postal">
               <div class="form-postal-content">
                  <font-awesome-icon class="icon-cap" icon="graduation-cap"></font-awesome-icon>
                  <span>
                     <h3>Add Another School</h3>
                     <p>More schools means more connections</p>
                  </span>
               </div>
               <span class="add-icon">
                  <font-awesome-icon class="icon" icon="plus"></font-awesome-icon>
               </span>
            </div>
            <button class="btn">Submit</button>
      </form>
   </div>
</template>

<script>

export default {
   name:'FormComponent',
   components:{

   }
}

</script>

<style lang="css" scoped>

.btn {
   background: var(--basecolor);
   color: #eee;
   padding: .5rem;
   width: 150px;
   float: right;
   font-family: 'Inria Sans', sans-serif;
   border: none;
   border-radius: 4px;
   cursor: pointer;
   transition: .3s ease;
}

.btn:focus{
   outline: none;
}

.btn:active {
   transform: scale(1.1);
   box-shadow: 3px 2px 15px 7px rgba(0, 0, 0, .2);
}

.form-control.radio-button {
   display: flex;
   justify-content: flex-start;
   width: 100%;
   padding:.6rem 0px;
}

.form-control.radio-button span {
   font-size: 12px;
   font-family: 'Poppins' , sans-serif;
   font-weight: 600;
   color: rgba(0, 0, 0, 0.56);
   letter-spacing: .8px;
}

.form-control input[type="radio"] {
   width: 30px;
}

.form-wrapper {
   max-width: 700px;
   display: flex;
   align-items: center;
   margin: 0px auto;
   padding-bottom: 3rem;
}

form{
   max-width: 400px;
   margin-top: 4rem;
}

form h1 {
   color: #000000;
   float: left;
}

.form-postal {
   padding: 12px;
   border: none;
   border-radius: 5px;
   display: flex;
   flex-direction: row;
   align-items: center;
   background: #0592f711;
   justify-content: space-between;
   margin: 2rem 0px;
}

.form-postal>.add-icon>.icon {
   color : var(--basecolor);
   font-size: 14px;
   border: 2px solid var(--basecolor);
   padding: 4px;
   border-radius: 50%;
}

.form-postal>.form-postal-content>.icon-cap {
   color : var(--basecolor);
   font-size: 30px;
}

.form-postal>.form-postal-content>span{
   color : var(--basecolor);
   font-size: 30px;
   text-align: left;
   margin-left: 10px;
}

.form-postal>div>span>h3 {
   color: var(--basecolor);
   font-size: 14px;
   font-family: 'Inria Sans', sans-serif;
   padding:.2rem 0px;
}

.form-postal>div>span>p {
   font-size: 10px;
   color: rgba(0, 0, 0, 0.413);
}

.form-postal div {
   display: flex;
   flex-direction: row;
   align-items: center;
}

.form-control label {
   font-size: 10px;
   font-weight: 600;
   color: #000000b4;
   display: block;
   padding: .4rem 0px;
   float: left;
   letter-spacing: .5px;
}

.form-link {
   font-size: 10px;
   float: right;
   padding: .6rem 0px;
   color: #000000a3;
   font-weight: 600;
   letter-spacing: .5px;
}

.form-nav-link {
   color: var(--basecolor);
   text-decoration: none;
}

.form-control input , select{
   border: 1px solid #0000004b;
   border-radius: 4px;
   outline: none;
   color: #000000b4;
   font-weight: 500;
   padding: .5rem;
   font-size: 14px;
   font-family: 'Poppins', sans-serif;
   width: 100%;
   box-sizing: border-box;
}


</style>