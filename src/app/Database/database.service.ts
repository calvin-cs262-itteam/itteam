import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import mongoose, {Schema} from 'mongoose'; 

@Injectable({
  providedIn: 'root'
})





export class DatabaseService {
  private schema;
  
  constructor(schemaType:string){
    
    if (schemaType == 'Recipe'){
      this.schema = new Schema({
        name: String,
        description: String,
        ingredients: Array
      });
    }

    if (schemaType == 'User'){
      this.schema = new Schema({
        username:{type: String, unique: true, requiried: true}, 
        password: String
      });
    }
   }
  
  create(){

  } 

  read(){

  }

  update(){

  }

  delete(){

  }

  
}
