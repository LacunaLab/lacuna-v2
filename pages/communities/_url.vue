<template lang="pug">
  #community.mt4( itemscope itemtype="http://schema.org/Organization" ): .wrapper
    h1 {{item.name}}
    .thingy {{item}}


    
</template>

<script>

import DynamicImage from '~/core/components/DynamicImage.vue'
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
    DynamicImage

  },
  mounted() {
  }
}
</script>

<style lang="sass">
h1,h2,h3,h4,p
  margin-bottom: 1em
</style>
