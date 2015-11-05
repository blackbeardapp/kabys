import React from 'react'
import styles from './styles.scss'

export default class DropTarget extends React.Component {
  render() {
    return (
      <div className='DropTarget'>
        <div className={styles.Text}>Drop your folder here!</div>
      </div>
    )
  }
}
