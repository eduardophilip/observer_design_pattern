export class Video {

    
    // constructor (
    //     public readonly id: string,
    //     public readonly title: string,
    //     public readonly thumbnail: string,
    //     public readonly link: string,

    // ) {}


    public readonly id: string = ''
    public readonly title: string = ''
    public readonly thumbnail: string = ''
    public readonly link: string = ''

    constructor (
        id: string,
        title: string,
        thumbnail: string,
        link: string,
    ) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.link = link;
    }

}