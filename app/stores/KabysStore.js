import alt from '../alt'
import KabysActions from '../actions/KabysActions'

class KabysStore {
  constructor() {
    this.page = ''
    this.bindListeners({
      handleShowLogin: KabysActions.SHOW_LOGIN,
      handleClearPage: KabysActions.CLEAR_PAGE
    })
  }
  handleShowLogin() {
    this.page = 'login'
  }
  handleClearPage() {
    this.page = ''
  }
}

export default alt.createStore(KabysStore, 'KabysStore')
