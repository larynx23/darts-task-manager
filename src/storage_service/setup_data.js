import { Store } from "./idb_service";
import data from "./tasks_data.json";

export class SetupDBData extends Store{
    static async init() {
        await super.init();
        const tasks = await this.getAllTasks();
        console.log(data);
    }
}