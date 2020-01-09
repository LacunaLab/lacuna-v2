<template lang="pug">
.app-wrapper
	app-header( :identity="data.identity" )
	#contact.bb: .wrapper
		h1.f5.mt2.mb1 {{data.contact.title}}
		.row
			.col.col-xs-12.col-sm-6
				.about-us.html( v-html="data.contact.text" )
			.col.col-xs-12.col-sm-6
				contact-form
					field( :data="dropdown" )
				
		
	app-footer( :identity="data.identity" )
</template>

<script>

import Field from '~/core/ui/Field.vue'
import DynamicImage from '~/core/components/DynamicImage.vue'
import ContactForm from '~/core/components/_ContactForm.vue'
import Base from '~/components/Base.vue'
import AppHeader from '~/components/_Header.vue'
import AppFooter from '~/components/_Footer.vue'

export default {
	extends: Base,
	data() {
  		return {
  			dropdown: {
		  			type: "select",
		  			placeholder: "Choose Subject",
		  			name: "name",
		  			value: "",
		  			options: this.$store.state.data.contact.subjects.split(',')
		  	}
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
		ContactForm,
		Field

	},
	mounted() {
	}
}
</script>

<style>
</style>
