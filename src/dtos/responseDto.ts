export class ResponseDto<BodyType> {
    readonly code: number = 200
    readonly message: string = 'OK'
    readonly body?: BodyType

    constructor(body: BodyType, code?: number, message?: string) {
        this.body = body
        this.code = code || this.code
        this.message = message || this.message
    }
}