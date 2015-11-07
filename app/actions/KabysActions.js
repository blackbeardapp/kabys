import alt from '../alt'
import ProfileSource from '../sources/ProfileSource'

class KabysActions {
  showLogin() {
    this.dispatch()
  }
  clearPage() {
    this.dispatch()
  }
}

export default alt.createActions(KabysActions)
