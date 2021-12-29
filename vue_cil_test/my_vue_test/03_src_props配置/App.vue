<template>
	<div>
    <Student name="李四" sex="女" :age="18"/>  <!-- age前加冒号，双引号中是表达式此处的18是数字型，不加冒号就只能是字符串 -->
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
