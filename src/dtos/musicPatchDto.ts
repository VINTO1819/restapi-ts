export class MusicPatchDto {
    musicName?: string
    genre?: string
    artist?: string

    constructor(musicName: string, genre: string, artist: string) {
        this.musicName = musicName
        this.genre = genre
        this.artist = artist
    }
}