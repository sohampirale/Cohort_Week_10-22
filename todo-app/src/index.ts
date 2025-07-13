import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function insertNewUser(email:string,password:string,firstName?:string,lastName?:string){
  const user = await prisma.user.create({
    data:{
      email,
      password,
      firstName,
      lastName
    }
  })
  console.log('created User : ',user);
  
}


interface IData{
  firstName:string;
  lastName:string;
  password:string;
}

async function updateUser(email:string,data:IData){
  const updatedUser = await prisma.user.update({
    where:{
      email,
      password:data.password
    },
    data:{
      firstName:data.firstName,
      lastName:data.lastName
    }
  })
  
  console.log('updated user : ',updatedUser);
}


async function getUser(email:string){
  const user =await prisma.user.findFirst({
    where:{
      email
    },
    select:{
      email:true,
      firstName:true,
      lastName:true
    }
  })

  console.log('fetched user : '+user);
}


// insertNewUser("sohampirale20504@gmail.com","Soham@1","Soham","Pirale");

// updateUser("sohampirale20504@gmail.com",{
//   firstName:"soham",
//   lastName:"pirale",
//   password:"Soham@1"
// })