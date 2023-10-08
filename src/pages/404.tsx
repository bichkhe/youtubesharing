import { Box, Stack, Text } from "@mantine/core";
import { Layout } from "../layout";
import { IconError404 } from "@tabler/icons-react";

export function NotFoundPage() {
  return (
    <>
      <Layout>
        <Stack justify="center" align="center">
          <IconError404 size={400} />
          <Text size="xl" fw={700}>
            OOPS! NOT FOUND PAGE
          </Text>
        </Stack>
      </Layout>
    </>
  );
}
