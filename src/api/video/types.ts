import { Video } from "../../model/video";

export interface VideoRequest {
  page: number;
  pageSize: number;
}

export interface VideoResponse {
  videos: Video[];
  totalPage: number;
  pageSize?: number;
  currentPage?: number;
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
  published: boolean;
  authorId: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface VideoResponseForVote {
  id: number;
  linkUrl: string;
  email: string;
  title: string;
  content?: string;
  votedUp: number;
  votedDown: number;
  published: boolean;
  authorId: number;
  createdAt?: string;
  updatedAt?: string;
}
