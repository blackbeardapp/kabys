import alt from '../alt'
import ProjectActions from '../actions/ProjectActions'

class ProjectStore {
  constructor() {
    this.projects = []
    this.bindListeners({
      handleUpdateProjects: ProjectActions.UPDATE_PROJECTS,
      handleCreateProject: ProjectActions.CREATE_PROJECT
    })
  }
  handleUpdateProjects(projects) {
    this.projects = projects
  }
  handleCreateProject(project) {
    this.projects.push(project)
    ProjectActions.saveProjects(this.projects)
  }
}

export default alt.createStore(ProjectStore, 'ProjectStore')
