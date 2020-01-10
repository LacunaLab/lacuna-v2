<template lang="pug">
span
  nuxt-link( v-if="to.biography" v-bind:to="`/members/${to.url}`" itemprop="url" ) 
    span(v-if="!$slots.default") {{to.first_name}} {{to.last_name}}
    slot
  a( v-if="!to.biography && to.links.length > 0" itemprop="url" :href="to.links[0].url" target="_blank" ) 
    span(v-if="!$slots.default") {{to.first_name}} {{to.last_name}}
    slot
  span( v-if="!to.biography && to.links.length === 0")  
    span(v-if="!$slots.default") {{to.first_name}} {{to.last_name}}
    slot
</template>

<script>
export default {
  props: ['to'],
  components: {
  },
  computed: {
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="sass">

</style>
