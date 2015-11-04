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
  buildProject(project) {
    this.dispatch(project)
  }
  deleteProject(project) {
    this.dispatch(project)
  }
  updateBuildOutput(options) {
    this.dispatch(options)
  }
  doneBuilding(options) {
    this.dispatch(options)
  }
  deployProject(project) {
    this.dispatch(project)
  }
}

export default alt.createActions(ProjectActions)
