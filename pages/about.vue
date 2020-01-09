<template lang="pug">
.app-wrapper
	app-header( :identity="data.identity" )
	#about.bb
		.wrapper.ptb4
			.row
				.col.col-xs-12.col-sm-6
					h1.f5.mb1 About Lacuna Lab
					.about-us.html( v-html="data.about.about" )
				.col.col-xs-12.col-sm-6
					gallery( :files="data.about.gallery.photos" )
					//- .image.inline-block( v-for="img, i in data.about.gallery.photos" :style="{width: `${100/data.about.gallery.photos.length}%`}" ): dynamic-image( :file="img.directus_files_id" )
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
