import _ from 'lodash'

export const state = () => ({
	showLogoInFilters: false,
	projects: [],
	categoryColors: {
		'': ['#374151', '#f3f4f6'],
		'Wallet': ['#53a7ee', '#e8eff6'],
		'NFT': ['#39DAA3', '#F0FBF7'],
		'Blockchain': ['#F09240', '#FCEEE4'],
    	'Defi': ['#2b1048', '#E0D4F4'],
		'Infra': ['#F23B27', '#FFF4F5'],
		'DAO': ['#F6E278', '#FCF5E0'],
	},
	octokit: {},
})

export const getters = {
	getProjects(state) {
		return _.orderBy(state.projects, 'name', 'asc')
	},
	getCategories(state) {
		return [...new Set(state.projects.map((project) => project.category))]
	},
	getProjectsIntroLogos(state) {
		return _.orderBy(
			state.projects
				.filter((project) => project.introLogoVisible)
				.map((project) => ({
					src: project.logo,
					name: project.name,
					class: project.introLogoClass,
					color: state.categoryColors[project.category][0],
				})),
			'name',
			'asc',
		)
	},
	getCategoryColors(state) {
		return state.categoryColors
	},
}

export const mutations = {
	setProjects(state, projects) {
		state.projects = projects
	},
	setShowLogoInFilters(state, value) {
		state.showLogoInFilters = value
	},
	setOctokit(state, value) {
		state.octokit = value
	},
}
