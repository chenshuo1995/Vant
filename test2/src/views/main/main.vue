<template>
  <div class="main">
    <div class="firstLoad" v-if="loadShow">
          <span>{{time}}s</span>
          <div class="center">
            <div></div>
            <p>欢迎进入Mr.chen的博客</p>
          </div>
          <van-button round @click="jump">点击进入</van-button>
    </div>
    
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
      loadShow:true,
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
      active:0,
      time:3,
      clock:null
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
  mounted() {
    this.clock = setInterval(()=>{
      if(this.time == 0) return
      this.time--;
    },1000)
    setTimeout(()=>{
      this.loadShow = false;
    },3000)
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
    },
    jump(){
      clearInterval(this.clock)
      this.loadShow = false;
    }
  },
}
</script>

<style lang="less" scoped>
  .main{
    position: relative;
    width: 100%;
    height: 100%;
    .firstLoad{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size:0.5rem;
      span{
        position: absolute;
        right: 15px;
        top: 5px;
        color: #bbb;
      }
      .center{
        width:55%;
        div{
          width: 100%;
          height: 200px;
          background: url("../../assets/img/touxiang.jpg") 0 0 no-repeat;
          background-size: 100% 135%;
          border-radius: 50%;
        }
        p{
          text-align: center;
        }
      }
    }
  }
  .van-button{
    position: absolute;
    bottom: 10px;
    right: 15px;
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
