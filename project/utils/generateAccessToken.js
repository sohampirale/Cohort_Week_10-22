import jwt from "jsonwebtoken"

export default async function generateAccessToken(_id,username,email){
  try {
    const payload={
      _id,
      username,
      email
    }

    const accessToken=jwt.sign(payload,process.env.JWT_SECRET)
    return accessToken;
  } catch (error) {
    return null
  }
}