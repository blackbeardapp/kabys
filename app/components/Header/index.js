import React from 'react'
import Button from '../Button'
import ProjectActions from '../../actions/ProjectActions'
import './style.scss'

export default class Header extends React.Component {
  onClickCreate() {
    ProjectActions.createProject('Test Project')
  }
  render() {
    return (
      <div className='Header'>
        <div className='Header__Title'>
          Kabys
        </div>
        <div className='Header__Settings'>
          <Button onClick={this.onClickCreate}>Create Project</Button>
        </div>
      </div>
    )
  }
}
