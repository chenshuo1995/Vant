<template>
    <div class="async-box" ref="menuScroll">
        <div class="vueasync">
            <header>vue修饰符</header>
            <p>时间:2018-12-17&nbsp;&nbsp;作者:Mr.chen</p>
            <h3 class="include">为了方便大家写代码，vue.js给大家提供了很多方便的修饰符，比如我们经常用到的取消冒泡，阻止默认事件等等~</h3>
            <div class="wrapper">
                <h3>目录</h3>
                <ul>
                    <li>表单修饰符</li>
                    <li>事件修饰符</li>
                    <li>鼠标按键修饰符</li>
                    <li>键值修饰符</li>
                    <li>v-bind修饰符</li>
                </ul>
            </div>
            <div class="wrapper">
                <h3>表单修饰符</h3>
                <ul>
                    <li>填写表单，最常用的是什么？input！v-model~而我们的修饰符正是为了简化这些东西而存在的</li>
                    <li>
                        <div class="name">.lazy</div>
                        <pre>  
    &lt;div&gt;
        &lt;input type=&quot;text&quot; v-model=&quot;value&quot;&gt;
        &lt;p&gt;{{value}}&lt;/p&gt;
    &lt;/div&gt;   
                        </pre>
                    </li>
                    <li>从这里我们可以看到，我们还在输入的时候，光标还在的时候，下面的值就已经出来了，可以说是非常地实时。<br>
                        但是有时候我们希望，在我们输入完所有东西，光标离开才更新视图。</li>
                    <li>
                        <pre>  
    &lt;div&gt;
        &lt;input type=&quot;text&quot; v-model.lazy=&quot;value&quot;&gt;
        &lt;p&gt;{{value}}&lt;/p&gt;
    &lt;/div&gt;   
                        </pre>
                    </li>
                    <li>
                        这样即可~这样只有当我们光标离开输入框的时候，它才会更新视图，相当于在onchange事件触发更新。
                    </li>
                    <li>
                        <div class="name">.trim</div>
                        在我们的输入框中，我们经常需要过滤一下一些输入完密码不小心多敲了一下空格的兄弟输入的内容。
                        <pre>  
    &lt;input type=&quot;text&quot; v-model.trim=&quot;value&quot;&gt;   
                        </pre>
                    </li>
                    <li>
                        为了让你更清楚的看到，我改了一下样式，不过问题不大，相信你已经清楚看到这个大大的hello左右两边没有空格，尽管你在input框里敲烂了空格键。<br>                  
                        需要注意的是，它只能过滤首尾的空格！首尾，中间的是不会过滤的
                    </li>
                    <li>
                        <div class="name">.number</div>
                        看这个名字就知道，应该是限制输入数字或者输入的东西转换成数字，but不是那么简单。 <br>
                        如果你先输入数字，那它就会限制你输入的只能是数字。<br>     
                        如果你先输入字符串，那它就相当于没有加.number <br>
                    </li>
                </ul>
            </div>
            <div class="wrapper">
                <h3>事件修饰符</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
    
</template>
<script>

export default {
    name:'vueasync',
    data(){
        return{
            value:'{{value}}',
            menuScroll:{}
        }
    },
    methods:{
        
    },
    mounted(){
        
    }
}
</script>

<style lang="less" scoped>
    .async-box{
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .async-box::-webkit-scrollbar { width: 0 !important }
    .vueasync{
        width: 100%;
        position: relative;
        font-size: 0.37rem;
        color: #333;
        margin-top: 40px;
        padding-bottom: 40px; 
        header{
            text-align: center;
            font-size: 0.52rem;
        }
        p{
            text-align: center;
            color: #b6b6b6;
        }
        .include{
            width: 90%;
            margin: 5px auto 0;
            font-weight: 400;
        }
        .wrapper{
            h3{
                font-size: 0.52rem;
                background: #f7f7f7;
                font-weight: 400;
                padding: 5px 0 5px 15px;
                margin-top: 10px;
            }
            ul{
                list-style-type: circle;
                li{
                    padding: 3px 0 3px 15px;
                    .name{
                        font-size: 0.52rem;
                    }
                    pre{
                        color: #ff6a04;
                    }
                }
            }
        }
    }
  
</style>
