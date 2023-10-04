
export interface VideoRequest {
}


export interface VideoResponse {
  id: number;
  linkUrl: string;
  email: string;
  title: string;
  content?: string;
  votedUp: number;
  votedDown: number;
  voted: number;
  published: boolean,
  authorId: number;
  createdAt?: string,
  updatedAt?: string,
}
export interface VideoForSharing {
  linkUrl: string;
  title: string;
  content?: string;
}


export interface VideoForVote {
  id: string;
  vote: string;
}


export interface VideoResponseForSharing {
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
}

export interface VideoResponseForVote {
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
}


