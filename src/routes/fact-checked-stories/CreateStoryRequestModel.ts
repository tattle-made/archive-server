export class CreateStoryRequestModel {
    public url!: string;
    public storyId!: string;
    public docId!: string;
    public type!: string;
    public filename!: string;
    public userId!: number;

    public isValid(): boolean {
        if ( this.url !== undefined && this.docId !== undefined && this.type !== undefined
            && this.storyId !== undefined && this.filename !== undefined
            && this.userId !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    public getJSONForSequelize() {
        return {
            type: this.type,
            data: '',
            filename: this.filename,
            userId: this.userId,
        };
    }

    public getJSONForQueue() {
        return {
            url: this.url,
            storyId: this.storyId,
            docId: this.docId,
            type: this.type,
            filename: this.filename,
            userId: this.userId,
        };
    }
}
