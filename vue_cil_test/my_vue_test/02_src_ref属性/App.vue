<template>
  <div>
    <img src="./assets/logo.png">
    <h1 v-text="msg" ref="title"></h1>
    <School></School>
    <Student ref="sch"></Student>
    <button ref="btn" @click="show">点我获取信息</button>
  </div>
</template>

<script>
import School from './components/Student'
import Student from './components/School'
export default {  //Vue.extend
  name: 'App',
  data(){
    return{
      msg: '欢迎学习vue'
    }
  },
  components: {
    School,
    Student
  },
  methods:{
    show(){
      console.log(this.$refs.title) //真实dom元素
      //console.log(this.$refs.title.innerHTML) //获取元素文本信息
      console.log(this.$refs.btn) //真实dom元素
      console.log(this.$refs.sch)
    }
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
