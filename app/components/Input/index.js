import React from 'react'
import styles from './style.scss'

export default class Input extends React.Component {
  render() {
    return (
      <div>
        <input className={styles.Input} {...this.props}/>
      </div>
    )
  }
}
