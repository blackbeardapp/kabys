import React from 'react'
import Button from '../Button'
import ProjectActions from '../../actions/ProjectActions'
import styles from './style.scss'
import ProfileActions from '../../actions/ProfileActions'

export default class Header extends React.Component {
  onClickCreate() {
    ProjectActions.createProject('Test Project')
  }
  onClickGetStarted() {
    ProfileActions.showGetStarted()
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
        </div>
      </div>
    )
  }
}
