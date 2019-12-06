<template lang="pug">
  #event( itemscope itemtype="http://schema.org/Event" )
    h1( itemprop="name" ) {{item.title}}
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
