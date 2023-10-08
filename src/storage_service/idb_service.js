import { Connection } from 'jsstore';


const workerPath = require("../../node_modules/jsstore/dist/jsstore.worker").default;
export const connection = new Connection(new Worker(workerPath));
export const dbname = 'Darts';

/*
row = {
    taskIndex: string,
    taskIndexEditalbe: bool,
    taskValue: int,
    taskValueEditalbe: bool
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

var tblTasks = {
    id:         { primaryKey: true, autoIncrement: true },
    name:       { notNull: true, dataType: "string" },
    task:       { notNull: true, dataType: "object" }
};

var tblTests = {
    id:         { primaryKey: true, autoIncrement: true },
    name:       { notNull: true, dataType: "string" },
    task_ids:   { notNull: true, dataType: "array" }
};

var darts = {
    name: dbname,
    tables: [tblTasks, tblTests]
};

export const initJsStore = () => {
    connection.initDb(darts);
};