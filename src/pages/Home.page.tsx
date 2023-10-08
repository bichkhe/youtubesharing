import { Box, Group, LoadingOverlay, Pagination, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { VideoCard } from "../components/Card/VideoCard";
import { useEffect, useState } from "react";
import { Video } from "../model/video";
import { Layout } from "../layout";
import { getVideos, voteYoutubeVideo } from "../api/video";
import { isResponseError } from "../api/global/api";

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  const [activePage, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [videos, setVideos] = useState<Video[]>([
    // {
    //   id: 1,
    //   linkUrl: 'https://www.youtube.com/embed/mzJ4vCjSt28',
    //   votedUp: 100,
    //   votedDown: 10,
    //   voted: "UP",
    //   createdAt: '2023-10-04T14:38:29.845Z' as string,
    //   published: true,
    //   authorId: 1,
    //   email: 'mr.bichkhe@gmail.com',
    //   title: 'We are number one csdsfsdfsdfsdfdsfsdf sfdsfsdfsdf',
    //   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    // },
  ]);
  const [visible, loader] = useDisclosure(false);
  const fetchVideos = async (page: number, pageSize: number) => {
    loader.open();
    const res = await getVideos({
      page: page,
      pageSize: pageSize,
    });
    if (!isResponseError(res)) {
      setVideos(res.videos);
      setTotalPage(res.totalPage);
    }
    loader.close();
  };
  const handleChangePage = (value: number) => {
    setPage(value);
    fetchVideos(value, 3);
  };

  useEffect(() => {
    fetchVideos(1, 3);
  }, []);

  return (
    <>
      <Layout>
        <Box>
          <div>
            <LoadingOverlay
              visible={visible}
              zIndex={1000}
              overlayProps={{ radius: "sm", blur: 2 }}
            />
            {videos.length > 0 &&
              videos.map((item, _) => <VideoCard video={item} key={item.id} />)}
          </div>
          <Group justify="center" py="50px">
            {videos.length > 0 && (
              <Pagination
                total={totalPage}
                value={activePage}
                onChange={(value) => handleChangePage(value)}
              />
            )}
          </Group>
          {videos.length == 0 && (
            <Group justify="center" align="center">
              <Text>Not found any youtube videos</Text>
            </Group>
          )}
        </Box>
      </Layout>
    </>
  );
}
