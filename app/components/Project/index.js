import React from 'react'
import styles from './style.scss'

export default class Project extends React.Component {
  render() {
    return (
      <div className={styles.Project}>{this.props.project}</div>
    )
  }
}
