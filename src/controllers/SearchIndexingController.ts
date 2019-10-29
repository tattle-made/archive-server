import BaseController from './_BaseController';

export class SearchIndexingController extends BaseController {
    constructor() {
        super('search-indexing');
    }

    public indexPending() {
        console.log('indexing');
    }
}
