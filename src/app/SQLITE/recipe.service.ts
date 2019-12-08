import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { async } from 'q';
import { BehaviorSubject, Observable} from 'rxjs';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  public database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(public sqlite: SQLite) {
  
    this.sqlite.create({
      name: 'recipe.db',
      location: 'default'
    })
    .then((db : SQLiteObject) => {
      this.database = db;
      this.createTables();
      //this.create(3,'Jeff', 'Soup', 'yummy saucy soup', 'soup.jpg')
      //console.log(this.get(1));
      this.dbReady.next(true);
      console.log('done');
    }, (error) => {
      console.log('error', error);
    });
  }
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
  createTables(){
      this.database.executeSql(`
      CREATE TABLE IF NOT EXISTS Recipe (
        ID INTEGER PRIMARY KEY,
        UserID TEXT,
        Name TEXT,
        Description TEXT,
        imgPath TEXT
    );`, []);
}
  create(id: Number, userId: String, name: String, description: String, imgPath: String, ){
    let sqlText;
    sqlText = `INSERT INTO Recipe VALUES (?,?,?,?,?)`;
    this.database.executeSql(sqlText, [id, userId, name, description, imgPath]);
  }
  get(id: Number) : Array<String | number> {
    if (id == 0){
      var items = [];
      this.database.executeSql('SELECT * FROM Recipe', []).then( (res) => {
        for (let i = 0; i < res.rows.length ; i++){
          items.push({
            id: res.rows.item(i).ID,
            UserId: res.rows.item(i).UserId,
            Name: res.rows.item(i).Name,
            Description: res.rows.item(i).Description,
            imgPath: res.rows.item(i).imgPath
          });
        }
        return items;
      })
    }
  else{
    var item = []
    this.database.executeSql('SELECT * FROM Recipe WHERE ID = ?', [id]).then( data => {

      item.push(
        data.rows.item(0).ID,
        data.rows.item(0).UserId,
        data.rows.item(0).Name,
        data.rows.item(0).Description,
        data.rows.item(0).imgPath
      );
    });
    return item;
  }
  
}
  delete(id) {
    this.database.executeSql('DELETE FROM Recipe WHERE ID = ?', [id]);
  }
}
