import dragDrop from 'drag-drop'
import React from 'react'
import './style.scss'
import Header from '../Header'
import Projects from '../Projects'
import ProjectActions from '../../actions/ProjectActions'
import debugFunc from 'debug'
let debug = debugFunc('kabys')

export default class Kabys extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    dragDrop('body', this.onDragged.bind(this))
  }
  onChange(files) {
    this.setState(files)
  }
  onDragged(files) {
    debug('dropped files', files)
    ProjectActions.createProject({
      name: files[0].fullPath.split('/')[1],
      files: files.map(file => file.path)
    })
  }
  render() {
    return (
      <div className='Kabys'>
        <Header/>
        <div className='Kabys__Content'>
          <Projects/>
        </div>
      </div>
    )
  }
}
