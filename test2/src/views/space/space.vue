<template>
  <div class="space">
    <p>空间展示</p>
    <div class="container">
        <div class="content"></div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style lang="less" scoped>
    .space{
        width: 100%;
        height: 100%;
    }
    .container {
        position: relative;
        width: 100%;
        height: 300px;
        background-color: #5465;
    }
    .content {
        position: absolute;
        left: 0;
        top:  0;
        bottom: 0;
        right: 0;
        width: 100px;
        height: 100px;
        margin: auto;
        background-color: #6465;
    }


</style>
