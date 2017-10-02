import { IComment } from './i-comment';

export interface IPost {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
    comments?: IComment[];
}
