import { SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import { Key } from 'protractor';





export class Database{
    private database: SQLiteObject;
    constructor(private sqlite: SQLite){
        this.sqlite.create({
            name: 'test.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
            this.database = db;

            db.executeSql('create table daceMoves(name VARCHAR(32))', [])
            .then(() => console.log('Executed'))
            .catch(e =>console.log(e));
        })
        .catch(e => console.log(e));
    }
}