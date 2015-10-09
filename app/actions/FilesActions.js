import alt from '../alt'

class DropActions {
  updateFiles(files) {
    this.dispatch(files)
  }
}

export default alt.createActions(DropActions)
