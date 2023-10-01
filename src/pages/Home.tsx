
import { AppShell, Box, Burger, Button, Container, Flex, Group, MantineTheme, ScrollArea, createTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Header } from "../container/header/Header";
import { VideoCard } from "../components/Card/VideoCard";
import { useState } from 'react';
import { Movie } from '@/model/movie';
import { Link } from "react-router-dom";
import classes from './Home.module.css';

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
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
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/09R8_2nJtjg?si=Uzt8W4HpkPPFWFsq',
      votedup: 100,
      votedown: 10,
      voted: 0,
      shared_at: '',
      shared_by: 'mr.bichkhe@gmail.com',
      title: 'Sugar - Maroon 5',
      description: 'Lorem Ipsum is',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/mzJ4vCjSt28',
      votedup: 0,
      votedown: 0,
      voted: 0,
      shared_at: '',
      shared_by: 'mr.bichkhe@gmail.com',
      title: 'Sugar - Maroon 5',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
        header={{ height: { base: 48, sm: 60 } }}
        navbar={{ width: { sm: 0, lg: 0 }, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      >
        <AppShell.Header>
          <Container className={classes.header}>
            <Burger style={{
            }} opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Box style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <Header />
            </Box>
            <Group
              visibleFrom="sm"
              style={{
              }}
            >
              <Button component={Link} to="/auth" variant="default">Register</Button>
              <Button component={Link} to="/auth?mode=login" variant="filled">Login</Button>
            </Group>
          </Container>
        </AppShell.Header>
        <AppShell.Navbar p="md" hiddenFrom="sm">Navbar</AppShell.Navbar>

        <AppShell.Main className={classes.main}>
          <Container>
            {movies.map((item, _) => (
              <VideoCard video={item} />
            ))}
          </Container>
        </AppShell.Main>
      </AppShell >

    </>
  );
}
