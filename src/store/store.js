// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lists:[],
    menu:[],
    menustype:[],
    menuId:[],
    searDetail:[]
  },
  mutations: {
    
    menus(state,payoad){
        state.lists = payoad
    },
    menuType(state,payoad){
      state.menu=payoad
    },
    menuTypes(state,payoad){
        state.menustype = payoad
    },
    menusid(state,payoad){
      state.menuId = payoad
    },
    search(state,payoad){
      state.searDetail = payoad
    }
  },
  actions:{
    getData(context){
      wx.request({
        url: 'http://apis.juhe.cn/cook/category?key=786af9ddc00e377f8e85cc78141bdbd4',
        success: (res)=>{
          context.commit('menus', res.data.result)
          // console.log(res.data.result)
        }
      })
    },
    getMenus(context,val){
      // console.log(val)
      wx.request({
        url:'http://apis.juhe.cn/cook/query?key=786af9ddc00e377f8e85cc78141bdbd4&menu='+val,
        success: (res)=>{
          context.commit('menuType', res.data.result)
          // console.log(res.data.result)
        }
      })
    },
    getMenuType(context,cid){
      wx.request({
        url:'http://apis.juhe.cn/cook/index?key=786af9ddc00e377f8e85cc78141bdbd4&cid='+cid,
        success: (res)=>{
          context.commit('menuTypes', res.data.result.data)
          // console.log(res.data.result.data)
        }
      })
    },
    getMenuId(context,id){
      wx.request({
          url:'http://apis.juhe.cn/cook/queryid?key=786af9ddc00e377f8e85cc78141bdbd4&id='+id,
          success: (res)=>{
          context.commit('menusid', res.data.result.data)
          console.log(res.data.result.data)
        }
      })
    },
    searchDetail(context,id){
      wx.request({
          url:'http://apis.juhe.cn/cook/queryid?key=786af9ddc00e377f8e85cc78141bdbd4&id='+id,
          success: (res)=>{
          context.commit('search', res.data.result.data)
          console.log(res.data.result.data)
        }
      })
    }
  }
})

export default store
