const model = require('../database/models')

type User = {
  id: number,
  name: string,
  email: string,
  homePage?: string | null,
  comment: string
};

async function createUsers(user: User) {
let {name, email, homePage, comment} = user;

if(homePage === '') homePage = null;

 await model.User.create({name, email, homePage})
  .then((user: User) => {
    console.log(name + " is new user")
    console.log(name + ' created now')
  })
  .catch((err: void) => {
    console.log(err)
  })
}

module.exports = createUsers;