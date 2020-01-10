<template lang="pug">
.app-wrapper
	app-header( :identity="data.identity" )
	#members( 
		itemscope 
		itemtype="http://schema.org/Organization")
		section.ptb4
			.wrapper: .row: .col.col-xs-12: h1.f5.mb1 Members
			.events-wrapper.wrapper: .row
				.event-unit.col.col-sm-12.col-md-4( 
					v-for="m, i in members " 
					v-if="m.profile_type === 'member'" 
					v-bind:key="i"  
					itemscope 
					itemtype="http://schema.org/Person" 
					itemprop="member" )
					member-link( :to="m" ): dynamic-image( :file="m.avatar" )
					h2.normal( itemprop="name" ).mtb1: member-link( :to="m" )
		//- section.bb.ptb4
		//- 	.wrapper: .row: .col.col-xs-12: h1.f5.mb1 Alumni
		//- 	.events-wrapper.wrapper: .row
		//- 		.event-unit.col.col-sm-12.col-md-4( 
		//- 			v-for="m, i in members " 
		//- 			v-if="m.profile_type === 'alumni'" 
		//- 			v-bind:key="i"  
		//- 			itemscope 
		//- 			itemtype="http://schema.org/Person" 
		//- 			itemprop="member" )
		//- 			h2.normal( itemprop="name" ).mtb1: nuxt-link( v-bind:to="`/members/${m.url}`" itemprop="url" ) {{m.first_name}} {{m.last_name}}
		//- section.bb.ptb4
		//- 	.wrapper: .row: .col.col-xs-12: h1.f5.mb1 Residencies
		//- 	.events-wrapper.wrapper: .row
		//- 		.event-unit.col.col-sm-12.col-md-4( 
		//- 			v-for="m, i in members " 
		//- 			v-if="m.profile_type === 'residency'" 
		//- 			v-bind:key="i"  
		//- 			itemscope 
		//- 			itemtype="http://schema.org/Person" 
		//- 			itemprop="member" )
		//- 			h2.normal( itemprop="name" ).mtb1: nuxt-link( v-bind:to="`/members/${m.url}`" itemprop="url" ) {{m.first_name}} {{m.last_name}}
	app-footer( :identity="data.identity" )
</template>

<script>

import Base from '~/components/Base.vue'
import AppHeader from '~/components/_Header.vue'
import AppFooter from '~/components/_Footer.vue'
import MemberLink from '~/components/_MemberLink.vue'
import DynamicImage from '~/core/components/DynamicImage.vue'

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
		AppHeader,
		AppFooter,
		DynamicImage,
		MemberLink
	},
	mounted() {
	}
}
</script>

<style>
</style>
