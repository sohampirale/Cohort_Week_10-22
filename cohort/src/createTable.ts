import {client} from "./connectDB"
export default async function createTable(){
  const query=`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      username VARCHAR(20) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) ,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `

  try {
    const result = await client.query(query);
    console.log('created table = '+JSON.stringify(result));
  } catch (error) {
    console.log('failed to create the table');
  }
}