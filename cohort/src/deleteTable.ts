import { client } from "./connectDB"

export async function deleteTable(){
  try {
    const query=`DROP TABLE users`
    const result = await client.query(query);

    console.log('deleted table = '+JSON.stringify(result));
  } catch (error) {
    console.log('failed to drop the table');
    
  }
}