<template>
   <div class="form" >
     <span>{{text}}</span>
     <div class="search" @click="inp">
         <icon type="search"></icon>
        <input type="text" placeholder="搜索任何你想要的" disabled>
    </div>
    </div>

</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
    return{
      text:"<",
      value:''
    }
  },
  methods:{
    inp(){
      wx.navigateTo({
        url: '/pages/searchList/main',
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
  },

  computed:{
   
  },
  created(){
    
  }
}
</script>

<style scoped>
 .form{
      width:100%;
      height:44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 15px;
      box-sizing: border-box;
      border-bottom:1px solid #ccc;
      background:#fff;
      position: fixed;
      top:0;
      left:0;
      right:0;
      z-index: 99;
}
  .search{
      flex:1;
      display: flex;
      align-items: center;
      background:#ccc;
      height:0.7rem;
      justify-content: center;
      margin-left:20rpx;
}
.search input {
    background:#ccc;
    height:30px;
    line-height: 30px;
    border-radius:5px;
}
</style>
