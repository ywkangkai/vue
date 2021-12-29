<template>
	<div>
		<h2>学生姓名：{{name | myslice}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<input type="text" v-fbind:value="name">
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三11111',
				sex:'男'
			}
		},
	}
</script>