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
  model.Comment.findAll()
  .then((allComments: [object]) => {
    let amount = allComments.length;
    let arr: any[] = [];
    allComments.forEach((each: any) => {

      model.User.findAll({where: {id: each.userId}})
      .then((user: any) => {
        arr.push({comment:each.comment, name: user[0].name})
        
        if(arr.length === amount){
          res.send(arr);
        }
      })
    })
  })
});

router.post('/', async (req, res) => {
  let userId: number;
  let {name, email, homePage, comment} = req.body;

  if(homePage === '') homePage = null;
  
  const checkExistingUser = await model.User.findOne({where : {email: email}})
  .then(async (user: User) => {
    if(user === null) {
      await createUsers(req.body);
    }else{
      console.log(name + " already has");
    }
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