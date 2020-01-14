export const state = () => ({
	apiState: 0,

	site: {
		email: 'gilbert@lacunalab.org',
		thumbnails: 'https://autr.uber.space/thumbnail/lacuna',

	},

	meta: {
		title: 'Lacuna Lab'
	},
	routes: {
		'url': {
			list: ['url', 'identity']
		},
		'communities': {
			list: ['communities', 'identity']
		},
		'communities-url': {
			list: ['communities-url', 'identity']
		},
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
		},
		'about': {
			list: ['about', 'identity']
		},
		'contact': {
			list: ['contact', 'identity']
		}
	},
	api: {
		'url': {
			url: 'https://api.lacunalab.org/_/items/projects?filter[url][contains]=:url&fields=*,resources.directus_files_id.*',
			type: 'item'
		},
		'communities': {
			url: 'https://api.lacunalab.org/_/items/communities',
			type: 'list'
		},
		'communities-url': {
			url: 'https://api.lacunalab.org/_/items/communities?filter[url]=:url',
			type: 'item'
		},
		'events': {
			url: 'https://api.lacunalab.org/_/items/events?sort=-start_date&fields=*,cover.*,location.locations_id.*,tags.event_tags_id.*',
			type: 'list'
		},
		'events-homepage': {
			url: 'https://api.lacunalab.org/_/items/events?limit=3&sort=-start_date&fields=*,cover.*,location.locations_id.*',
			type: 'list'
		},
		'events-url': {
			url: 'https://api.lacunalab.org/_/items/events?filter[url]=:url&fields=*,location.locations_id.*,cover.*,tags.event_tags_id.*,internal_participants.directus_users_id.*',
			type: 'item'
		},
		'members': {
			url: 'https://api.lacunalab.org/_/users?fields=*,avatar.*&sort=?',
			type: 'list'
		},
		'members-url': {
			url: 'https://api.lacunalab.org/_/users?filter[url]=:url&fields=*,avatar.*',
			type: 'item'
		},
		'homepage': {
			url: 'https://api.lacunalab.org/_/items/homepage',
			type: 'page'
		},
		'identity': {
			url: 'https://api.lacunalab.org/_/items/identity?fields=*,default_image.data.full_url',
			type: 'page'
		},
		'about': {
			url: 'https://api.lacunalab.org/_/items/about?fields=*,gallery.photos.directus_files_id.*',
			type: 'page'
		},
		'contact': {
			url: 'https://api.lacunalab.org/_/items/contact',
			type: 'page'
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
