import { Client } from 'pg';

export const client = new Client({
  connectionString: process.env.NEON_DB_URI
});

export default async function connectDB(){
  try {
    await client.connect();
    console.log('DB connected successfully!');
  } catch (error) {
    console.log('Failed to connect DB : '+JSON.stringify(error));
    
  }
}