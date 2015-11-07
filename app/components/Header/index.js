import React from 'react'
import Button from '../Button'
import ProjectActions from '../../actions/ProjectActions'
import styles from './style.scss'
import ProfileActions from '../../actions/ProfileActions'
import KabysActions from '../../actions/KabysActions'

export default class Header extends React.Component {
  onClickCreate() {
    ProjectActions.createProject('Test Project')
  }
  onClickGetStarted() {
    ProfileActions.showGetStarted()
  }
  onClickLogin() {
    KabysActions.showLogin()
  }
  onClickLogout() {
    ProfileActions.logOut()
  }
  render() {
    return (
      <div className='Header'>
        <div className='Header__Title'>
          Kabys
        </div>
        <div className='Header__Settings'>
          <div className={styles.Button} style={{display: 'none'}}>
            <Button onClick={this.onClickCreate}>Create Project</Button>
          </div>
          <div className={styles.Button}>
            <Button onClick={this.onClickGetStarted}>Get Started</Button>
          </div>
          {!this.props.profile.user &&
            <div className={styles.Button}>
              <Button onClick={this.onClickLogin}>Login</Button>
            </div>
          }
          {this.props.profile.user &&
            <div className={styles.LoggedIn}>
                <div>{this.props.profile.user.name} -&nbsp;</div>
                <Button onClick={this.onClickLogout} size='small'>Log out</Button>
            </div>
          }
        </div>
      </div>
    )
  }
}
