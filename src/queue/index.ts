import {Queue as QueueType, Job} from 'bull';
import * as Queue from 'bull';
import { CreateStoryRequestModel } from '../routes/fact-checked-stories/CreateStoryRequestModel';

class QueueManager {
    private factCheckStoriesIndexQueue: QueueType;

    constructor() {
        this.factCheckStoriesIndexQueue = new Queue('test');
    }

    public addFactCheckStoryIndexJob(jobParam: CreateStoryRequestModel) {
        return this.factCheckStoriesIndexQueue.add(jobParam.getJSONForQueue());
    }

    public setupWorker() {
        this.factCheckStoriesIndexQueue.process((job) => {
            return Promise.resolve(job.toJSON())
            .then((result) => console.log(result));
        });
    }
}

const queueManagerInstance =  new QueueManager();

export default queueManagerInstance;
