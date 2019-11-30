import { SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import { Key } from 'protractor';





export class Database{
    private database: SQLiteObject;
    constructor(private sqlite: SQLite){
        this.sqlite.create({
            name: 'items.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
            this.database = db;

            db.executeSql('create table danceMoves(name VARCHAR(32))', [])
            .then(() => console.log('Executed'))
            .catch(e =>console.log(e));
            db.executeSql("INSERT INTO danceMoves whip")
        })
        .catch(e => console.log(e));
            
    }
    
    get(){
        console.log('got');
        }

}