<template>
  <div id="app">
    <transition name="fade"> 
      <router-view/>
    </transition>
    <van-tabbar v-model="active" @change="itemChange(footerArr[active])">
        <van-tabbar-item v-for="(item,index) in footerArr" :icon="item.icon" :key="index">{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      footerArr:[
          {
              'icon':'shop',
              'name':'首页',
              'url':'home'
          },
          {
              'icon':'chat',
              'name':'其它',
              'url':'about'
          },
          {
              'icon':'records',
              'name':'社区',
              'url':'login'
          },
          {
              'icon':'gold-coin',
              'name':'个人中心',
              'url':'login'
          },
      ],
      active:0
    }
  },
  methods:{
    itemChange(item){
      switch (item.url){
          case 'home':this.$router.push({name:item.url});
          break;
          case 'about':this.$router.push({name:item.url});
          break;
          case 'login':this.$router.push({name:item.url});
          break;
      }  
    }
  }
}
</script>

<style lang="less">
  @import url("./assets/css/reset.css");
  html,body{
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity .5s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }
</style>
