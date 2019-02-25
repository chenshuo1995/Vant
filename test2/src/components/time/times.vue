<template>
    <div class="time">
        <p>截止到{{now}}</p>
        <div class="times">
            度过了<span v-for="(item,index) in time" :key="index">{{item}}</span>秒
        </div>
        <div class="times">合计<span v-for="(item,index) in day" :key="index">{{item}}</span>天</div>
    </div>
</template>
<script>
import util from '@/assets/js/util'
export default {
    data(){
        return{
            timer:null,
            time:null,
            now:null,
            day:null
        }
    },
    created(){
        
    },
    mounted(){
        this.timer = setInterval(()=>{
            let date = new Date().getTime()
            let date1 = new Date('2015/05/01').getTime()
            this.now = util.timestampToTime(parseInt(date / 1000))
            this.time = [...parseInt((date - date1) / 1000).toString()]
            this.day = [...parseInt((date - date1) / 1000 / 3600 / 24).toString()]
        },1000)
    },
    destroyed(){
        clearInterval(this.timer)
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
    .time{
        width: 100%;
        font-size: 0.5rem;
        .times{
            font-size: 1rem;
            color: pink;
            span{
                width: 0.8rem;
                text-align: center;
                background: linear-gradient(to bottom right, rgba(29, 77, 207, 1) , rgba(99, 35, 196, 1)); 
                margin-left: 0.1rem;
                border-radius: 5px;
                color: #fff;
            }
        }
    }
</style>
