<template lang="pug">
	#members: .wrapper
		h1 Members
		.events-wrapper: .row
			.event-unit.col.col-sm-12.col-md-4( v-for="member, i in data.members " v-bind:key="i"  itemscope itemtype="http://schema.org/Person" )
				h2( itemprop="name" ): nuxt-link( v-bind:to="`/members/${member.url}`" itemprop="url" ) {{member.first_name}} {{member.last_name}}
				//- .event-description( v-html="event.description"  itemprop="description" )
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
