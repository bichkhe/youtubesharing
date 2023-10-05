
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
  published: boolean,
  authorId: number;
  createdAt?: string,
  updatedAt?: string,

  // voting status of user creating this request
  voted: string;
}
export interface VideoForSharing {
  linkUrl: string;
  title: string;
  content?: string;
}


export interface VideoForVote {
  id: number;
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


