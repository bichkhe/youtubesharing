export interface Video {
    id: number;
    linkUrl: string;
    votedUp: number;
    votedDown: number;
    voted: number; // 0: is not voted yet, 1: up, 2 down
    email: string;
    createdAt: string;
    title: string;
    content?: string;
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