import React from 'react'
import styles from './style.scss'
import Button from '../Button'
import ProjectActions from '../../actions/ProjectActions'

export default class ProjectSettings extends React.Component {
  onClickDeploy() {
    ProjectActions.deployProject(this.props.project)
  }
  render() {
    var output = this.props.project.output || []
    return (
      <div className={styles.ProjectSettings}>
        <div className={styles.Top}>
          <div className={styles.Info}>
            <h2>Project Settings</h2>
          </div>
          <div className={styles.Close}>
            <Button onClick={this.props.onClickClose} variant='black'>Close</Button>
          </div>
        </div>
        {this.props.project.ready &&
          <div>
            <Button variant='green-inverse' onClick={this.onClickDeploy.bind(this)}>Deploy</Button>
          </div>
        }
        <div className={styles.Output}>
          {output.map((item, key) => <div key={key}>{item}</div>)}
        </div>
      </div>
    )
  }
}
