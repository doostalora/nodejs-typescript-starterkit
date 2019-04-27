export class Principal {
    thetokenInfo: any;
    thetoken: string;
    constructor(payload: any, token: string) {
        this.thetokenInfo = payload;
        this.thetoken = token;
    }

    get tokenInfo() {
        return this.thetokenInfo;
    }

    get token() {
        return this.thetoken;
    }

}
