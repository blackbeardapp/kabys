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
}

export default alt.createActions(ProfileActions)
