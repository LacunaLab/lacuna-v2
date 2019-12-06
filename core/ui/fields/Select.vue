<template lang="pug">

	.select-wrapper
		//- p {{arrow}}
		chevron(
			v-bind:size="height"
		)
		select(
			v-validate="field.rules"
			v-bind:data-vv-group="field.groupId"
			v-on:change="validateGroup(field.group, field.value)"
			v-model="field.value"
			v-bind:rows="field.rows"
			v-bind:id="field.fieldId"
			v-bind:placeholder="field.label"
			v-bind:disabled="disabled"
		).select-input
			option(
				v-for="option, i in field.options"
				v-bind:id="i"
				v-bind:value="option"
			) {{option}}
		input.text-input(
			type="text"
			v-model="val"
			v-bind:name="field.label"
			v-bind:placeholder="field.label" 
			v-bind:disabled="disabled"
			tab-index="-1"
			
		).select-box
		errors(v-bind:errors="errors")

</template>
<script>

import Errors from './../Errors.vue'

export default {

	mounted() {
		var self = this;
		this.$nextTick(function(){
			bus.$emit('field-added', this);
		});
		this.val = this.$props.field.value;
		this.height = this.$el.offsetHeight - 0;
		// this.arrow = 
	},
	data() {
		return {
			val: null,
			height: 20,
			path: 'M 0 0'
		}
	},
	computed: {
		arrowPath() {
			return `M ${this.height * 0.3} ${this.height * 0.4} L ${this.height * 0.5} ${this.height * 0.6} L ${this.height * 0.7} ${this.height * 0.4}`;
		}
	},
    methods: {
      validateGroup(group, value) {
      	bus.$emit('field-blurred', group);
      	this.val = value;
      }
    },
	components: {Errors},
	props: ['field', 'disabled'],
	name: 'select-input'
}
</script>
<style lang="scss" scoped>



</style>