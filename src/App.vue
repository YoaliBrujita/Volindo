<template>
  <div id="app">
    
    <router-view/>
    <video autoplay muted loop id="miFondo">
      <source src="./assets/video/paisaje.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<style lang="scss">
*{
  margin:0px;
  padding: 0px;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#miFondo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
  z-index:1;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
