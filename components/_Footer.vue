<template lang="pug">
	#footer
		.bb
		.wrapper.pt2
			.row
				.col.col-xs-12.col-md-4.mobile-show
					//- h6.mb1 Impressum
					p( style="white-space: pre" ) {{identity.address}}
					p: a(:href="`mailto:${identity.default_email}`" title="Lacuna Lab Email Address") {{identity.default_email}}
					p: a(:href="`tel:${identity.telephone}`" title="Lacuna Lab Telephone Number") {{identity.telephone}}
				.col.col-xs-12.col-md-4
					//- h6.mb1 Newsletter
					p.mb1.mt2 Subscribe to our newsletter:
					form( action='https://tinyletter.com/lacunalab' method='post' target='popupwindow' onsubmit="window.open('https://tinyletter.com/lacunalab', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true")
						input(type='hidden' value='1' name='embed')
						.els
							.textinput: input#tlemail(placeholder='Email address' type='text' name='email')
							input.button(type='submit' value='Subscribe')

				.col.col-xs-12.col-md-4.align-center
					//- h6.mb4 Social Media
					.mt3: a.social-media( v-for="s, i in identity.social_media" :key="i"  :href="s.url" :title="s.title" )
						img( src="@/assets/facebook.svg" v-if=" isSocial(s, 'facebook' ) " )
						img( src="@/assets/twitter.svg" v-if=" isSocial(s, 'twitter' ) ")
						img( src="@/assets/instagram.svg" v-if=" isSocial(s, 'instagram' ) ")
						//- a(:href="s.url" :title="s.title") {{s.title}}
					p.mt1( style="color: gray") © Lacuna Lab e.V. {{new Date().getFullYear()}}
				.col.col-xs-12.col-md-4.align-right.mobile-hide
					//- h6.mb1 Impressum
					p( style="white-space: pre" ) {{identity.address}}
					p: a(:href="`mailto:${identity.default_email}`" title="Lacuna Lab Email Address") {{identity.default_email}}
					p: a(:href="`tel:${identity.telephone}`" title="Lacuna Lab Telephone Number") {{identity.telephone}}
</template>

<script>
export default {
  props: ['identity'],
  methods: {
  	isSocial(s, n) {
  		return s.title.toLowerCase().indexOf( n ) !== -1;
  	}
  }
}
</script>
<style lang="sass">
#footer 
	.social-media
		margin: 0 10px
	form .els
		position: relative
		input.button
			position: absolute
			top: 0
			right: 0
			height: 100%
</style>
