import React from 'react'
import Modal from '../Modal'
import Button from '../Button'
import Input from '../Input'
import ProfileActions from '../../actions/ProfileActions'
import KabysActions from '../../actions/KabysActions'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  onClickLogin() {
    ProfileActions.login(this.state)
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onClickClose() {
    KabysActions.clearPage()
  }
  render() {
    return (
      <Modal show={true} onClickClose={this.onClickClose}>
        <h1>Login to blackbeard.io</h1>
        <label>Email</label>
        <Input type='text' value={this.state.email} onChange={this.onChangeEmail.bind(this)}/>
        <label>Password</label>
        <Input type='password' value={this.state.password} onChange={this.onChangePassword.bind(this)}/>
        <div style={{marginTop: 20}}>
          <Button onClick={this.onClickLogin.bind(this)} variant='green-inverse'>Login</Button>
        </div>
      </Modal>
    )
  }
}
