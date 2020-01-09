<template lang="pug">
	#footer
		.bb
		.wrapper.ptb2
			.row
				.col.col-sm-12.col-md-4
					p.mb1 Newsletter
				.col.col-sm-12.col-md-4
					//- h4.mb1 Follow Us	
					p( v-for="s, i in identity.social_media" :key="i" ): a(:href="s.url" :title="s.title") {{s.title}}
				.col.col-sm-12.col-md-4
					//- h4.mb1 Impressum
					p( style="white-space: pre" ) {{identity.address}}
					p: a(:href="`mailto:${identity.default_email}`" title="Lacuna Lab Email Address") {{identity.default_email}}
					p: a(:href="`tel:${identity.telephone}`" title="Lacuna Lab Telephone Number") {{identity.telephone}}
</template>

<script>
export default {
  props: ['identity']
}
</script>
<style lang="sass">
</style>
