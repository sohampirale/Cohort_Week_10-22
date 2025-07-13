import dotenv from "dotenv"
dotenv.config();

import connectDB from "./connectDB";
import createTable from "./createTable";
import { insertIntoDB } from "./insertIntoDB";
import { deleteTable } from "./deleteTable";

connectDB();

let choice=2;

if(choice==1){
  createTable();
} else if(choice==2){
  insertIntoDB();
} else if(choice==3){
  deleteTable();
} else {

}