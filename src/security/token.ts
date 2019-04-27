const jwt = require("jsonwebtoken");
const httperror = require("http-errors");

export class Token {
    static validate (token: string) {
        try {
            const secret = process.env.AUTHSECRET || "secret_server_key";
            const payload =  jwt.verify(token, secret);
            return {userId: payload.id, email: payload.email, expires: payload.expires, username: payload.username, tenant: payload.tenant};
        } catch (err) {
            throw new httperror(401, err.message);
        }
    }
}