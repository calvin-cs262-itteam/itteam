import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import mongoose, {Schema} from 'mongoose'; 

@Injectable({
  providedIn: 'root'
})





export class DatabaseService {
  private schema: Schema;
  private model;
  private db;

  constructor(schemaType: string, test: boolean = false) {

    if (test) {
      mongoose.connect('mongodb+srv://Nate:EasyEats@cluster0-4hwij.mongodb.net/test?retryWrites=true&w=majority',
        {useNewUrlParser: true, useUnifiedTopology: true});
    } else {
      mongoose.connect('mongodb+srv://Nate:EasyEats@cluster0-4hwij.mongodb.net/EasyEatsDatabase?retryWrites=true&w=majority',
        {useNewUrlParser: true, useUnifiedTopology: true});
    }
    this.db = mongoose.connection;

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
    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function() {
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
    });
  }

  read(){

  }

  update(){

  }

  delete(){

  }

  
}
