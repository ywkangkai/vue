<template>
  <div class="demo">
    <h2>姓名：{{Name}}</h2>
    <h2>年龄：{{address}}</h2>
  </div>
</template>

<script>
export default {  //Vue.extend
  name: 'Student',
  data(){
    return {
      Name:'老王',
      age:'88'
    }
  },
}
</script>
