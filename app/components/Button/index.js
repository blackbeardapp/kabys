import React from 'react'
import classNames from 'classnames'
import styles from './style.scss'

export default class Button extends React.Component {
  render() {
    let classes = classNames(styles.Button, {
      [styles.ButtonWhite]: this.props.variant === 'white' || !this.props.variant || true,
      [styles.ButtonBlue]: this.props.variant === 'blue'
    })
    return (
      <button className={classes} {...this.props}>
        {this.props.children}
      </button>
    )
  }
}
