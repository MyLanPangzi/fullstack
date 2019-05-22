import {Comment} from "./CommentList";

export class DataSource {
    private static COMMENTS: Comment[] = [{id: 1, content: 'hello'}, {id: 2, content: 'world'}];
    private static LISTENERS: (() => void)[] = [];

    static getComments(): Comment[] {
        return DataSource.COMMENTS;
    }

    static getBlogPost(id: number): Comment | undefined {
        return DataSource.COMMENTS.find(e => e.id === id);
    }

    static addChangeListener(handler: () => void) {
        DataSource.LISTENERS.push(handler);
    }

    static removeChangeListener(hanndler: () => void) {
        const index = DataSource.LISTENERS.findIndex(e => e === hanndler);
        if (index > -1) {
            DataSource.LISTENERS.splice(index, 1);
        }
    }
}