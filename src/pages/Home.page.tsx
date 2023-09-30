
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Header } from "../components/header/Header";
export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Header></Header>
        </AppShell.Header>


        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </>
  );
}
