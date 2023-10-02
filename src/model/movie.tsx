export interface Video {
    id: number;
    url: string;
    votedup: number;
    votedown: number;
    voted: number; // 0: is not voted yet, 1: up, 2 down
    shared_by: string;
    shared_at: string;
    title: string;
    description?: string;
}

export interface VideoForSharing {
    url: string;
    shared_by: string;
    shared_at: string;
    description: string;
}

export interface VideoForVote {
    id: number;
    url: string;
    voted: number; // 1: up, 2: down
    voted_at: string;
    // voted_by: string; // we get user in token 
}