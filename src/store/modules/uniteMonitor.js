import { getServiceAreaData } from '@/services'

const state = {
  keyword: '',
  serviceArea: '',
  list: [],
}

const mutations = {
  setSearchData (state, payload) {
    Object.assign(state, payload)
  },
  setList (state, payload) {
    state.list = payload
  },
}

const actions = {
  async getServiceAreaData ({ commit }, payload) {
    const res = await getServiceAreaData(payload)

    if (res.success) {
      commit('setList', res.data.list)
    }

    return res
  },
}

export const uniteMonitor = {
  namespaced: true,
  state,
  actions,
  mutations,
}

export default uniteMonitor
