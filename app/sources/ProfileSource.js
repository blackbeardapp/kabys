import db from 'db'

export default {
  fetch: () => {
    return new Promise(resolve => {
      db.get('profile', (err, value) => {
        console.log('got value', value)
        if(value) {
          resolve(value)
        } else {
          resolve({})
        }
      })
    })
  },
  save: (profile) => {
    console.log(profile)
    db.put('profile', profile)
  }
}
