import db from 'db'

export default {
  fetch: () => {
    return new Promise((resolve) => {
      db.get('projects', (err, value) => {
        if(value) {
          resolve(value)
        } else {
          resolve([])
        }
      })
    })
  },
  save: (projects) => {
    db.put('projects', projects)
  }
}
