<template>
  <div class="notes">
    <van-popup v-model="show" position="right" :overlay="false">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="handleClick(item,index)">{{item.name}}</li>
        </ul>
    </van-popup>
    <van-icon name="wap-nav" @click="show = !show" />
    <chapter :content="content" v-if="chapShow" @on-click="chapterClick"></chapter> 
    <router-view />
  </div>
</template>
<script>
import axios from 'axios'
import chapter from '@/components/chapter/chapter'
export default {
    components:{
        chapter
    },
    data(){
        return{
            show:false,
            chapShow:false,
            list:[
                {name: 'HTML',url:'html'},
                {name: 'CSS',url:'css'},
                {name: 'JavaScript',url:'javascript'},
                {name: 'Vue',url:'vue'},
                {name: 'Git',url:'git'}
            ],
            content:[
                {
                    url:'vueasync',
                    img:require("../../assets/img/chapter/vue.png"),
                    title:'Vue修饰符',
                    cont:'为了方便大家写代码，vue.js给大家提供了很多方便的修饰符，比如我们经常用到的取消冒泡，阻止默认事件等等~ 目录 表单修饰符 事件修饰符 鼠标按键修饰符 键值修饰符 v-bind修饰符 表单修饰符…'
                }
            ]
        }
    },
    methods:{
        //菜单点击
        handleClick(item,index){
            this.show = false;
            switch (item.url){
                case 'vue': this.chapShow = true;
                break;
            }
        },
        //章节点击
        chapterClick(val){
            this.chapShow = false
            this.$router.push({name:val.url})
        },
        async getInfo(){
            let res = await axios.get("https://www.easy-mock.com/mock/5bbab7c41ae8705b71ee9fd4/example/cs/notes/vuesync")
            console.log(res.data.data.list)
        }
       
    },
    created(){
    }
}
</script>
<style lang="less" scoped>
    .notes{
        width: 100%;
        height: 100%;
        position: relative;
        .van-icon{
            position: absolute;
            left: 10px;
            top: 10px;
            z-index: 9;
            color: #ddd;
        }
        .van-popup{
            width: 50%;
            height: 100%;
            background: #222;
            color: rgba(255,255,255,.7);
            ul{
                width: 80%;
                margin: 15px auto 0;
                li{
                    text-align: center;
                    padding: 5px 0;
                    font-size: 0.5rem;
                }
            }
        }
        //vue
        .notes-content{
            width: 100%;
            height: 100%;
            position: relative;
            font-size: 0.33rem;
            ul{
                width: 95%;
                li{
                    display: flex;
                    img{
                        display: block;
                        width: 40%;
                    }
                    div{
                        width: 60%;
                    }
                }
            }
        }
    }
    
     
</style>
