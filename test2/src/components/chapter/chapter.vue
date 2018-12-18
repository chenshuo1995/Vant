<template>
  <div class="chapter">
        <h1>章节分布</h1>
        <ul>
            <li v-for="(item,index) in content" :key="index" @click="handleClick(item,index)">
                <div class="wrapper">
                    <img :src="item.img" alt="">
                    <div class="title">
                        <span>{{item.title}}</span>
                        <p>{{item.cont}}</p>
                    </div>
                </div>
            </li>
        </ul>
  </div>
</template>
<script>
export default {
    name:'chapter',
    props:{
        content:{
            type:Array,
            default:()=>[]
        }
    },
    methods:{
        handleClick(item,index){
            this.$emit("on-click",item)
        }
    }
}
</script>

<style lang="less" scoped>
    .chapter{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        font-size: 0.36rem;
        color: #333;
        h1{
            font-size: 0.53rem;
            background: #f7f7f7;
            font-weight: 600;
            padding: 5px 0 5px 10px;
            margin-top: 50px;
        }
        ul{
            width: 100%;
            overflow: hidden;
            li{
                width: 100%;
                height: 150px;
                padding: 10px 0 0 0;
                border-bottom: 5px solid #f2f2f2;
                .wrapper{
                    width: 95%;
                    margin: 0 auto;
                    display: flex;
                    img{
                        display: block;
                        width: 40%;
                        height: 100%;
                    }
                    .title{
                        width: 60%;
                        margin-left: 10px;
                        span{
                            font-size: 0.45rem;
                            font-weight: 500;
                        }
                        p{
                            color: #b6b6b6;
                        }
                    }
                }
                
            }
        }
    }
  
</style>
