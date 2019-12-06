import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		apiState: 0
	},
	mutations: {
		loading() {
			this.state.apiState = 0
		},
		success() {
			this.state.apiState = 1
		},
		error() {
			console.log('[store.js] apiState', 'Error');
			this.state.apiState = -1
		}
	},
	actions: {
		getFromApi(rootState, id) {

			const t = this;
			let requests = [];
			const apiRoot = window.project.site.urls.api;
			const endpoint = window.project.api[id];


			return ( 
				new Promise((resolve, reject) => {

					if (this.state[id] !== undefined) {
						console.log('[store.js] already have', id);
						resolve(this.state[id]);
					} else {

						const needRoot = (endpoint.url.substr(0,4) !== 'http');
						let fullUrl =  (needRoot) ? apiRoot + endpoint.url : endpoint.url;

						if (endpoint.type === 'item') {
							fullUrl = fullUrl.replace(':id', this.state.route.params.id);
						}

						axios.get( fullUrl ).then( (res) => {

							const isList = (endpoint.type === 'list');
							const isItem = (endpoint.type === 'item');
							const storeKey = (isItem) ? id.replace(':id', this.state.route.params.id) : id;

							Vue.set(this.state, storeKey, (isList) ? res.data.data : res.data.data[0] );

							if (this.state[storeKey] === undefined) {
								console.error('[store.js]', storeKey, '\n', fullUrl);
								this.commit('error');
								reject('Could not find API endpoint');
							} else {

								console.log('[store.js]', storeKey, '\n', fullUrl);
								resolve(t.state[storeKey]);
							}
						}).catch( (err) => {
							reject(err);
						})
					}

				})
			);

		}
	}
})
