import alt from '../alt'
import ProfileSource from '../sources/ProfileSource'

class ProfileActions {
  updateProfile(profile) {
    this.dispatch(profile)
  }
  fetchProfile(profile) {
    this.dispatch()
    ProfileSource.fetch().then(profile => {
      this.actions.updateProfile(profile)
    })
  }
  hideGetStarted() {
    this.dispatch()
  }
  showGetStarted() {
    this.dispatch()
  }
  login(options) {
    this.dispatch(options)
  }
  logOut() {
    this.dispatch()
  }
}

export default alt.createActions(ProfileActions)
