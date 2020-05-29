<template lang="pug">
.app-wrapper
	app-header( :identity="data.identity" )
	#contact.bb: .wrapper
		.row
			.col.col-xs-0.col-sm-3
				.about-us.html( v-html="data.contact.text" )
			.col.col-xs-12.col-sm-6
				h1.f5.mt2.mb1 {{data.contact.title}}
				p.mb2
					span We are contactable via 
					a( :href="data.identity.default_email" ) {{data.identity.default_email}}
					span , or on  
					span {{data.identity.telephone}}.
				//- h2.mb1.f3 Write us a message
				//- contact-form( href="https://mailer.autr.tv" :to="data.identity.default_email" :beforeSend="beforeSend" ) 
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
		getMetaTitle() {
			return `Contact Us | ${this.$store.state.meta.title}`;
		},
		beforeSend( msg ) {
			msg.subject = `${this.dropdown.value} inquiry from ${msg.name} <${msg.from}>, via ${window.location.href}`;
			return msg;
		}
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
