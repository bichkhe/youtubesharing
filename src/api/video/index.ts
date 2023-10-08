import { get, post } from "../global/api";
import {
  VideoForSharing,
  VideoForVote,
  VideoRequest,
  VideoResponseForSharing,
  VideoResponseForVote,
  VideoResponse,
} from "./types";
import { ResponseError } from "../global/api";
import { Video } from "./../../model/video";

export const getVideos = async (data: VideoRequest) => {
  try {
    const res = (await get<VideoResponse>(
      `/api/videos?page=${data.page}&pageSize=${data.pageSize}`
    )) as VideoResponse;
    return res;
  } catch (error: any) {
    console.log("error", error.response.data);
    return error.response.data as ResponseError;
  }
};

export const sharingYoutubeVideo = async (data: VideoForSharing) => {
  try {
    const res = await post<VideoResponseForSharing>(
      "/api/videos/sharing",
      data
    );
    return res;
  } catch (error: any) {
    console.log("error", error.response.data);
    return error.response.data as ResponseError;
  }
};

export const voteYoutubeVideo = async (data: VideoForVote) => {
  try {
    const res = await post<VideoResponseForVote>("/api/videos/vote", data);
    return res;
  } catch (error: any) {
    console.log("error", error.response.data);
    return error.response.data as ResponseError;
  }
};
