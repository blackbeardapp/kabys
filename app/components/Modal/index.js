import React from 'react'
import styles from './style.scss'
import close from './close.svg'

export default class Modal extends React.Component {
  onClickClose() {
    this.props.onClickClose()
  }
  render() {
    if(!this.props.show) return false;

    return (
      <div>
        <div className={styles.Modal}>
          <div className={styles.Close} onClick={this.onClickClose.bind(this)}>
            <img src={close}/> Close
          </div>
          <div>
            {this.props.children}
          </div>
        </div>
        <div className={styles.Background}></div>
      </div>
    )
  }
}
