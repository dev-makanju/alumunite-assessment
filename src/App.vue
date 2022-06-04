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
  border-radius: 3px;
  outline: none;
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
