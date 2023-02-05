const model = require('../database/models')

type User = {
  id: number,
  name: string,
  email: string,
  homePage?: string,
  comment: string
};

function createUsers(user: User) {
let {name, email, homePage, comment} = user;

 model.User.create({name, email, homePage})
  .then((user: User) => {
    console.log(name + " is new user")
    console.log(name + ' created now')
  })
  .catch((err: void) => {
    console.log(err)
  })
}

module.exports = createUsers;