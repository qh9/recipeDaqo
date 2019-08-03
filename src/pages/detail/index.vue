<template>
    <div>
        <!-- {{menuId}} -->
        <div class="detail" v-for="(item,index) in menuId" :key="index">
            <div>
                <img :src="item.albums" alt="">
                <h2>{{item.title}}</h2>
            </div>
            
            <div>
                <p>食材:{{item.ingredients}}</p>
                <p>配料:{{item.burden}}</p>
                <div v-for="(items,ind) in item.steps" :key="ind">
                    <p>{{items.step}}</p>
                    <img :src="items.img" alt="">
                    
                </div>
                <div>
                    <p>用途:{{item.tags}}</p>
                    <p>来历:{{item.imtro}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            list:''
        }
    },
     computed:{
        ...mapState({
            menuId:state=>state.menuId
        })
    },
    onLoad(options){
        this.list=options.event
        this.$store.dispatch('getMenuId', this.list)
    }
}

</script>

<style scoped>
    .detail{
        width:100%;

    }

</style>
