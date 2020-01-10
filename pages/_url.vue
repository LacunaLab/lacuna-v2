<template lang="pug">
.app-wrapper
  app-header( :identity="data.identity" )
  #event.bb( itemscope itemtype="http://schema.org/Event" ): .wrapper.pt4
    .row
      .col.col-xs-12
        h1.title.f5( itemprop="name" ) {{item.title}}
        .html.mt2( v-html="item.long_description" )
        .resources
          .resource( v-for="r, i in item.resources" :key="i" ) 
            a.button( :download="downloadName( r )" :href="downloadUrl( r )" ) {{downloadName( r )}} 
  app-footer( :identity="data.identity" )


    download="filename.mp4"
</template>

<script>

import DynamicImage from '~/core/components/DynamicImage.vue'
import Base from '~/components/Base.vue'
import AppHeader from '~/components/_Header.vue'
import AppFooter from '~/components/_Footer.vue'

export default {
  extends: Base,
  data() {
      return {
      }
  },
  computed: {
  },
  methods: {
    downloadName( r ) {
      return r.directus_files_id.title.replace(/ /g,'') + '.pdf';
    },
    downloadUrl( r ) {
      return r.directus_files_id.data.full_url;
    }
  },
  components: {
    AppHeader,
    AppFooter,
    DynamicImage

  },
  mounted() {
    console.log('ADDRESSS', this.$route)
  }
}
</script>

<style lang="sass">
</style>
