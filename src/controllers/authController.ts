import Express from 'express'
import { ResponseDto } from '../dtos/responseDto'
import { AuthService } from '../services/authService'

const authController = Express.Router()
const authService = new AuthService()

authController.get('/signin', (req, res) => {
    const { id, pw } = req.body

    // TODO
    res.send(new ResponseDto(authService.generateToken(), 200, 'logined'))
})

// JWT 로그아웃은 일반적으로 클라이언트에서 가능하므로 구현 안했음

export default authController