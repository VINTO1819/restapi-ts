import { RequestHandler } from 'express'
import { ResponseDto } from '../dtos/responseDto'
import jwt from 'jsonwebtoken'
import { config } from '../config'

export const authHandler: RequestHandler = (req, res, next) => {
    const token = req.headers['x-access-token'] as string | undefined
    if(!token) {
        res.send(new ResponseDto(null, 401, 'JWT token required'))
        return
    }
    try{
        const verified = jwt.verify(token, config.jwtSecret)
        next()
    } catch(ex) {
        res.send(new ResponseDto(null, 401, 'Wrong JWT token'))
        return
    }
}