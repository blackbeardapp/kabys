import React from 'react'
import styles from './style.scss'
import Button from '../Button'
import ProjectActions from '../../actions/ProjectActions'
import ProjectSettings from '../ProjectSettings'

export default class Project extends React.Component {
  constructor() {
    super()
    this.state = {
      settingsOpen: false
    }
  }
  onClickBuild() {
    ProjectActions.buildProject(this.props.project)
    this.setState({
      settingsOpen: true
    })
  }
  onClickDelete() {
    ProjectActions.deleteProject(this.props.project)
  }
  onClickClose() {
    this.setState({
      settingsOpen: false
    })
  }
  render() {
    return (
      <div className={styles.Project}>
        <div className={styles.ProjectHeader}>
          <div className={styles.ProjectInfo}>
            <h3 className={styles.ProjectName}>
              {this.props.project.name}
            </h3>
            <div className={styles.ProjectPath}>
              {this.props.project.path}
            </div>
          </div>
          <div className={styles.ProjectActions}>
            <Button onClick={this.onClickBuild.bind(this)} variant='blue' style={{marginRight: 20}}>Build</Button>
            <Button onClick={this.onClickDelete.bind(this)} variant='red'>Delete</Button>
          </div>
        </div>
        {this.state.settingsOpen &&
          <div>
            <ProjectSettings project={this.props.project} onClickClose={this.onClickClose.bind(this)}/>
          </div>
        }
      </div>
    )
  }
}
