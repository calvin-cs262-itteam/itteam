import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private database: SQLiteObject;

  constructor(private sqlite: SQLite) {
    console.log('running service');
    this.sqlite.create({
      name: 'recipe.db',
      location: 'default'
    })
    .then((db:SQLiteObject) => {
      this.database = db;
      this.database.executeSql(`
      CREATE TABLE Recipe (
        RecipeID VARCHAR(255),
        Name VARCHAR(255),
        Description VARCHAR(255)
      )
      INSERT INTO Recipe ('1','soup','soupy')
      `);
      console.log('database created');

    });

  }
  talk() {
    return this.database.executeSql(`
    SELECT * FROM Recipe
    `);
  }
}
