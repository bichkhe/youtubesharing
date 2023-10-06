export interface Video {
    id: number;
    linkUrl: string;
    email: string;
    title: string;
    content?: string;
    votedUp: number;
    votedDown: number;
    published: boolean,
    authorId: number;
    createdAt?: string,
    updatedAt?: string,

    voted?: string;
}

export interface VideoForSharing {
    url: string;
    title: string;
    content: string;
}
export enum VoteKind {
    UP,
    DOWN,
    NONE
}
export interface VideoForVote {
    id: number;
    vote: VoteKind
}