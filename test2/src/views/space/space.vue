<template>
  <div class="space">
    <p>空间展示</p>
    <times />
    <div class="img-wrapper">
        <!-- <img :src="item.img" alt=""> -->
        <img v-for="(item,index) in imgList" v-lazy="item.img" :key="index">
    </div>
    <!-- <div v-for="(item,index) in imgList" :key="index" v-lazy:background-image="item.img" /> -->
  </div>
</template>
<script>
import api from '@/api/api'
import times from '@/components/time/times'
export default {
    components:{
        times
    },
    data(){
        return{
            imgList:[] 
        }
    },
    created(){
        this.getImg()
    },
    methods:{
        async getImg(){
            let res = await api.get('cs/space/img')
            // console.log(res.data.data)
            this.imgList = res.data.data
            console.log(this.imgList)
        }
    }
}
</script>
<style lang="less" scoped>
    .space{
        width: 100%;
        height: 100%;
        font-size: 0.5rem;
        .img-wrapper{
            display: flex;
            flex-wrap: wrap;
            img{
                display: block;
                width: 50%;
            }
        }
    }
    
</style>
