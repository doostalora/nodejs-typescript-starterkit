import * as express from "express";
import * as bodyParser from "body-parser";
import { TestRoutes } from "./routes/test_routes";
import { CommonRoutes } from "./routes/common_routes";
import environment from "./environment";
import * as mongoose from 'mongoose';

class App {
   public app: express.Application;
   private testRoutes: TestRoutes = new TestRoutes();
   private commonRoutes: TestRoutes = new CommonRoutes();
   public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

   constructor() {
      this.app = express();
      this.config();
      this.testRoutes.route(this.app);
      this.commonRoutes.route(this.app);
      this.mongoSetup();
   }
    private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

   private mongoSetup(): void {
      mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
   }
}
export default new App().app;