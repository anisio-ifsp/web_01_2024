
export class BasicResponseDto{
    message: string;
    object:  any;

    constructor(message: string, object:  any){
        this.message =message;
        this.object = object;
    }

}