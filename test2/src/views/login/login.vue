<template>
    <div style="display:flex;height:100%">
        <div class="wrapper" ref="menuScroll">
            <ul class="content" >
                <li v-for="item in 30" :key="item">{{item}}</li>
            </ul>
            <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
        </div>
        <div class="wrapper" ref="foodScroll">
            <ul class="content">
                <li v-for="item in 30" :key="item">{{item}}</li>
            </ul>
            <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
        </div>
        
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            menuScroll:{},
            foodScroll:{}
        }
    },
    methods:{
        initScroll() {
            this.menuScroll = new BScroll(this.$refs.menuScroll, {
                click: true,
                scrollY: true,
            })
            this.foodScroll = new BScroll(this.$refs.foodScroll, {
                // probeType: 3,
                click: true,
                scrollY: true,
            })
        },
    },
    created(){
       
    },
    mounted(){
        this.initScroll()
    }
}
</script>
<style lang="less" scoped>
    .wrapper{
        width: 50%;
        height: 100%;
        overflow: hidden;
        ul{
            li{
                text-align: center
            }
        }
    }
</style>
