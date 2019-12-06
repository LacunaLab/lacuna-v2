export const state = () => ({
	apiState: 0,

	site: {
		email: 'gilbert@lacunalab.org'
	},

	meta: {
		title: 'Lacuna Lab'
	},
	routes: {
		'events': {
			list: ['events', 'homepage', 'identity']
		},
		'events-url': {
			list: ['events-url', 'events', 'identity']
		},
		'members': {
			list: ['members', 'identity']
		},
		'members-url': {
			list: ['members-url', 'identity']
		},
		'index': {
			list: ['homepage', 'identity', 'events-homepage', 'members']
		}
	},
	api: {
		'events': {
			url: 'https://autr.uber.space/lacuna/items/events?sort=-start_date&fields=*,cover.*',
			type: 'list'
		},
		'events-homepage': {
			url: 'https://autr.uber.space/lacuna/items/events?limit=3&sort=-start_date&fields=*,cover.*',
			type: 'list'
		},
		'events-url': {
			url: 'https://autr.uber.space/lacuna/items/events?filter[url]=:url',
			type: 'item'
		},
		'members': {
			url: 'https://autr.uber.space/lacuna/users',
			type: 'list'
		},
		'members-url': {
			url: 'https://autr.uber.space/lacuna/users?filter[url]=:url',
			type: 'item'
		},
		'homepage': {
			url: 'https://autr.uber.space/lacuna/items/homepage',
			type: 'page'
		},
		'identity': {
			url: 'https://autr.uber.space/lacuna/items/identity?fields=*,default_image.data.full_url',
			type: 'item'
		}
	},
	data: {

	}
})

export const actions = {
	nuxtServerInit ({ commit }, { req }) {
    	console.log('SERVER INIT')
  	}
}

// list, item, single

export const mutations = {
	loading() {
		state.apiState = 0
	},
	success() {
		state.apiState = 1
	},
	error() {
		state.apiState = -1
	},
	set(state, payload) {
		state.data[payload.key] = payload.data;
	}
}
