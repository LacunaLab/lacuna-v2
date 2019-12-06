<template lang="pug">
#header: .wrapper
	h1.logo
		nuxt-link( to="/" ) 
			span Lacuna Lab 
			lacuna-logo
	.row
		.col.col-xs-12.col-sm-3: .header-link.uppercase-link: nuxt-link( to="/events" ) Events
		.col.col-xs-12.col-sm-3: .header-link.uppercase-link: nuxt-link( to="/members" ) Members
		.col.col-xs-12.col-sm-3.align-right: .header-link.uppercase-link: nuxt-link( to="/about" ) About
		.col.col-xs-12.col-sm-3.align-right: .header-link.uppercase-link: nuxt-link( to="/contact" ) Contact
</template>

<script>
import LacunaLogo from "~/assets/logo.svg?inline";
export default {
  props: ['identity'],
  components: {
  	LacunaLogo
  }
}
</script>
<style lang="sass">

.uppercase-link
	text-transform: uppercase
	font-weight: medium
	font-size: 14px
	a, a:visited, a:hover
		text-decoration: none
		color: #111
		&:hover
			color: #111

$logoSize: 60px

#header
	position: fixed
	z-index: 2
	width: 100%
	.header-link
		padding: 2em 0em
	.logo
		position: absolute
		left: 50%
		top: 0.5em
		transform: translate(-50%, 0%)
		width: $logoSize
		height: $logoSize
		span
			opacity: 0
			position: absolute
			font-size: 8px
		svg
			width: 100%
			height: 100%
</style>
