import React from 'react'
import './style.scss'

export default class Button extends React.Component {
  render() {
    return (
      <button className='Button' {...this.props}>
        {this.props.children}
      </button>
    )
  }
}
