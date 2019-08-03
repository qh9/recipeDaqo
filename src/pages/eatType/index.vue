<template>
    <div>
        <div v-for="(item,index) in menustype" :key="index">
            <div>
                 <dl class="context" @click="detail(item)">
                    <dt><img :src="item.albums" alt=""></dt>
                    <dd>
                        <p>菜名:{{item.title}}</p>
                        <p>食材:{{item.ingredients}}</p>
                        <p>详细步骤</p>
                    </dd>
                </dl>
            </div>
           
            
            
        </div>
        
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            id:{},
            event:''
        }
    },
    computed:{
        ...mapState({
            menustype:state=>state.menustype
        })
    },
    created(){
        // console.log(this)
        
    },
    methods:{
        detail(item){
            this.event=item.id
            wx.navigateTo({
                url: "/pages/detail/main?event="+this.event,
                success: (result)=>{
                    
                },
                fail: ()=>{},
                complete: ()=>{}
            });
        }
    },
    onLoad(options){
       this.id = options.id
       this.$store.dispatch('getMenuType',this.id)
    }
}
</script>

<style scoped>
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
