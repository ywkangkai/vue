<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :todo="todo"></MyHeader>
        <MyList :todo="todo" :deleteobj="deleteobj"></MyList>
        <MyFooter :todo="todo" :cleardone="cleardone"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
	import MyHeader from './components/MyHeader'
	import MyFooter from './components/MyFooter'
  import MyItem from "./components/MyItem";
	import MyList from "./components/MyList";
	export default {
		name:'App',
		components:{MyHeader,MyFooter,MyItem,MyList},
    data(){
		  return {
		    todo: JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    mounted() {
    },
    methods:{
      cleardone(){
        this.todo = this.todo.filter((todos)=>{
          return todos.done === false
        })
      },
      deleteobj(id){
        this.todo = this.todo.filter((todos)=>{
          return todos.id !== id
        })
      }
    },
    watch:{
		  todo:{
		    deep: true,
		    handler(value){
		        localStorage.setItem('todos', JSON.stringify(value))
        }
      }
    }
  }

</script>

<style scoped>
/*base*/
body {
  background: #fff;
}



.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}








</style>
