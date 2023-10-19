import workerInjector from "jsstore/dist/worker_injector";
const { Connection } = require("jsstore");

export class Store {
    static connection = null;

    static async init() {
        const connection = new Connection();
        this.connection = connection;
        connection.addPlugin(workerInjector);
        const dbName = 'Darts';

        var tblTasks = {
            name: 'Tasks',
            columns: {
                id: { primaryKey: true, autoIncrement: true },
                name: { notNull: true, dataType: "string" },
                task: { notNull: true, dataType: "object" }
            }
        };
        var database = {
            name: dbName,
            tables: [tblTasks]
        }
        const isDbCreated = await connection.initDb(database);
        console.log(isDbCreated ? "db created" : "db opened");
    }

    static async insertTask(name, taskObj) {
        return await this.connection.insert({
            into: 'Tasks',
            values: [{
                name: name,
                task: taskObj
            }]
        });
    }
    static async getAllTasks() {
        return await this.connection.select({
            from: 'Tasks'
        });
    }
    static async updateTask(name, taskObj) {
        return await this.connection.update({
            in: 'Tasks',
            set: {
                task: taskObj
            },
            where: {
                name: name
            }
        });
    }
}

/*
row = {
    index: string,
    indexEditalbe: bool,
    value: int,
    valueEditalbe: bool
}

task = {
    name: string,
    rows: [row...],
    sum: bool,
    avg: bool,
    min: bool,
    max: bool,
    percentage: bool
}

tblTasks = {
    id:     { primaryKey: true, autoIncrement: true },
    name:   { notNull: true, dataType: "string" },
    task:   { notNull: true, dataType: "object" }
}

tblTests = {
    id:     { primaryKey: true, autoIncrement: true },
    name:   { notNull: true, dataType: "string" },
    task_ids:   { notNull: true, dataType: "array" }
}
*/
