import {Users} from './data.js'


export const  userLogin = (req, res)=>{
  const {email ,password} = req.body;
  try {
    const userData = Users.filter((user)=> user.email===email);
    if(userData.length == 0) return res.status(403).send({message:"user not found"});
    if(userData[0].password!==password) return res.status(401).send({message:"password or email is incorrect"})

    res.status(200).send({message:"user login successfully", user:userData[0]})
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}