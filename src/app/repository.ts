export class Repository {
    public reponame: string;
    public repoDetails: string;
    
    
    constructor(id: number, authorname: string, Quote: string, submitter: string, time: any, upvote: number, downvote: number) {
        { this.id = id, this.authorname = authorname, this.Quote = Quote, this.submitter = submitter, this.time = time, this.upvote = upvote, this.downvote = downvote }
    }
}
