import alt from '../alt'
import ProjectActions from '../actions/ProjectActions'
import child_process from 'child_process'

class ProjectStore {
  constructor() {
    this.projects = []
    this.bindListeners({
      handleUpdateProjects: ProjectActions.UPDATE_PROJECTS,
      handleCreateProject: ProjectActions.CREATE_PROJECT,
      handleBuildProject: ProjectActions.BUILD_PROJECT,
      handleDeleteProject: ProjectActions.DELETE_PROJECT
    })
  }
  handleUpdateProjects(projects) {
    this.projects = projects
  }
  handleCreateProject(project) {
    var files = project.files.map(file => file.path)
    var name = project.files[0].fullPath.split('/')[1]
    var dockerfile = files.filter(file => file.includes('Dockerfile'))[0]
    var path = files[0].split('/').slice(0, -1).join('/')
    this.projects.push({
      name,
      files,
      dockerfile,
      path
    })
    ProjectActions.saveProjects(this.projects)
  }
  handleBuildProject(project) {
    alert('Building ' + project.name + '\n' + child_process.execSync('docker --version').toString())
  }
  handleDeleteProject(project) {
    if(confirm('Are you sure you want to delete:\n' + project.name)) {
      var index = this.projects.indexOf(project)
      this.projects.splice(index, 1)
      ProjectActions.saveProjects(this.projects)
    }
  }
}

export default alt.createStore(ProjectStore, 'ProjectStore')
