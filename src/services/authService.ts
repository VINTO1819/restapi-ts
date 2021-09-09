import jwt from 'jsonwebtoken'
import { config } from '../config'

export class AuthService {
    generateToken(): string {
        return jwt.sign({data: 'TEST'}, config.jwtSecret, {
            expiresIn: 60 * 60 * 2
        })
    }


}