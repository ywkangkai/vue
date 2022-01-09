<template>
  <ul class="todo-main">
   <MyItem v-for="content of todo" :key="content.id" :title="content.title" :todo_obj="content" :deleteobj="deleteobj"></MyItem>
  </ul>
</template>
<script>
import MyItem from "./MyItem";
export default {
  name:'MyList',
  data() {
    return {
      name:'张三',
      sex:'男'
    }
  },
  components:{MyItem},
  props:['todo','deleteobj']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
