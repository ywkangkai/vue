<template>
	<div>
		<ul>
			<li v-for="m in messagelist" :key="m.id">
				<router-link :to="{
				  path:'/home/message/detail',
				  query:{id:m.id,title:m.title}
				}">
          message{{m.id}}
        </router-link>
        <button @click="pushShow(m)">pushShow</button>
			</li>
		</ul>
    <router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
    data(){
		  return{
		    messagelist:[
          {id:'001',title:'消息001'},
          {id:'002',title: '消息002'},
          {id:'003',title: '消息003'}
        ]
      }
    },
    methods:{
      pushShow(m){
        this.$router.push({
          path:'/home/message/detail',
          query:{id:m.id,title:m.title}
        })
      }

      }

	}
</script>