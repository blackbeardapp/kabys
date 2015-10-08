import dragDrop from 'drag-drop'
import React from 'react'
import ReactDOM from 'react-dom'
import './app.scss'

class Kabys extends React.Component {
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
      <div>
        <h1>Kabys</h1>
        {this.state.dockerfile &&
          <div>
            This folder contains a dockerfile.
          </div>
        }
        {this.state.files.map((file) => <div key={file.path}>{file.path}</div>)}
      </div>
    )
  }
}

var kabys = <Kabys/>

ReactDOM.render(kabys, document.getElementById('kabys'))
