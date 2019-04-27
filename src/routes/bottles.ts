import express from "express";
const router = express.Router();
import { Context } from "../context/context";
import { Bearer } from "../security/bearer";
import { ActionManager }  from "../actions/action-manager";
import { AddBottles } from "../actions/bottles/add-bottles";

// route /bottles
router.post("/",  Bearer.handler, function (req, res, next) {
    const principal = Context.get();
    const userId = principal.thetokenInfo.userId;
    const action = new AddBottles(req.body.name, req.body.price, req.body.quantity);
    ActionManager.execute(action)
        .then(r => {
        res.json({
            name: r.name,
            quantity: r.quantity,
            price: r.price
          });
      }).catch((error) => {
              res.status(error.status || 400).send(error.message);
      });
    });

/*router.get("/:id", Bearer.handler, function (req, res, next) {
    let action = new GetBottles(req.params.id)
    ActionManager.execute(action)
        .then(r => {
            res.json(r.map((a) => {
                return {
                    userId: a.userId,
                    comment: a.comment,
                    date: a.date
                }
            }));

        }).catch((error) => {
            res.status(error.status || 400).send(error.message);
        });
});*/

export default router;
