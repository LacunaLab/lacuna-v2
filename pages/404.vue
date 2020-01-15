<template lang="pug">
.app-wrapper
	app-header( :identity="data.identity" )
	#about.bb
		.wrapper.ptb4
			.row
				.col.col-xs-0.mobile-hide.col-sm-4
				.col.col-xs-12.col-sm-4.align-center
					h1.f4.mt2.mb1 Page Not Found
					p: nuxt-link.button( to="/" ) Go to Homepage
		
	app-footer( :identity="data.identity" )
</template>

<script>

import Base from '~/components/Base.vue'
import AppHeader from '~/components/_Header.vue'
import AppFooter from '~/components/_Footer.vue'

export default {
	extends: Base,
	data() {
  		return {
  		}
	},
	computed: {
	},
	methods: {
		getMetaTitle() {
			return `Page Not Found | ${this.$store.state.meta.title}`;
		},
	},
	components: {
		AppHeader,
		AppFooter

	},
	mounted() {
	}
}
</script>

<style>
</style>
