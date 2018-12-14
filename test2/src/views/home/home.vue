<template>
  <div class="home">
    <van-nav-bar title="首页"/>
    <!-- 轮播 -->
    <van-swipe :autoplay="4000">
         <van-swipe-item v-for="(item,index) in images" :key="index">
            <img :src="item" width="100%"/>
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
        images: [
            'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
            'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
            'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
            'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
        ]
    }
  },
  methods:{
        
  }
}
</script>
<style lang="less" scoped>
    .home{
        width: 100%;
        height: 100%;
        background: pink;
    }
    .van-swipe{
        height: 250px;
        text-align: center;
        .van-swipe-item{
            &:nth-child(2n){
                background: #ff0;
            }
            &:nth-child(2n+1){
                background: #f0f;
            }
            img{
                height: 100%;
            }
        }
    }
    a{
        font-size: 0.2rem;
    }
    
</style>
