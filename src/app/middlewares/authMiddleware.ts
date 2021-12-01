import {  Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
require('dotenv').config()


export default function authMiddleware(
  req: Request, res: Response, next: NextFunction
  ) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const token = authorization.replace('Bearer ', '').trim();

  try {
    const data = jwt.verify(token, process.env.APP_SECRET);
    const {id} = data;
    req.userId = id;
    return next();

  } catch{
    return res.status(401).json({ error: 'Interrupted request' });
  }
}
