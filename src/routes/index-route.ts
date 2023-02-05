import express from 'express';
const createUsers = require('../helpers/createUser')
const model = require('../database/models')
const router = express.Router();

type User = {
  id: number,
  name: string,
  email: string,
  homePage?: string
};

router.get('/', (req, res) => {
  console.log(res)
  res.send('SPA');
});

router.post('/', async (req, res) => {
  let userId: number;
  let {name, email, homePage, comment} = req.body;

  if(homePage === '') homePage = null;
  
  const checkExistingUser = await model.User.findOne({where : {email: email}})
  .then((user: User) => {
    user === null ? createUsers(req.body) : console.log(name + " already has")
  })
  .catch((err: void) => {
    console.log(err)
  })
  
  const createComment = await model.User.findOne({where : {email: email}})
  .then((user: User) => {
    userId = user.id;
    if(comment !== '') {
      model.Comment.create({comment, userId});
      console.log(name + ' created new comment')
    }
  })
  .catch((err: void) => {
    console.log(err)
  });
});

export default router;