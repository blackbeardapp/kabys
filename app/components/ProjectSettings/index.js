import React from 'react'
import styles from './style.scss'

export default class ProjectSettings extends React.Component {
  render() {
    var output = this.props.project.output || []
    return (
      <div className={styles.ProjectSettings}>
        Project Settings
        <div>Status: {this.props.project.status}</div>
        <div className={styles.Output}>
          {output.map(item => <div>{item}</div>)}
        </div>
      </div>
    )
  }
}
