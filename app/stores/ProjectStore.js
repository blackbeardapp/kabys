import alt from '../alt'
import ProjectActions from '../actions/ProjectActions'
import child_process from 'child_process'

class ProjectStore {
  constructor() {
    this.projects = []
    this.bindListeners({
      handleUpdateProjects: ProjectActions.UPDATE_PROJECTS,
      handleCreateProject: ProjectActions.CREATE_PROJECT,
      handleBuildProject: ProjectActions.BUILD_PROJECT
    })
  }
  handleUpdateProjects(projects) {
    this.projects = projects
  }
  handleCreateProject(project) {
    this.projects.push(project)
    ProjectActions.saveProjects(this.projects)
  }
  handleBuildProject(project) {
    alert('Building ' + project + '\n' + child_process.execSync('docker --version').toString())
  }
}

export default alt.createStore(ProjectStore, 'ProjectStore')
