
import { AppShell, Box, Burger, Button, Container, Group, } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Header } from "./container/header/Header";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classes from './layout.module.css';

export function Layout(props: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();


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
                        {props.children}
                    </Container>
                </AppShell.Main>
            </AppShell >

        </>
    );
}
