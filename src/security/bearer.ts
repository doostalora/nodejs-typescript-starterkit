const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;

import { Token }  from "../security/token";
import { Context } from "../context/context";
import { Principal } from "../security/principal";

const getPrincipal = function (  payload: any, token: string) {
    return new Principal(payload, token);
};

passport.use(new BearerStrategy(function (token: string, cb: any) {
    try {
        const payload = Token.validate(token);
        const principal = getPrincipal(payload, token);

        if (principal != undefined) {
            Context.put(principal);
            return cb(undefined, principal);
        } else
            return cb(undefined, false);

    } catch (err) {
        return cb(err);
    }
}));

export class Bearer {
    static handler = passport.authenticate("bearer", {
        session: false
    });
}
