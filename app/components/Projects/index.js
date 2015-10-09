import React from 'react'
import ProjectStore from '../../stores/ProjectStore'
import ProjectActions from '../../actions/ProjectActions'

export default class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }
  componentDidMount() {
    ProjectStore.listen(this.onChange.bind(this))
    ProjectActions.fetchProjects()
  }
  componentWillUnmount() {
    ProjectStore.unlisten(this.onChange.bind(this))
  }
  onChange(state) {
    this.setState(state)
  }
  render() {
    return (
      <div className='Projects'>
        <h2>
          Projects
        </h2>
        <ul>
          {this.state.projects.map((project, i) => {
            return <li key={i}>{project}</li>
          })}
        </ul>
      </div>
    )
  }
}
