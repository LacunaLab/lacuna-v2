<template lang="pug">
.app-wrapper
	app-header( :identity="data.identity" )
	#events.bb: .wrapper
		h1.f5.mt2.mb1 Events
		.events-wrapper: .row
			.event-unit.col.col-sm-12.col-md-4( v-for="event, i in data.events " v-bind:key="i" itemscope itemtype="http://schema.org/Event" )
				nuxt-link( :to="`/events/${event.url}`"): dynamic-image( :file="event.cover" )
				h2.mt1.f3( itemprop="name" ): nuxt-link( v-bind:to="`/events/${event.url}`" itemprop="url" ) 
					span {{event.title}}
				p.mtb1.bolder
					span.date( itemprop="startDate" ) {{$moment(event.start_date).format('ddd D MMM Y')}}  
					span.time( itemprop="doorTime" ) {{ $moment(event.start_date).format('HH:mm') }}
				.event-description.f2.clamp4 {{event.short_description}}
				.tags.mb4.mt1
					//- span.f2.tag.gray.outline( v-for=" t, i in event.tags" :key="i") {{t.event_tags_id.name}}
	app-footer( :identity="data.identity" )
</template>

<script>

import Base from '~/components/Base.vue'
import AppHeader from '~/components/_Header.vue'
import AppFooter from '~/components/_Footer.vue'
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
	    getMetaTitle() {
	      return `Events | ${this.$store.state.meta.title}`;
	    }
	},
	components: {
		AppHeader,
		AppFooter,
		DynamicImage

	},
	mounted() {
	}
}
</script>

<style>
</style>
