import React from 'react'
import styles from './style.scss'
import Button from '../Button'
import ProjectActions from '../../actions/ProjectActions'

export default class Project extends React.Component {
  onClickBuild() {
    ProjectActions.buildProject(this.props.project)
  }
  render() {
    return (
      <div className={styles.Project}>
        <div className={styles.ProjectInfo}>
          <h3 className={styles.ProjectName}>
            {this.props.project.name}
          </h3>
          <div className={styles.ProjectPath}>
            {this.props.project.path}
          </div>
        </div>
        <div className={styles.ProjectActions}>
          <Button onClick={this.onClickBuild.bind(this)} variant='blue'>Build</Button>
        </div>
      </div>
    )
  }
}
