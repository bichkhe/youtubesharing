
import { AppShell, Box, Burger, Button, Container, Flex, Group, MantineTheme, ScrollArea, createTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Header } from "../container/header/Header";
import { VideoCard } from "../components/Card/VideoCard";
import { useEffect, useState } from 'react';
import { VideoResponse } from '../api/video/types';
import { Layout } from "../layout";
import { getVideos } from "../api/video";
import { isResponseError } from "../api/global/api";

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  const [videos, setVideos] = useState<VideoResponse[]>([
    {
      id: 1,
      linkUrl: 'https://www.youtube.com/embed/mzJ4vCjSt28',
      votedUp: 100,
      votedDown: 10,
      voted: "UP",
      createdAt: '2023-10-04T14:38:29.845Z' as string,
      published: true,
      authorId: 1,
      email: 'mr.bichkhe@gmail.com',
      title: 'We are number one csdsfsdfsdfsdfdsfsdf sfdsfsdfsdf',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },

  ])

  const fetchVideos = async () => {
    const videos = await getVideos({})
    if (!isResponseError(videos)) {
      setVideos(videos)
    }
  }
  useEffect(() => {
    fetchVideos()
  }, [])

  return (
    <>
      <Layout>
        <Box>
          {videos.map((item, _) => (
            <VideoCard video={item} />
          ))}
        </Box>
      </Layout>
    </>
  );
}
