import { Layout } from "../layout";
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  Group,
  Input,
  TextInput,
  Textarea,
  Title,
  rem,
} from "@mantine/core";
import classes from "../components/Card/VideoCard.module.css";
import { useState } from "react";
import { validateYouTubeUrl } from "../util/link";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
  IconCheck,
  IconId,
  IconPencilPlus,
  IconShare3,
  IconX,
} from "@tabler/icons-react";
import { sharingYoutubeVideo } from "../api/video";
import { isResponseError } from "../api/global/api";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
const DEFAULT_LINK =
  "https://www.youtube.com/embed/BlWfTnDcZ6Q?si=iHV2H9_YGRjw_j5R";
export function YoutubeSharingPage() {
  const [opened, { toggle }] = useDisclosure(false);
  const [link, setLink] = useState(
    "https://www.youtube.com/embed/BlWfTnDcZ6Q?si=iHV2H9_YGRjw_j5R"
  );
  const [errorLink, setErrorLink] = useState("");
  const navigate = useNavigate();
  const handleReset = () => {
    setLink(DEFAULT_LINK);
  };
  const handleChangeLink = (event: any) => {
    if (event.currentTarget.value == "") {
      setErrorLink("");
      setLink("");
      form.reset();
      return;
    }
    const url = validateYouTubeUrl(event.currentTarget.value);
    if (url) {
      setLink(event.currentTarget.value);
    } else {
      setErrorLink("Invalid youtube link");
      setLink("");
    }
  };
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
    },

    validate: {
      title: (value: string) => (value.length > 0 ? null : "Invalid title"),
      description: (value: string) =>
        value.length > 0 ? null : "Invalid description",
    },
  });
  const handleSubmitSharing = async () => {
    if (!form.validate().hasErrors) {
      const res = await sharingYoutubeVideo({
        title: form.values?.title,
        content: form.values?.description,
        linkUrl: link,
      });
      if (!isResponseError(res)) {
        notifications.show({
          color: "green",
          title: "Sharing Successfully",
          message: "",
          autoClose: true,
          icon: <IconCheck />,
        });
        // navigate('/')
        form.reset();
      } else {
        notifications.show({
          color: "red",
          title: "Sharing Failed",
          message: res.error_message,
          autoClose: true,
          icon: <IconX />,
        });
      }
    }
  };
  return (
    <>
      <Layout>
        <Box>
          <Input.Wrapper label="Youtube Link">
            <form onSubmit={form.onSubmit((values) => handleSubmitSharing)}>
              <Flex
                justify="flex-start"
                gap="3px"
                align="start"
                className={classes.linkWrapper}
              >
                <TextInput
                  className={classes.videoLink}
                  withAsterisk
                  error={errorLink}
                  size="sm"
                  onChange={(event) => handleChangeLink(event)}
                  placeholder={link}
                />
                <Flex gap="3px">
                  <Button onClick={handleReset} size="sm" visibleFrom="sm">
                    Reset
                  </Button>
                </Flex>
              </Flex>
              <Box maw="100%" mx="auto">
                <Group justify="flex-start" my="20px">
                  <Badge
                    leftSection={<IconId size={15} />}
                    color="blue"
                    onClick={toggle}
                  >
                    Video Information
                  </Badge>
                </Group>
                <Collapse
                  in={!opened}
                  transitionDuration={500}
                  transitionTimingFunction="linear"
                >
                  <TextInput
                    withAsterisk
                    label="Video Title"
                    {...form.getInputProps("title")}
                  />
                  <Textarea
                    withAsterisk
                    label="Description"
                    {...form.getInputProps("description")}
                  />
                  <Group justify="flex-end" mt="md" gap="3px">
                    <Button onClick={handleReset} size="sm" hiddenFrom="sm">
                      Reset
                    </Button>
                    <Button
                      onClick={handleSubmitSharing}
                      leftSection={<IconShare3 size={15} />}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Group>
                </Collapse>
              </Box>
            </form>
            <Group justify="center" mt="20px">
              <Box className={classes.videoPreview}>
                {link != "" && (
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      width="560"
                      height="315"
                      src={link}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ border: 0 }}
                    ></iframe>
                  </AspectRatio>
                )}
              </Box>
            </Group>
          </Input.Wrapper>
        </Box>
      </Layout>
    </>
  );
}
