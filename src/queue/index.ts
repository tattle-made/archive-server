import {Queue as QueueType} from 'bull';
import * as Queue from 'bull';
import { CreateStoryRequestModel } from '../routes/fact-checked-stories/CreateStoryRequestModel';

export class QueueManager {
    private factCheckStoriesIndexQueue: QueueType;

    constructor() {
        this.factCheckStoriesIndexQueue = new Queue('test');
    }

    public addFactCheckStoryIndexJob(jobParam: CreateStoryRequestModel) {
        return this.factCheckStoriesIndexQueue.add(jobParam.getJSONForQueue());
    }
}
