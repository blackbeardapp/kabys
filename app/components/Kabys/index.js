import dragDrop from 'drag-drop'
import React from 'react'
import './style.scss'
import Header from '../Header'
import FilesStore from '../../stores/FilesStore'
import FilesActions from '../../actions/FilesActions'
import Projects from '../Projects'

export default class Kabys extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: FilesStore.getState().files,
      dockerfile: false
    }
  }
  componentDidMount() {
    dragDrop('body', this.onDragged.bind(this))
    FilesStore.listen(this.onChange.bind(this))
  }
  componentWillUnmount() {
    FilesStore.unlisten(this.onChange)
  }
  onChange(files) {
    this.setState(files)
  }
  onDragged(files) {
    let dockerfile = false
    files.forEach(file => {
      if(file.name === 'Dockerfile') {
        dockerfile = true
      }
    })
    FilesActions.updateFiles(files)
    this.setState({
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
          <Projects/>
        </div>
      </div>
    )
  }
}
