<template lang="pug">
.app-wrapper
  app-header( :identity="data.identity" )
  #event.bb( itemscope itemtype="http://schema.org/Person" ): .wrapper
    .row
      .col.col-xs-12
        h1.f5.mb1.mt2( itemprop="name" )  {{item.first_name}} {{item.last_name}}
        //- span.tag.filled.gray {{item.profile_type}}
    .row
      .col.col-xs-12.col-sm-3
        dynamic-image( :file="item.avatar" )
      .col.col-xs-12.col-sm-6
        .bio.html( v-html="item.biography" ) 
        .nobio.italic( v-if="!item.biography" ) No biography available
      .col.col-xs-12.col-sm-3
        .links 
          .link( v-for="l,i in item.links" :key="i"): a(:href="linkify( l.url )" :title="l.title" target="_blank") {{l.title}}
        .nobio.italic( v-if="!item.links" ) No links available
  app-footer( :identity="data.identity" )
</template>

<script>

import Base from '~/components/Base.vue'
import AppHeader from '~/components/_Header.vue'
import AppFooter from '~/components/_Footer.vue'
import DynamicImage from '~/core/components/DynamicImage.vue'

export default {
  extends: Base,
  data() {
      return {
      }
  },
  computed: {
  },
  methods: {
    getMetaTitle() {
      return `${this.item.first_name} ${this.item.last_name} | ${this.$store.state.meta.title}`;
    },
  },
  components: {
    AppHeader,
    AppFooter,
    DynamicImage

  },
  mounted() {
  }
}
</script>

<style>
</style>
