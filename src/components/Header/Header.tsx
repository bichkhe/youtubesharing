import {
  Title,
  Text,
  Anchor,
  Box,
  Container,
  ThemeIcon,
  Flex,
  TextInput,
  Button,
  Group,
} from "@mantine/core";
import classes from "./Header.module.css";
import { IconBrandYoutubeFilled, IconHome2 } from "@tabler/icons-react";
import { Logo } from "../../components/Logo/Logo";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export function HeaderLogo() {
  return (
    <>
      <Container
        // size="responsive"
        style={
          {
            // justifyContent: 'space-between',
            // display: 'flex',
            // alignItems: 'center',
            // marginTop: '10px'
          }
        }
      >
        <Logo />
      </Container>
    </>
  );
}
