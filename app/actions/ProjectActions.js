import alt from '../alt'
import ProjectSource from '../sources/ProjectSource'

class ProjectActions {
  updateProjects(projects) {
    this.dispatch(projects)
  }
  fetchProjects() {
    this.dispatch()
    ProjectSource.fetch().then(projects => {
      this.actions.updateProjects(projects)
    })
  }
  createProject(project) {
    this.dispatch(project)
  }
  saveProjects(projects) {
    ProjectSource.save(projects)
  }
  buildProject(project) {
    this.dispatch(project)
  }
  deleteProject(project) {
    this.dispatch(project)
  }
}

export default alt.createActions(ProjectActions)
