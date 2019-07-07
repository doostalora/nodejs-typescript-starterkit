import { Request, Response, NextFunction } from 'express';
import * as Joi from '@hapi/joi';
const httperror = require("http-errors")
const errors = require("./error-responses")

export const addItemReq = (req: Request, res: Response, next: NextFunction) => {
  const Schema = Joi.object().keys({
    name: Joi.string()
      .alphanum()
      .required()
  })

  const validation = Joi.validate(req.body, Schema)
  if (validation.error === null) next()
  else {
    let message = errors.responses(validation.error.details)
    res.status(400).send({ error: message })
  }
}
