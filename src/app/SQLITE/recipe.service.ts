import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  public database: SQLiteObject;

  constructor(public sqlite: SQLite) {
    console.log('running service');
    this.sqlite.create({
      name: 'recipe.db',
      location: 'default'
    })
    .then((db : SQLiteObject) => {
      this.database = db;
      this.createTables();
    }, (error) => {
      console.log('error', error);
    });
  }
  async createTables(){
    try {
      await this.database.executeSql(`
      CREATE TABLE IF NOT EXISTS Recipe (
        RecipeID TEXT PRIMARY KEY,
        Name TEXT,
        Description TEXT
    );`);
  }catch(e){
    console.log('creation error' , e);
  }
}
      
    
  // createTables({
  //   this.database.executeSql(`
  //     CREATE TABLE Recipe (
  //       RecipeID VARCHAR(255),
  //       Name VARCHAR(255),
  //       Description VARCHAR(255)
  //     );
  //     INSERT INTO Recipe ('1','soup','soupy');  
  //     `)
  //     this.database.executeSql(`INSERT INTO Recipe ('2', 'chili', 'nice chili'`)
  //     console.log('database created');
  //   })

  enterData(){
    return this.database.executeSql(`INSERT INTO Recipe ('2', 'chili', 'nice chili'`)
  }
  getData() {
    return this.database.executeSql('SELECT * FROM Recipe')
  }
}
