<template lang="pug">
#header.bb( v-bind:class="{'is-active': active}" ): .wrapper
	h1.logo
		nuxt-link( to="/" ) 
			span Lacuna Lab
			lacuna-logo
	button.hamburger.hamburger--squeeze.mobile-show(type='button' v-bind:class="{'is-active': active}" @click="active = !active")
		span.hamburger-box
		span.hamburger-inner
	.row
		.col.col-xs-12.col-sm-3: .header-link.uppercase-link: nuxt-link( to="/events" ) Events
		.col.col-xs-12.col-sm-3: .header-link.uppercase-link: nuxt-link( to="/members" ) Members
		//- .col.col-xs-12.col-sm-2: .header-link.uppercase-link: nuxt-link( to="/communities" ) Communities
		.col.col-xs-12.col-sm-3.align-right: .header-link.uppercase-link: nuxt-link( to="/about" ) About
		.col.col-xs-12.col-sm-3.align-right: .header-link.uppercase-link: nuxt-link( to="/contact" ) Contact
</template>

<script>
import LacunaLogo from "~/assets/logo.svg?inline";
export default {
	props: ['identity'],
	components: {
		LacunaLogo
	},
	computed: {
	},
	data() {
		return {
			active: false
		}
	}
}
</script>
<style lang="sass">

#app #header 

</style>
