<template lang="pug">
	#base {{data}}
</template>

<script>

import axios from 'axios'

export default {
	data() {
  		return {
  		}
	},
	computed: {
		data() {
			return this.$store.state.data;
		},
		item() {
			let key = this.$route.name;
			const keys = Object.keys(this.$route.params);
			for (let i = 0; i < keys.length; i++) key += this.$route.params[keys[i]];
			return this.$store.state.data[key];
		},
		members() {
			return this.$store.state.data.members;
		}
	},
	head () {
		return {
			title: this.getMetaTitle(),
			meta: [
				{ 
					hid: 'description', 
					name: 'description', 
					content: this.getMetaDesc()
				},
				{ 
					hid: 'keyword', 
					name: 'keyword', 
					content: this.getMetaKeywords()
				},
				{ 
					property: 'og:description', 
					content: this.getMetaDesc(),
					vmid: 'og:description'
				},
				{ 
					property: 'og:title', 
					content: this.getMetaTitle(),
					vmid: 'og:title'
				},
				{ 
					property: 'og:image', 
					content: this.getMetaImage(), 
					vmid: 'og:image'
				},
			]
		}
	},
	methods: {
        linkify( url ) {
        	if (!url) return "/";
        	// if (url.length <== 0) return "/";
			if (url.substring( 0, 4) !== 'http') return `http://${url}`;
			return url;
        },
		shuffle(array) {
			var i = array.length, j, temp;
			if ( i == 0 ) return array;
			while ( --i ) {
				j = Math.floor( Math.random() * ( i + 1 ) );
				temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
		},
		checkForIdentity() {
			if (!this.$store.state.data.identity) {
				console.warn('[base] no identity loaded');
				return false;
			}
			return true;
		},
		getMetaTitle() {
			return this.$store.state.meta.title;
		},
		getMetaDesc() {
			if (!this.checkForIdentity()) return;
			return this.$store.state.data.identity.short_description;
		},
		getMetaImage() {
			if (!this.checkForIdentity()) return;
			return this.$store.state.data.identity.default_image.data.full_url;
		},
		getMetaKeywords() {
			if (!this.checkForIdentity()) return;
			return this.$store.state.data.identity.keywords;
		},
		handleError(err) {
			console.log("error", err);
		}
	},
	async asyncData ( { store, route, params, query, env, isDev, isHMR, redirect, error } ) {

		console.log('[store] route name', route.name);

		if (!store.state.routes) {
			console.warn('[store] store has no API routes defined');
			return {};
		}

		const config = store.state.routes[route.name];

		if (!config) {
			console.warn('[store] no route config for', route.name);
			return {};
		}

		let promises = [];

		for (let i = 0; i < config.list.length; i++ ) {

			const id = config.list[i];
			const endpoint = store.state.api[id];
			const isList = (endpoint.type === 'list');
			const isItem = (endpoint.type === 'item');

			/*-- mutable keys --*/

			let dataKey = id; 
			let requestUrl = endpoint.url;

			/*-- find and replace URL :params with Vue router params --*/

			if (isItem) {

				for (let i = 0; i < Object.keys(route.params).length; i++) {
					const k = Object.keys(route.params)[i];
					requestUrl = requestUrl.replace(`:${k}`, route.params[k]);
					dataKey += route.params[k];
				}
			}

			if (endpoint) {

				let promise = new Promise((resolve, reject) => {



					if (store.state.data[dataKey] !== undefined) {
						console.log('[store] already have', id);
						resolve(store.state.data[dataKey]);
					} else {


						axios.get( requestUrl ).then( (res) => {

							const data = (isList) ? res.data.data : res.data.data[0];

							console.log('[store]', dataKey, requestUrl);

							store.commit('set', {key: dataKey, data: data} );

							if (store.state.data[dataKey] === undefined) {
								const msg = 'could not load API data into store';
								store.commit('set', {key: dataKey, data: { error: true, msg: msg }} );
								reject(msg);
							} else if (!data) {
								const msg = 'no data was found for this';
								store.commit('set', {key: dataKey, data: { error: true, msg: msg }} );
								reject(msg);
							} else {
								resolve(store.state.data[dataKey]);
							}
						}).catch( (err) => {
							console.error('[store]', 'could not get', requestUrl);
							reject(err);
						});
					}

				});

				promises.push(promise);

			} else {
				console.warn('no api endpoint for', name);
			}
		}

		return Promise.all( promises ).then( () => {

		}).catch( err => {
			console.log(err);
			// store.commit('set', {key: dataKey, data: err} );
		});
	},
	components: {

	},
	mounted() {
	}
}
</script>

<style>
</style>
