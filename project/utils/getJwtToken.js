import jwt from "jsonwebtoken"

function getJwtToken(userId){
  return jwt.sign({
    userId
  },process.env.JWT_SECRET,{
    expiresIn:'1 day'
  })

}