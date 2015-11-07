import db from 'db'

export default {
  fetch: () => {
    return new Promise(resolve => {
      db.get('profile', (err, value) => {
        if(value) {
          resolve(value)
        } else {
          resolve({})
        }
      })
    })
  },
  save: (profile) => {
    db.put('profile', profile)
  }
}
