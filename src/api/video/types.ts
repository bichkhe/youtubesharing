
export interface VideoRequest {
}


export interface VideoResponse {
  id: number;
  url: string;
  shared_by: string;
  shared_at: string;
  title: string;
  description?: string;
  votedup: number;
  voteddown: number;
  voted: number;
  expiredAt?: string;
  createdAt?: string,
}

