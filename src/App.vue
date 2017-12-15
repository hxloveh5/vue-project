<template>
  <div id="app">
    <div class="wang" @click = "handleClick">{{message}}</div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
  	return {
  		message: 'hello everyone'
  	}
  },
  methods: {
  	handleClick () {
  		this.message = 'byebye everyone'
  	}
  }
}
</script>

<style scoped>
	.wang {
		color: red;
	}
</style>
