
import { Box, Text } from "@mantine/core";
import { Layout } from "../layout";
import { IconError404 } from "@tabler/icons-react";

export function NotFoundPage() {
  return (
    <>
      <Layout>
        <Box>
          <IconError404 size={100} />
          <Text>oops! Not found page</Text>
        </Box>
      </Layout>
    </>
  );
}
