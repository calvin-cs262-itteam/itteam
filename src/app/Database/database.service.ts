import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import mongoose, {Schema} from 'mongoose'; 

@Injectable({
  providedIn: 'root'
})





export class DatabaseService {
  private schema: Schema;
  private model;

  constructor(schemaType: string) {

    if (schemaType === 'Recipe') {
      this.schema = new Schema({
        name: String,
        description: String,
        ingredients: Array
      });
    }

    if (schemaType === 'User') {
      this.schema = new Schema({
        username: {type: String, unique: true, requiried: true},
        password: String
      });
    }
    this.model = mongoose.model(schemaType, this.schema);
   }

  create(data: Array<[string, any]>) {
    data.forEach(element => {
      if (element[0] !== this.schema[0]) {
        throw TypeError('DatabaseService.create(): invalid schema type');
      }
    });

    const entry = new this.model(data);
    entry.save(function (err) {
      if (err) { return console.error(err); }
      console.log('Created document');
    });
  }

  read(){

  }

  update(){

  }

  delete(){

  }

  
}
