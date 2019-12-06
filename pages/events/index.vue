<template lang="pug">
	#events: .wrapper
		h1 Events
		.events-wrapper: .row
			.event-unit.col.col-sm-12.col-md-4( v-for="event, i in data.events " v-bind:key="i" itemscope itemtype="http://schema.org/Event" )
				h2( itemprop="name" ): nuxt-link( v-bind:to="`/events/${event.url}`" itemprop="url" ) {{event.title}}
				.event-description( v-html="event.description"  itemprop="description" )
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
