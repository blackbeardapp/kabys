import React from 'react'
import styles from './style.scss'
import Button from '../Button'

export default class Project extends React.Component {
  render() {
    return (
      <div className={styles.Project}>
        <div className={styles.ProjectName}>
          {this.props.project}
        </div>
        <div className={styles.ProjectActions}>
          <Button variant='blue'>Build</Button>
        </div>
      </div>
    )
  }
}
