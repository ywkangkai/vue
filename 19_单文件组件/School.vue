<template>
  <div class="demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
export default {  //省略了Vue.extend
  name: 'School',
  data(){
    return {
      schoolName:'尚硅谷',
      address:'北京昌平'
    }
  },
  methods: {
    showName(){
      alert(this.schoolName)
    }
  },
}
</script>

<style>
  .demo{
    background-color: olive;
  }
</style>