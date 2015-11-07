import React from 'react'
import classNames from 'classnames'
import styles from './style.scss'

export default class Button extends React.Component {
  render() {
    let classes = classNames(styles.Button, {
      [styles.ButtonWhite]: this.props.variant === 'white' || !this.props.variant,
      [styles.ButtonBlue]: this.props.variant === 'blue',
      [styles.ButtonRed]: this.props.variant === 'red',
      [styles.ButtonBlack]: this.props.variant === 'black',
      [styles.ButtonGreen]: this.props.variant === 'green',
      [styles.ButtonGreenInverse]: this.props.variant === 'green-inverse',
      [styles.ButtonBig]: this.props.size === 'big',
      [styles.ButtonSmall]: this.props.size === 'small',
    })
    return (
      <button className={classes} {...this.props}>
        {this.props.children}
      </button>
    )
  }
}
