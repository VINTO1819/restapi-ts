import { MusicCreationDto } from "../dtos/musicCreationDto"
import { MusicDto } from "../dtos/musicDto"
import { MusicPatchDto } from "../dtos/musicPatchDto"
import { MusicEntity } from "../entities/musicEntity"

export class MusicService {
    private simpleStorage: MusicEntity[] = new Array() // 당연히 실제 개발에서는 knex, ORM 같은거 씀
    
    // init sample data
    constructor() {
        this.simpleStorage.push(
            new MusicEntity(19228, '나만, 봄', 'K-pop', '볼빨간사춘기'),
            new MusicEntity(13278, '그대라는 사치', 'K-pop', '한동근'),
            new MusicEntity(18283, '너의 모든 순간', '발라드', '성시경')
        )
    }

    getAllMusics(): MusicDto[] {
        return this.simpleStorage.map((it) => 
            it.toDto()
        )
    }    

    getMusic(musicId: number): MusicDto {
        return this.simpleStorage.filter((it) => it.musicId == musicId)[0]
    }

    deleteMusic(musicId: number): MusicDto {
        const itemToDelete = this.getMusic(musicId)
        this.simpleStorage = this.simpleStorage.filter((it) => it != itemToDelete)

        return itemToDelete
    }

    createMusic(dto: MusicCreationDto): MusicDto {
        const newId = Math.floor(Math.random() * 10000) // 이것도 only 테스트용
        const newData = new MusicEntity(newId, dto.musicName, dto.genre, dto.artist)
        this.simpleStorage.push(newData)

        return newData.toDto()
    }

    updateMusic(musicId: number, dataToPatch: MusicPatchDto): MusicDto {
        const obj = this.simpleStorage.filter((it) => 
            it.musicId == musicId
        )[0]

        // 원래 spread 쓰면 편한데 interface 말고 클래스 써버려서 ㅇㅅㅇ;;
        //console.log(obj)
        //console.log(dataToPatch)
        obj.artist = dataToPatch.artist || obj.artist
        obj.genre = dataToPatch.genre || obj.genre
        obj.musicName = dataToPatch.musicName || obj.musicName

        return obj.toDto()
    }

}