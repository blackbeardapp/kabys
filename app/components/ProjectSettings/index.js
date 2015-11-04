import React from 'react'
import styles from './style.scss'
import Button from '../Button'

export default class ProjectSettings extends React.Component {
  render() {
    var output = this.props.project.output || []
    return (
      <div className={styles.ProjectSettings}>
        <div className={styles.Top}>
          <div className={styles.Info}>
            <h2>Project Settings</h2>
            <div>Status: {this.props.project.status}</div>
          </div>
          <div className={styles.Close}>
            <Button onClick={this.props.onClickClose} variant='black'>Close</Button>
          </div>
        </div>
        <div className={styles.Output}>
          {output.map(item => <div>{item}</div>)}
        </div>
        {this.props.project.ready &&
          <div>
            <Button variant='green-inverse'>Deploy</Button>
          </div>
        }
      </div>
    )
  }
}
