<template lang="pug">
.homepage
	app-header( :identity="data.identity" )
	.header-push
	.homepage-intro.pb4: .wrapper
		.dynamic Lacuna Lab is about {{dynamic.current}}
		.introduction
			.text( v-html="data.homepage.introduction" )
			nuxt-link.button( to="/contact" ) Learn More
			nuxt-link.button( to="/contact" ) Get In Touch
	.homepage-events.pb4: .wrapper
		.row
			.col.col-xs-6
				h2.mb2 Events
			.col.col-xs-6.align-right
				nuxt-link( to="/events" ) View All Events
		.row.events
			.col.col-xs-12.col-sm-4.event( v-for="event, i in events" v-bind:key="i" ) 
				h3: nuxt-link( :to="`/events/${event.url}`") {{event.title}}
				//- img( :src=" ev")
				//- p {{event.cover}}
				.short() {{event.short_description}}

	.homepage-members.pb4: .wrapper
		.row
			.col.col-xs-6
				h2.mb2 Members
			.col.col-xs-6.align-right
				nuxt-link( to="/members" ) View Archive
		.members
			.member( v-for="m, i in members" v-bind:key="i" )
				nuxt-link( :to="`/members/${m.url}`") {{m.first_name}} {{m.last_name}}

	app-footer( :identity="data.identity" )
		
</template>

<script>
import Base from '~/components/Base.vue'
import AppHeader from '~/components/_Header.vue'
import AppFooter from '~/components/_Footer.vue'

export default {
	extends: Base,
	computed: {
		events() {
			return this.$store.state.data['events-homepage'];
		},
		members() {
			return this.$store.state.data['members'];
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
	components: {
		AppHeader,
		AppFooter
	},
	methods: {
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

	}
}
</script>

<style lang="sass">

@import './../layouts/theme'

.homepage
	.homepage-intro
		width: 100%
		padding-top: 400px
	.dynamic
		font-family: 'Anonymous Pro', monospace
		font-size: 24px
		font-weight: bolder
		line-height: 32px
		text-align: center
	.introduction
		width: $maxWidth/2
		margin: 0 auto
		font-size: 1.4em
		font-weight: light

</style>
