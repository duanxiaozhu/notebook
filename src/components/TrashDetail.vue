<template>
  <div>
    <h1>{{ msg }} : {{ $route.params.noteId }}</h1>
  </div>
</template>

<script>
import Auth from '@/apis/auth'
export default {
  data() {
    return {
      msg: "笔记回收站"
    };
  },
  created(){
    Auth.getInfo().then(res=>{
      if(!res.isLogin){
        this.$router.push({path:'/login'})
      }
    })
  }
};
</script>

<style lang='less' scoped>
h1 {
  color: blue;
}
</style>
