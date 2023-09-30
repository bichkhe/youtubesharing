import { Title, Text, Anchor, Box, Container, ThemeIcon, Flex, TextInput, Button } from '@mantine/core';
import classes from './Header.module.css';
import { IconBrandYoutubeFilled, IconHome2 } from '@tabler/icons-react';
import { Logo } from '../../components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
export function Header() {
  return (
    <>
      <Container className={classes.wrapper}>
        <Logo />
        <Flex justify="center" align="center">
          <Button component={Link} to="/auth" variant="default">Register</Button>
          <Button component={Link} to="/auth?mode=login" variant="filled">Login</Button>
        </Flex >
      </Container >
    </>
  );
}
