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
  Burger,
} from "@mantine/core";
import classes from "./Header.module.css";
import {
  IconBrandYoutubeFilled,
  IconCheck,
  IconHome2,
} from "@tabler/icons-react";
import { Logo } from "../../components/Logo/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AUTH_TOKEN, isResponseError } from "../../api/global/api";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import { logout } from "../../api/auth";
import React, { useState } from "react";
import { HeaderLogo } from "../../components/Header/Header";
import { isTokenExpired } from "../../util/token";

export interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  // const [opened, { toggle }] = useDisclosure();
  const isLoggedIn = localStorage.getItem(AUTH_TOKEN) != null;
  const [refesh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await logout();
    localStorage.clear();
    if (!isResponseError(res)) {
      notifications.show({
        color: "green",
        title: "Logout Successfully",
        message: "",
        autoClose: true,
        icon: <IconCheck />,
      });
      navigate("/");
      navigate(0);
      // setRefresh(!refesh)
    }
  };
  return (
    <>
      <Container className={classes.header}>
        <Burger
          style={{}}
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Box
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <HeaderLogo />
        </Box>
        <Group visibleFrom="sm" style={{}}>
          {!isLoggedIn && (
            <>
              <Link to={"/auth"} state={{ mode: "register" }}>
                <Button variant="default">Register</Button>
              </Link>
              <Link data-testid="login" to={"/auth"} state={{ mode: "login" }}>
                <Button variant="filled">Login</Button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              {" "}
              <Button onClick={handleLogout} variant="default">
                Logout
              </Button>
              <Button component={Link} to="/youtubesharing" variant="filled">
                Sharing
              </Button>
            </>
          )}
        </Group>
      </Container>
    </>
  );
}
