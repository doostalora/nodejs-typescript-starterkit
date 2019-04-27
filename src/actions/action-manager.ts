export class ActionManager {
    static async execute (action: any) {
        return action.execute();
    }
}


