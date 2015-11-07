import alt from '../alt'
import ProfileActions from '../actions/ProfileActions'
import ProfileSource from '../sources/ProfileSource'
import KabysActions from '../actions/KabysActions'
import request from 'axios'

class ProfileStore {
  constructor() {
    this.profile = {}
    this.bindListeners({
      handleUpdateProfile: ProfileActions.UPDATE_PROFILE,
      handleHideGetStarted: ProfileActions.HIDE_GET_STARTED,
      handleShowGetStarted: ProfileActions.SHOW_GET_STARTED,
      handleLogin: ProfileActions.LOGIN,
      handleLogOut: ProfileActions.LOG_OUT
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
  handleLogin(options) {
    this.profile.email = options.email
    this.profile.password = options.password

    var token = request.post('https://api.blackbeard.io/login', {
      email: options.email,
      password: options.password
    }).then((response) => {
      this.profile.accessToken = response.data.token
      return request.get('https://api.blackbeard.io/users/me', {
        headers: {
          Authorization: this.profile.accessToken
        }
      })
    }).then((response) => {
      this.profile.user = response.data
      KabysActions.clearPage()
      ProfileSource.save(this.profile)
    })
  }
  handleLogOut() {
    this.profile.user = null
    this.profile.email = null
    this.profile.password = null
    this.profile.accessToken = null
  }
}

export default alt.createStore(ProfileStore, 'ProfileStore')
