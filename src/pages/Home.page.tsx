
import { AppShell, Burger, Container, MantineTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Header } from "../container/header/Header";
import { VideoCard } from "../components/Card/VideoCard";
import { useState } from 'react';
import { Movie } from '@/model/movie';
export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  const styles = (theme: MantineTheme) => ({
  });
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: 1,
      url: 'https://www.youtube.com/embed/mzJ4vCjSt28',
      votedup: 0,
      votedown: 0,
      voted: 0,
      shared_at: '',
      shared_by: 'mr.bichkhe@gmail.com',
      title: 'We are number one csdsfsdfsdfsdfdsfsdf sfdsfsdfsdf',
      description: '',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/09R8_2nJtjg?si=Uzt8W4HpkPPFWFsq',
      votedup: 100,
      votedown: 10,
      voted: 0,
      shared_at: '',
      shared_by: 'mr.bichkhe@gmail.com',
      title: 'Sugar - Maroon 5'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/mzJ4vCjSt28',
      votedup: 0,
      votedown: 0,
      voted: 0,
      shared_at: '',
      shared_by: 'mr.bichkhe@gmail.com',
      title: 'Sugar - Maroon 5'
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/mzJ4vCjSt28',
      votedup: 0,
      votedown: 0,
      voted: 0,
      shared_at: '',
      shared_by: 'mr.bichkhe@gmail.com',
      title: 'Sugar - Maroon 5'
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/mzJ4vCjSt28',
      votedup: 0,
      votedown: 0,
      voted: 0,
      shared_at: '',
      shared_by: 'mr.bichkhe@gmail.com',
      title: 'Sugar - Maroon 5'
    }
  ])
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Header />
        </AppShell.Header>

        <Container>
          <AppShell.Main>
            {movies.map((item, _) => (
              <VideoCard video={item} />
            ))}
          </AppShell.Main>
        </Container>
      </AppShell>
    </>
  );
}
