import dragDrop from 'drag-drop'
import React from 'react'
import ReactDOM from 'react-dom'
import './app.scss'

class Kabys extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
    dragDrop('body', files => {
      console.log(files)
      this.setState({
        files: files
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Kabys</h1>
        {this.state.files.map((file) => <div>{file.path}</div>)}
      </div>
    )
  }
}

var kabys = <Kabys/>

ReactDOM.render(kabys, document.getElementById('kabys'))