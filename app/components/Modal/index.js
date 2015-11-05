import React from 'react'
import styles from './style.scss'

export default class Modal extends React.Component {
  render() {
    if(!this.props.show) return false;

    return (
      <div>
        <div className={styles.Modal}>
          {this.props.children}
        </div>
        <div className={styles.Background}></div>
      </div>
    )
  }
}
