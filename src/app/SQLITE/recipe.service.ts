import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable} from 'rxjs';


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
      this.database.sqlBatch([
      'DROP TABLE IF EXISTS Recipe',
      `CREATE TABLE IF NOT EXISTS Recipe (
        ID INTEGER PRIMARY KEY,
        User TEXT,
        Name TEXT,
        Description TEXT,
        imgPath TEXT)`
      ]);
}
  create(id: Number, User: String, name: String, description: String, imgPath: String, ){
    let sqlText;
    sqlText = `INSERT INTO Recipe VALUES (?,?,?,?,?)`;
    this.database.executeSql(sqlText, [id, User, name, description, imgPath]);
  }
  get(id: Number) : Array<String | number> {
    let item : (string | number)[];
    this.database.executeSql('SELECT * FROM Recipe WHERE ID = ?', [id]).then( data => {

      let ID = data.rows.item(0).ID;
      let User = data.rows.item(0).User;
      let Name = data.rows.item(0).Name;
      let Description = data.rows.item(0).Description;
      let imgPath = data.rows.item(0).imgPath;
      
      item = [ID, User, Name, Description, imgPath];

      console.log(ID);
      console.log(User);
      console.log(Name);
      console.log(typeof(Name));
      console.log(item);
      console.log(typeof(item));
      console.log(item[2]);
    });
    return item;
}

  delete(id) {
    this.database.executeSql('DELETE FROM Recipe WHERE ID = ?', [id]);
  }
}
