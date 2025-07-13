
import { client } from './connectDB';

export async function insertIntoDB(){
  try {

    const query=`
      INSERT INTO users (username,email,password) VALUES($1,$2,$3)
    `
    
    const values=['soham1','soham1@gmail.com','Soham@1']
    const result = await client.query(query,values); 
    console.log('inserted value = '+JSON.stringify(result));

  } catch (error) {
    console.log('error while inserting : '+JSON.stringify(error));
  }
}