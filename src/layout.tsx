import {
  AppShell,
  Box,
  Burger,
  Button,
  Container,
  Group,
  Menu,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "./container/header/Header";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./layout.module.css";
import { AUTH_TOKEN, isResponseError } from "./api/global/api";
import { logout } from "./api/auth";
import { notifications } from "@mantine/notifications";
import {
  IconBrandYoutube,
  IconCheck,
  IconLogin,
  IconRegistered,
  IconSettings,
  IconShare,
} from "@tabler/icons-react";
import { HeaderLogo } from "./components/Header/Header";
export function Layout(props: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        padding="sm"
        header={{ height: { base: 48, sm: 60 } }}
        navbar={{
          width: { sm: 0, lg: 0 },
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header>
          <Header opened={false} toggle={toggle} />
        </AppShell.Header>
        <AppShell.Navbar p="md" hiddenFrom="sm">
          <Menu shadow="md" width={200}>
            <Menu.Label>Authentication</Menu.Label>
            <Link
              style={{ textDecoration: "none" }}
              to={"/auth"}
              state={{ mode: "login" }}
            >
              <Menu.Item
                leftSection={
                  <IconLogin style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Login
              </Menu.Item>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={"/auth"}
              state={{ mode: "register" }}
            >
              <Menu.Item
                leftSection={
                  <IconRegistered style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Register
              </Menu.Item>
            </Link>
            <Menu.Label>Features</Menu.Label>
            <Link style={{ textDecoration: "none" }} to={"/youtubeboard"}>
              <Menu.Item
                leftSection={
                  <IconBrandYoutube
                    style={{ width: rem(14), height: rem(14) }}
                  />
                }
              >
                Youtube Board
              </Menu.Item>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/youtubesharing"}>
              <Menu.Item
                leftSection={
                  <IconShare style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Youtube Sharing
              </Menu.Item>
            </Link>
          </Menu>
        </AppShell.Navbar>

        <AppShell.Main className={classes.main}>
          <Container>{props.children}</Container>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
