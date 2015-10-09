import React from 'react'
import ProjectStore from '../../stores/ProjectStore'
import ProjectActions from '../../actions/ProjectActions'
import Project from '../Project'
import styles from './style.scss'

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
        <div className={styles.Projects__Header}>
          <h2 className={styles.Projects__Title}>
            Projects
          </h2>
        </div>
        <div>
          {this.state.projects.map((project, i) => {
            return <Project key={i} project={project}/>
          })}
        </div>
      </div>
    )
  }
}
