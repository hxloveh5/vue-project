<template>
  <div id="app">
    <div class="change" @click="handleClick">{{message}}</div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
  	return {
  		message: 'hello world'
  	}
  },
  methods: {
  	handleClick () {
  		this.message = 'bey world'
  	}
  }
}
</script>

<style scoped>
	.change {
		color: red;
	}
</style>
