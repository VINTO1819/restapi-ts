import { MusicDto } from "../dtos/musicDto"

export class MusicEntity {
    musicId: number
    musicName: string
    genre: string
    artist: string

    constructor(musicId: number, musicName: string, genre: string, artist: string) {
        this.musicId = musicId
        this.musicName = musicName
        this.genre = genre
        this.artist = artist
    }

    toDto(): MusicDto {
        return new MusicDto(this.musicId, this.musicName, this.genre, this.artist)
    }
}