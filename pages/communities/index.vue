<template lang="pug">
	#communities: .wrapper
		h1 Communities
		.community(v-for="c, i in data.communities" :key="i") 
			h1: nuxt-link(:to="`/communities/${c.url}`") {{c.name}}
</template>

<script>

import Base from '~/components/Base.vue'

export default {
	extends: Base,
	data() {
  		return {
  		}
	},
	computed: {
	},
	methods: {
	},
	components: {

	},
	mounted() {
	}
}
</script>

<style>
</style>
