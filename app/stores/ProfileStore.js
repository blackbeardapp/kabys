import alt from '../alt'
import ProfileActions from '../actions/ProfileActions'
import ProfileSource from '../sources/ProfileSource'

class ProfileStore {
  constructor() {
    this.profile = {}
    this.bindListeners({
      handleUpdateProfile: ProfileActions.UPDATE_PROFILE,
      handleHideGetStarted: ProfileActions.HIDE_GET_STARTED,
      handleShowGetStarted: ProfileActions.SHOW_GET_STARTED
    })
  }
  handleUpdateProfile(profile) {
    this.profile = profile
  }
  handleHideGetStarted() {
    this.profile.gotStarted = true
    ProfileSource.save(this.profile)
  }
  handleShowGetStarted() {
    this.profile.gotStarted = false
  }
}

export default alt.createStore(ProfileStore, 'ProfileStore')
