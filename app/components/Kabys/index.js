import dragDrop from 'drag-drop'
import React from 'react'
import './style.scss'
import Header from '../Header'

export default class Kabys extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
      dockerfile: false
    }
    dragDrop('body', this.onDragged.bind(this))
  }
  onDragged(files) {
    let dockerfile = false
    files.forEach(file => {
      if(file.name === 'Dockerfile') {
        dockerfile = true
      }
    })
    this.setState({
      files: files,
      dockerfile: dockerfile
    })
  }
  render() {
    return (
      <div className='Kabys'>
        <Header/>
        <div className='Kabys__Content'>
          {this.state.dockerfile &&
            <div>
              This folder contains a dockerfile.
            </div>
          }
          {this.state.files.map((file) => <div key={file.path}>{file.path}</div>)}
        </div>
      </div>
    )
  }
}
