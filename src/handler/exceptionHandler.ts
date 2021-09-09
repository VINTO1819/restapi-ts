import { ErrorRequestHandler } from 'express'
import { ResponseDto } from '../dtos/responseDto'

export const exceptionHandler: ErrorRequestHandler = (err, req, res, next) => {
    if(!err) {
        console.log(err)
        res.send(new ResponseDto({}, 500, 'Internal Server Error'))
    }else next()
}