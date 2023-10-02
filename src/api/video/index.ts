import { get } from "../global/api";
import { VideoRequest, VideoResponse } from "./types";
import { ResponseError } from "../global/api";

export const getVideos = async (data: VideoRequest) => {
  try {
    const res = (await get<VideoResponse[]>("/api/videos")) as VideoResponse[];
    return res;
  } catch (error: any) {
    console.log('error', error.response.data);
    return error.response.data as ResponseError
  }
};


