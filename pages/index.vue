<template lang="pug">
.app-wrapper
	app-header.toggle-grow( :identity="data.identity" ref="appHeader" )
	.homepage
		.header-push
		.homepage-intro.bb.pb4: .wrapper
			.dynamic.f5.ptb2 Lacuna Lab is about {{dynamic.current}}
			.row
				.col.col-xs-0.mobile-hide.col-sm-3
				.col.col-xs-12.col-sm-6
					.text.f3( v-html="data.homepage.introduction" )
					.align-center.f2.mt4
						a.button( :href="`mailto:${data.identity.default_email}`" title="Lacuna Lab Email Address" ) Get In Touch
		.homepage-events.bb.ptb4: .wrapper
			.row
				.col.col-xs-6
					h2.f5 Events
				.col.col-xs-6.align-right
					nuxt-link.button( to="/events" ) View All Events
			.row.events
				.col.col-xs-12.col-sm-4.event( v-for="event, i in events" v-bind:key="i" )
					.date.f3.bold.mtb2
						span.date {{ $moment(event.start_date).format("ddd D MMM Y") }}
					nuxt-link( :to="`/events/${event.url}`"): dynamic-image( :file="event.cover" )
					h3.f4.mt1: nuxt-link( :to="`/events/${event.url}`") {{event.title}}
					address.mtb1.italic: .location( v-for="l, i in event.location " v-bind:key="i" ) {{l.locations_id.title}}
					.short() {{event.short_description}}

		.homepage-members.bb.ptb4: .wrapper
			.row
				.col.col-xs-6
					h2.f5 Members
				.col.col-xs-6.align-right
					nuxt-link.button( to="/members" ) View Archive
			.members.mt2
				.member( v-for="m, i in members" v-bind:key="i" v-if="m.profile_type === 'member'" )
					nuxt-link.relative.inline-block.brackets.mb2( :to="`/members/${m.url}`") {{m.first_name}} {{m.last_name}}
		.homepage-map
			google-map( :gps="data.identity.location" v-bind:styles="data.identity.map_style" )

	app-footer( :identity="data.identity" )
		
</template>

<script>

import GoogleMap from '~/core/components/_Map.vue'
import DynamicImage from '~/core/components/DynamicImage.vue'
import Base from '~/components/Base.vue'
import AppHeader from '~/components/_Header.vue'
import AppFooter from '~/components/_Footer.vue'

export default {
	extends: Base,
	components: {
		AppHeader,
		AppFooter,
		DynamicImage,
		GoogleMap
	},
	computed: {
		events() {
			return this.$store.state.data['events-homepage'];
		}
	},
	data() {
			return {
				dynamic: {
					wordIdx: 0,
					idx: 0,
					target: "",
					current: "",
					words: [],
					stamp: null,
					limit: 4,
					count: 0

				}
			}
	},
	methods: {

		getMetaTitle() {
			return `Collaborative co-creation space in Kreuzberg, Berlin | ${this.$store.state.meta.title}`;
		},
		shuffle(array) {
			array.sort(() => Math.random() - 0.5);
		},
		setChar( idx, ch ) {
			const moreThanCurrent = idx > this.dynamic.current.length-1;
			const lessThanTarget = idx < this.dynamic.target.length;
			if(moreThanCurrent && lessThanTarget ) {
				this.dynamic.current += ch;
			} else {
				this.dynamic.current = this.dynamic.current.substr( 0, idx ) + ch + this.dynamic.current.substr( idx + 1 );
			}
	},
		animate(timestamp) {
		if (!this.dynamic.start) this.dynamic.start = timestamp;
		const t = timestamp - this.dynamic.start;
		if (t > 10) {
			this.dynamic.count += 1;
				this.dynamic.start = timestamp;
			// const l = String.fromCharCode(0x30A0 + Math.random() * (0x30FF-0x30A0+1));
			let l = Math.random().toString(36).substring(7)[0];
			if (this.dynamic.idx > this.dynamic.target.length) l = " ";
			this.setChar( this.dynamic.idx , l );

				if (this.dynamic.count > this.dynamic.limit) {

					this.dynamic.count = 0;
					this.dynamic.limit = Math.random() * 20;
					if (this.dynamic.idx >= 40) {
						this.reset();
					}
				let c = this.dynamic.target.substr( this.dynamic.idx, 1 );
				if (this.dynamic.idx > this.dynamic.target.length) c = " ";
				this.setChar( this.dynamic.idx, c);
					this.dynamic.idx += 1;
				}
			}
		window.requestAnimationFrame(this.animate);
		},
		reset() {
			this.dynamic.idx = 0;
			this.dynamic.wordIdx += 1;
			if (this.dynamic.wordIdx >= this.dynamic.words.length) this.dynamic.wordIdx = 0;
			this.dynamic.limit = Math.random() * 5;
			this.dynamic.target = this.dynamic.words[this.dynamic.wordIdx];
		}
	},
	mounted() {
		console.log('MOUNTED');

		const dyn = this.data.homepage.dynamic_text;
		this.dynamic.idx = parseInt( Math.random() * dyn.length );
		for (let i = 0; i < dyn.length; i++) this.dynamic.words.push( dyn[i].text );
		this.shuffle( this.dynamic.words );
		this.reset();
		window.requestAnimationFrame(this.animate);



			const logoToggle = new this.$scrollmagic.Scene({
				offset: 0,
				triggerHook: 0,
				reverse: true,
				duration: '300px'
			}).setTween( this.$gsap.TweenMax.fromTo( 
				'.toggle-grow svg', 
				1, 
				{ 
					scale: '3',
					x: '0%', 
					y: '200px'
				}, 
				{ 
					scale: '1',
					x: '0%', 
					y: '0px'
				}
			) );

			this.$ksvuescr.$emit('addScene', 'logoToggle', logoToggle);

	}
}
</script>

<style lang="sass">

@import '@/assets/css/theme'

.homepage
	.homepage-intro
		width: 100%
		padding-top: 200px
	.homepage-map
		width: 100%
		position: relative
		min-height: 50vh
	.dynamic
		font-family: 'Anonymous Pro', monospace
		text-align: center
	.introduction
		max-width: $maxWidth/2
		margin: 0 auto
	.members
		@media only screen and (min-width: 48em)
			display: flex
			flex-wrap: wrap
			.member
				flex: 1 1 25%

</style>
