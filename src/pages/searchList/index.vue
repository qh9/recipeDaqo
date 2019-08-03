<template>
    <div>
         <div class="forms">
            <input type="text" placeholder="搜索任何你想要的" v-model="value" v-on:input="inp">
        </div>
      <div class="list-search">
        <div v-for="(item,index) in menu" :key="index" >
          <div v-for="(items,ind) in item" :key="ind" >
            <div class="search-anser">
                <dl class="context" @click="xiangqing(items)">
                  <dt><img :src="items.albums" /></dt>
                  <dd>
                    <p>{{items.title}}</p>
                    <!-- <p>{{items.burden}}</p> -->
                    <!-- <p>{{items.imtro}}</p> -->
                    <!-- <p>{{items.ingredients}}</p>
                    <p>{{items.tags}}</p>
                    <div v-for="(ite,i) in items.steps" :key="i">
                          <img :src="ite.img" alt="">
                          <p>{{ite.step}}</p>
                    </div> -->
                  </dd>
                </dl>
                
            </div>
          </div>
        </div>
        
      </div>
    </div>
</template>

<script>

import {mapState} from "vuex"
export default {
  data () {
    return {
        value:'',
        id:''
    }
  },
  computed:{
    ...mapState({
      menu:state=>state.menu
    })
  },
  components: {
    // search
  },

  methods: {
      inp(e){
        this.value = e.target.value
        this.$store.dispatch('getMenus',this.value)
      },
      xiangqing(item){
        this.id = item.id
      
        wx.navigateTo({
          url: '/pages/searDetail/main?id='+this.id,
          success: (result)=>{
            
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      }
  },

  // created () {
  //   this.$store.dispatch('getData')
  // }
}
</script>

<style scoped>
.forms{
  width:100%;
  height:44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 15px;
  box-sizing: border-box;
  position: fixed;
  top:0;
  border-bottom:1px solid #ccc;
  z-index: 99;
  background:#fff;
}
.forms input {
  width:90%;
  background:#ccc;
  height:30px;
  line-height: 30px;
  text-indent: 20px;
  border-radius:5px;
}
.list-search{
  position: relative;
  top:50px;
}  
.context{
    width:100%;
    height:150px;
    display: flex;
    padding:0 15px;
    box-sizing: border-box;
}
.context dt{
    width:100px;
    height:100px;
}
.context dt img{
    width:100px;
    height:100px;
}
.context dd{
    margin-left:20px;
}
</style>
