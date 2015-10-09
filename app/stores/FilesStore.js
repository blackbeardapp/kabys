import alt from '../alt'
import FilesActions from '../actions/FilesActions'

class FilesStore {
  constructor() {
    this.files = []
    this.bindListeners({
      handleUpdateFiles: FilesActions.UPDATE_FILES
    })
  }
  handleUpdateFiles(files) {
    this.files = files
  }
}

export default alt.createStore(FilesStore, 'FilesStore')
