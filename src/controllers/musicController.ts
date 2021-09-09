import Express from 'express'
import { MusicCreationDto } from '../dtos/musicCreationDto'
import { MusicDto } from '../dtos/musicDto'
import { MusicPatchDto } from '../dtos/musicPatchDto'
import { ResponseDto } from '../dtos/responseDto'
import { MusicService } from '../services/musicService'

const musicController = Express.Router()
const musicService = new MusicService()

// get all musics
musicController.get('/', (req, res) => {
    res.send(new ResponseDto<MusicDto[]>(musicService.getAllMusics()))
})

// inspect music
musicController.get('/:musicId', (req, res) => {
    const musicId = parseInt(req.params.musicId)
    res.send(new ResponseDto<MusicDto>(musicService.getMusic(musicId)))
})

// delete music
musicController.delete('/:musicId', (req, res) => {
    const musicId = parseInt(req.params.musicId)
    const deleted = musicService.deleteMusic(musicId)
    res.send(new ResponseDto<MusicDto>(deleted, 200, 'Successfully Deleted'))
})

// create new music
musicController.post('/', (req, res) => {
    const createdMusic: MusicDto = musicService.createMusic(req.body as MusicCreationDto)
    res.send(new ResponseDto<MusicDto>(createdMusic, 201, 'Created'))
})

// update music
musicController.post('/:musicId', (req, res) => {
    const reqDto: MusicPatchDto = req.body
    const updated =  musicService.updateMusic(parseInt(req.params.musicId), reqDto)
    res.send(new ResponseDto<MusicDto>(updated, 200, 'Updated'))
})

export default musicController