<template>
  <div id="app">
    
    <van-tabbar v-model="active" @change="itemChange(footerArr[active])">
        <van-tabbar-item v-for="(item,index) in footerArr" :icon="item.icon" :key="index">{{item.name}}</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      footerArr:[
          {
              'icon':'home',
              'name':'首页',
              'url':'home'
          },
          {
              'icon':'records',
              'name':'笔记',
              'url':'notes'
          },
          {
              'icon':'photo',
              'name':'空间',
              'url':'space'
          },
          {
              'icon':'contact',
              'name':'个人中心',
              'url':'login'
          },
      ],
      active:0
    }
  },
  created(){
    let path = this.$route.path.split("/")[1]
    this.footerArr.forEach((its,ins)=>{
        if(its.url == path){
            this.active = ins
        }
    })
  },
  methods:{
    itemChange(item){
       
      switch (item.url){
          case 'home':this.$router.push({name:item.url});
          break;
          case 'notes':this.$router.push({name:item.url});
          break;
          case 'space':this.$router.push({name:item.url});
          break;
          case 'login':this.$router.push({name:item.url});
          break;
      }  
    }
  }
}
</script>

<style lang="less">
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
