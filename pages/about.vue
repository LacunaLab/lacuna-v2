<template lang="pug">
.app-wrapper
	app-header( :identity="data.identity" )
	#about.bb
		.wrapper.ptb4
			h1.f5.mb1 About Lacuna Lab
			.row
				.col.col-xs-12.col-sm-6
					.about-us.html( v-html="data.about.about" )
				.col.col-xs-12.col-sm-6
					//- h2.f3.mb1 Find Us
					p( style="white-space: pre" ) {{data.identity.address}}
					p.mt1: a(:href="`tel:${data.identity.telephone}`" title="Lacuna Lab Telephone Number") {{data.identity.telephone}}
					p.mt1: a.button(:href="`mailto:${data.identity.default_email}`" title="Lacuna Lab Email Address") {{data.identity.default_email}}

		.relative( style="min-height: 50vh")
			google-map( :gps="data.identity.location" v-bind:styles="data.identity.map_style" )
		
	app-footer( :identity="data.identity" )
</template>

<script>

import GoogleMap from '~/core/components/_Map.vue'
import DynamicImage from '~/core/components/DynamicImage.vue'
import Gallery from '~/core/components/Gallery.vue'
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
	},
	components: {
		AppHeader,
		AppFooter,
		DynamicImage,
		GoogleMap,
		Gallery

	},
	mounted() {
	}
}
</script>

<style>
</style>
