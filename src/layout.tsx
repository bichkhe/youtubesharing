
import { AppShell, Box, Burger, Button, Container, Group, Menu, rem, } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Header } from "./container/header/Header";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import classes from './layout.module.css';
import { AUTH_TOKEN, isResponseError } from "./api/global/api";
import { logout } from "./api/auth";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconSettings } from "@tabler/icons-react";

export function Layout(props: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();
    const isLoggedIn = localStorage.getItem(AUTH_TOKEN) != null
    const [refesh, setRefresh] = useState(false)
    const navigate = useNavigate()
    const handleLogout = async () => {
        const res = await logout()
        localStorage.clear()
        if (!isResponseError(res)) {
            notifications.show({
                color: 'green',
                title: 'Logout Successfully',
                message: '',
                autoClose: true,
                icon: <IconCheck />,
            })
            navigate('/')
            // setRefresh(!refesh)
        }
    }
    return (
        <>
            <AppShell
                padding="sm"
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
                            {!isLoggedIn && <>
                                <Link to={"/auth"} state={{ mode: 'register' }}>
                                    <Button variant="default">Register</Button>
                                </Link>
                                <Link to={"/auth"} state={{ mode: 'login' }}>
                                    <Button variant="filled">Login</Button>
                                </Link>
                            </>}
                            {isLoggedIn && <> <Button onClick={handleLogout} variant="default">Logout</Button>
                                <Button component={Link} to="/youtubesharing" variant="filled">Sharing</Button>
                            </>}

                        </Group>
                    </Container>
                </AppShell.Header>
                <AppShell.Navbar p="md" hiddenFrom="sm">
                    <Menu shadow="md" width={200}>
                        <Menu.Label>Authentication</Menu.Label>
                        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                            Login
                        </Menu.Item>
                        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                            Register
                        </Menu.Item>
                        <Menu.Label>Features</Menu.Label>
                        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                            Youtube Sharing
                        </Menu.Item>
                        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                            Youtube Board
                        </Menu.Item>
                    </Menu>
                </AppShell.Navbar>

                <AppShell.Main className={classes.main}>
                    <Container>
                        {props.children}
                    </Container>
                </AppShell.Main>
            </AppShell >
        </>
    );
}
