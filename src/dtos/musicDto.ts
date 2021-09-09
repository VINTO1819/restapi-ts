export class MusicDto {
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
}