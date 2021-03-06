import dragDrop from 'drag-drop'
import React from 'react'
import './style.scss'
import Header from '../Header'
import Projects from '../Projects'
import ProjectActions from '../../actions/ProjectActions'
import debugFunc from 'debug'
import GettingStarted from '../GettingStarted'
import ProfileActions from '../../actions/ProfileActions'
import ProfileStore from '../../stores/ProfileStore'
import DropTarget from '../DropTarget'
import Login from '../Login'
import KabysActions from '../../actions/KabysActions'
import KabysStore from '../../stores/KabysStore'
let debug = debugFunc('kabys')

export default class Kabys extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: {
        gotStarted: true // this is so the box does not show up
      },
      page: ''
    }
  }
  componentDidMount() {
    dragDrop('body', this.onDragged.bind(this))
    ProfileStore.listen(this.onChange.bind(this))
    ProfileActions.fetchProfile()
    KabysStore.listen(this.onChange.bind(this))
  }
  onChange(profile) {
    this.setState(profile)
  }
  onDragged(files) {
    debug('dropped files', files)
    ProjectActions.createProject({
      files: files
    })
  }
  render() {
    return (
      <div className='Kabys'>
        <Header profile={this.state.profile}/>
        <div className='Kabys__Content'>
          <Projects/>
        </div>
        {!this.state.profile.gotStarted &&
          <GettingStarted/>
        }
        <DropTarget/>
        {this.state.page === 'login' &&
          <Login/>
        }
      </div>
    )
  }
}
