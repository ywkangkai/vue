<template>
  <div>
    <img src="./assets/logo.png">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/Student'
import Student from './components/School'
export default {  //Vue.extend
  name: 'App',
  components: {
    School,
    Student
  },
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
