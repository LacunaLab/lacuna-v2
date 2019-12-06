<template lang="pug">
  #event( itemscope itemtype="http://schema.org/Person" ): .wrapper
    h1( itemprop="name" ) {{item.first_name}} {{item.last_name}}
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
