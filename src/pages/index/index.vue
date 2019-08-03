<template>
  <div class="wrap">
    <search></search>
     <div class="list">
       <scroll-view scroll-y="true" class="list-left">
          <div>
            <p  v-for="(item,i) in lists" :key="i" :class="{'active':index===i}" @click="itemId(i,item)">{{item.name}}</p>
          </div>
        </scroll-view>
        <scroll-view scroll-y="true" class="list-right" v-if="parentId">
            <ul>
                <li v-for="(item,ind) in list" :key="ind" :class="{'active':indx===ind}" @click="itemType(item,ind)" :data-id="item.id">{{item.name}}</li>
            </ul>
        </scroll-view>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex"
import card from '@/components/card'
import search from '@/components/search'
// import List from '@/components/list'
export default {
  data(){
    return {
      text:"<",
        parentId:'',
        index:'',
        indx:'',
        list:[],
        event:''
    }
  },
  components: {
    card,
    search
  },
   computed:{
    ...mapState({
      lists:state=>state.lists
    })
  },
  methods:{
    itemId(index,item){
        this.index=index
        this.parentId = item.parentId
        this.list = item.list
      },
      itemType(item,ind){
        this.indx=ind,
        this.event=item.id
        wx.navigateTo({
          url: '/pages/eatType/main?id='+this.event,
          success: (result)=>{
            
          },
          fail: ()=>{},
          complete: ()=>{}
        });
  }},
  created () {
    this.$store.dispatch('getData')
  }
}
</script>

<style scoped>
.wrap{
  width:100%;
  height:550px;
  display: flex;
  flex-direction: column;
}
.active{
    background:cornflowerblue;
}
.list{
    width:100%;
    flex:1;
    position: relative;
    top:50px;
    display:flex;
}
.list-left{
    width:120px;
    height:500px;
    border-right:1px solid #eee;
    text-align: center;
}
.list-left p{
    height:50px;
    line-height: 50px;
    border-bottom:1px solid #eee;
}
.list-right{
    flex:1;
    height:500px;
    margin-left:20px;
}
.list-right li{
    height:50px;
    line-height: 50px;
}
</style>
