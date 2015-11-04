import alt from '../alt'
import ProjectActions from '../actions/ProjectActions'
import child_process from 'child_process'
import ProjectSource from '../sources/ProjectSource'

class ProjectStore {
  constructor() {
    this.projects = []
    this.bindListeners({
      handleUpdateProjects: ProjectActions.UPDATE_PROJECTS,
      handleCreateProject: ProjectActions.CREATE_PROJECT,
      handleBuildProject: ProjectActions.BUILD_PROJECT,
      handleDeleteProject: ProjectActions.DELETE_PROJECT,
      handleUpdateBuildOutput: ProjectActions.UPDATE_BUILD_OUTPUT,
      handleDoneBuilding: ProjectActions.DONE_BUILDING
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
    ProjectSource.save(this.projects)
  }
  handleBuildProject(project) {
    var text = 'Building ' + project.name + '\n' + child_process.execSync('docker --version').toString()
    var id = this.projects.indexOf(project)
    var _project = this.projects[id]
    _project.status = text

    var dockerArgs = ['build', '-t', _project.name, '/Users/kevinsimper/Projects/awesomeweb/']
    _project.output = []
    _project.output.push('$ docker ' + dockerArgs.join(' '))

    var build = child_process.spawn('docker', dockerArgs)
    build.stdout.on('data', function (data) {
      data.toString().split('\n').forEach(function (data) {
        ProjectActions.updateBuildOutput({
          project, _project,
          output: data
        })
      })
    })
    build.on('close', function (exitCode) {
      if(exitCode !== 0) {
        ProjectActions.failedBuilding({
          project: _project,
          exitCode
        })
      } else {
        ProjectActions.doneBuilding({
          project: _project,
          exitCode
        })
      }
    })
  }
  handleUpdateBuildOutput(options) {
    options.project.output = options.project.output || []
    options.project.output.push(options.output)
  }
  handleDeleteProject(project) {
    if(confirm('Are you sure you want to delete:\n' + project.name)) {
      var index = this.projects.indexOf(project)
      this.projects.splice(index, 1)
      ProjectSource.save(this.projects)
    }
  }
  handleDoneBuilding(options) {
    var project = options.project
    project.ready = true
  }
}

export default alt.createStore(ProjectStore, 'ProjectStore')
