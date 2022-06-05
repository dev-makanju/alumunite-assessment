<template>
  <router-view/>
</template>

<style>

/********
*CSS DEFAULTS
********/

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:wght@700&family=Poppins:wght@300&display=swap');


:root{
  --basecolor: #0084E3;
  --default: rgb(170, 161, 161);
  --checkbackground: #29BF12;
}

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html{
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 , p{
  color: var(--default);
  font-family: 'Poppins', sans-serif;
}

input, select{
  padding: 7px;
  outline: none;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #cbd1d8;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid #0651431c;
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0px 1000px #065143 inset;
  transition: background-color 5000s ease-in-out 0s;
}

::selection{
  box-shadow: 0px 20px 5px rgba(0 , 0 , 0 .3);
  color: #fff;
}


::-webkit-scrollbar {
  width: 10px;
  background:lightgray;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(189, 198, 201); 
    border-radius: 17px;
}


::-webkit-scrollbar-thumb {
    border-radius: 17px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    background:#e3e8e9;
} 


hr{
  border: 1px solid #cbd1d8;
  margin: 1.5rem 0px;
  font-size: 1px;
}

ul, li, ol {
  list-style-type: none;
  color: var(--default);
  font-family: 'Poppins', sans-serif;
}

#app {
  font-family: 'Poppins', sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--default);
}

</style>
