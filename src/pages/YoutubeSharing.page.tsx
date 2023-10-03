import { Layout } from "../layout";
import { AspectRatio, Badge, Box, Button, Checkbox, Collapse, Flex, Group, Input, TextInput, Textarea, Title, rem } from "@mantine/core";
import classes from '../components/Card/VideoCard.module.css';
import { useState } from "react";
import { validateYouTubeUrl } from "../util/link";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconId, IconPencilPlus, IconShare3 } from "@tabler/icons-react";
const DEFAULT_LINK = 'https://www.youtube.com/embed/BlWfTnDcZ6Q?si=iHV2H9_YGRjw_j5R'
export function YoutubeSharingPage() {
    const [opened, { toggle }] = useDisclosure(false);
    const [link, setLink] = useState('https://www.youtube.com/embed/BlWfTnDcZ6Q?si=iHV2H9_YGRjw_j5R');
    const [errorLink, setErrorLink] = useState('')
    const handleReset = () => {
        setLink(DEFAULT_LINK)
    }
    const handleChangeLink = (event: any) => {
        if (event.currentTarget.value == '') {
            setErrorLink('')
            setLink('')
            return
        }
        const url = validateYouTubeUrl(event.currentTarget.value)
        if (url) {
            setLink(event.currentTarget.value)
        } else {
            setErrorLink("Invalid youtube link")
            setLink('')
        }
    }
    const form = useForm({
        initialValues: {
            title: '',
            description: '',
        },

        validate: {},
    });
    return (
        <>
            <Layout>
                <Box>
                    <Input.Wrapper label="Youtube Link">
                        <Flex justify="flex-start" gap="3px" align="center" className={classes.linkWrapper}>
                            <Input className={classes.videoLink}
                                error={errorLink}
                                size="sm"
                                onChange={(event) => handleChangeLink(event)}
                                placeholder={link}
                            />
                            <Flex gap="3px">
                                <Button onClick={handleReset} size="sm" visibleFrom="sm">Reset</Button>
                            </Flex>
                        </Flex>
                        <Box maw="100%" mx="auto">
                            <Group justify="flex-start" my="20px">
                                <Badge leftSection={<IconId size={15} />} color="blue" onClick={toggle}>Video Information</Badge>
                            </Group>
                            <Collapse in={!opened} transitionDuration={500} transitionTimingFunction="linear">
                                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                                    <TextInput
                                        withAsterisk
                                        label="Video Title"
                                        {...form.getInputProps('title')}
                                    />
                                    <Textarea
                                        withAsterisk
                                        label="Description"
                                        {...form.getInputProps('description')}
                                    />
                                    <Group justify="flex-end" mt="md" gap="3px">
                                        <Button onClick={handleReset} size="sm" hiddenFrom="sm">Reset</Button>
                                        <Button leftSection={<IconShare3 size={15} />} type="submit">Submit</Button>
                                    </Group>
                                </form>
                            </Collapse>
                        </Box>
                        <Group justify="center" mt="20px">
                            <Box className={classes.videoPreview}>
                                {link != '' && <AspectRatio ratio={16 / 9}>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={link}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        style={{ border: 0 }}
                                    >

                                    </iframe>
                                </AspectRatio>
                                }
                            </Box>
                        </Group>

                    </Input.Wrapper>
                </Box>
            </Layout>
        </>
    );
}
