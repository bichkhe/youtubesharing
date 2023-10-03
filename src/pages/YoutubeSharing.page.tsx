import { Layout } from "../layout";
import { AspectRatio, Box, Button, Flex, Group, Input } from "@mantine/core";
import classes from '../components/Card/VideoCard.module.css';
import { useState } from "react";
import { validateYouTubeUrl } from "../util/link";
const DEFAULT_LINK = 'https://www.youtube.com/embed/BlWfTnDcZ6Q?si=iHV2H9_YGRjw_j5R'
export function YoutubeSharingPage() {
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
                                <Button onClick={handleReset}>Reset</Button>
                                <Button>Share</Button>
                            </Flex>
                        </Flex>
                        <Group justify="center" mt="20px">
                            <Box className={classes.videoPreview}>
                                {link != '' && <AspectRatio ratio={16 / 9}>
                                    {/* <iframe
                                        src={link}
                                        title="YouTube video player"
                                        style={{ border: 0 }}
                                        width="100%"
                                        height="100%"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    /> */}
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
