<template lang="pug">
.app-wrapper
  app-header( :identity="data.identity" v-if="!item.error" )
  #event.bb( itemscope itemtype="http://schema.org/Event" v-if="!item.error"): .wrapper.pt4
    .row
      .col.col-xs-12.col-sm-4
        h1.title.f5( itemprop="name" ) {{item.title}}
        p.f3
          span.date( itemprop="startDate" ) {{$moment(item.start_date).format('ddd D MMM')}}  
          span.time( itemprop="doorTime" ) {{ $moment(item.start_date).format('HH:mm') }}
        .tags.mt1
          .tag.gray.filled( v-for=" t, i in item.tags" :key="i") {{t.event_tags_id.name}}
        .people( v-if="item.external_participants || item.internal_participants.length > 0" )
          h2.mtb1 People
          .ext-participants 
            p(v-for="ext, i in item.external_participants" :key="i"): a( :href="linkify( ext.url )" :title="ext.name") {{ext.name}}
          .int-participants 
            p(v-for="int, i in item.internal_participants" :key="i"): nuxt-link( :to="`/members/${int.directus_users_id.url}`") {{int.directus_users_id.first_name}} {{int.directus_users_id.last_name}}
        .locations( v-if=" item.location.length > 0" )
          h2.mtb1 Address
          .location( v-for="l, i in item.location" :key="i") 
            p: a( target="_blank" v-bind:href="`https://maps.google.com/?q=${l.locations_id.map.lat},${l.locations_id.map.lng}`") {{l.locations_id.title}}
            p( style="white-space: pre" ) {{l.locations_id.address}}
        .links( v-if=" item.links " )
          h2.mtb1 Links
          .link( v-for=" l, i in item.links" :key="i"): a( :href="l.url" :title="l.title" target="_blank") {{l.title}}
      .col.col-xs-12.col-sm-8
        dynamic-image.mt1( :file="item.cover" )
        .description.mt2.mb2.html( v-html="item.description" )
  app-footer( :identity="data.identity" v-if="!item.error" )


    
</template>

<script>

import DynamicImage from '~/core/components/DynamicImage.vue'
import Base from '~/components/Base.vue'
import AppHeader from '~/components/_Header.vue'
import AppFooter from '~/components/_Footer.vue'
import axios from 'axios';

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
        if (!this.item.error) return ` ${this.$store.state.meta.title}`;
        return `${this.item.title}, ${this.$moment(this.item.start_date).format('DD/MM/YY')} | ${this.$store.state.meta.title}`;
      }
  },
  components: {
    AppHeader,
    AppFooter,
    DynamicImage

  },
  beforeMount() {
    if ( this.item.error ) {
      let url = this.$route.params.url;
      const a = url.indexOf( '_' ) + 1;
      const b = url.indexOf( '.html' );
      let search = url.substr( 0, b );
      const date = url.substr(0, a - 1);

      if (!date) window.location.href = `/404`;
      search = search.substr( a, search.length );
      console.log(search, date);
      const api = `https://api.lacunalab.org/_/items/events?filter[start_date][contains]=${date}&fields=*,location.locations_id.*,cover.*,tags.event_tags_id.*,internal_participants.directus_users_id.*`;
      axios.get( api ).then( res => {
        window.location.href = `/events/${res.data.data[0].url}`;
      }).catch( (err) => {

        window.location.href = `/404`;
      });
    }
  },
  mounted() {
    console.log('M Event', this.item)
  }
}
</script>

<style lang="sass">
</style>
