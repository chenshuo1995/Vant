<template>
  <div id="app">
    <transition name="fade"> 
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="less">
  @import url("./assets/css/reset.css");
  html,body{
    width: 100%;
    height: 100%;
    font-size: 0.2rem;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  
</style>
