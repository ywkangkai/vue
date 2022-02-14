<template>
  <div class="lujing">
    <button @click="houtui">后退</button>
    <button @click="qianjin">前进</button>
  </div>

</template>

<script>
export default {
  name:'Banner',
  methods:{
    houtui(){
      this.$router.back()
    },
    qianjin(){
      this.$router.forward()
    }
  }
}
</script>

<style>
  .lujing{
    margin-bottom: 10px;
  }
</style>