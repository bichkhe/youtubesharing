
import { AppShell, Burger, MantineTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Header } from "../components/header/Header";
export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  const styles = (theme: MantineTheme) => ({
  });
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
