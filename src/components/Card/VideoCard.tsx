import { Flex, Text, Card, Group, Badge, Button, AspectRatio, Grid, ActionIcon, rem, Container, Box, Tooltip, Title } from '@mantine/core';
import { IconCheck, IconTemperature, IconThumbDown, IconThumbUp, IconX } from '@tabler/icons-react';
import classes from './VideoCard.module.css';
import { Video } from '../../model/video';
import { voteYoutubeVideo } from '../../api/video';
import { isResponseError } from '../../api/global/api';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
interface Props {
	video: Video;
};
export const VideoCard: React.FC<Props> = ({ video }) => {
	const [video_, setVideo] = useState<Video>(video);
	const handleVoteUp = async () => {
		const res = await voteYoutubeVideo({
			id: video.id,
			vote: "UP"
		})
		if (!isResponseError(res)) {
			notifications.show({
				color: 'green',
				title: 'You has voted up successfully',
				message: '',
				autoClose: true,
				icon: <IconCheck />,
			})
			let videoTmp = res as unknown as Video;
			videoTmp.voted = "UP"
			setVideo(videoTmp)
		} else {
			notifications.show({
				color: 'red',
				title: 'Voted Failed',
				message: res.error_message,
				autoClose: true,
				icon: <IconX />,
			})
		}

	}
	const handleVoteDown = async () => {
		const res = await voteYoutubeVideo({
			id: video.id,
			vote: "DOWN"
		})
		if (!isResponseError(res)) {
			notifications.show({
				color: 'green',
				title: 'You has voted down successfully',
				message: '',
				autoClose: true,
				icon: <IconCheck />,
			})
			let videoTmp = res as unknown as Video;
			videoTmp.voted = "DOWN"
			setVideo(videoTmp)
		} else {
			notifications.show({
				color: 'red',
				title: 'Voted Failed',
				message: res.error_message,
				autoClose: true,
				icon: <IconX />,
			})
		}
	}
	return (
		<>
			<Flex className={classes.wrapper} mt="10px">
				<Box className={classes.video}>
					<iframe
						src={video_.linkUrl}
						title="YouTube video player"
						style={{ border: 0 }}
						width="100%"
						height="280px"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</Box>
				<Box className={classes.videoInfo}>
					<Card h="280px" shadow='md' className={classes.videoInfoCard} >
						<Group justify="space-between" className={classes.titleWrapper}>
							<Tooltip label={video_.title}>
								<Text c="red" size="lg" fw={800}
									fz="1.5rem"
									className={classes.title}>
									{video_.title}
								</Text>
							</Tooltip>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								gap: '5px'
							}}>
								{video_.voted && <Text fw={400} fz={14}>You voted</Text>}
								{video_.voted && video_.voted == "UP" && <ActionIcon
									p="xs"
									size="xl"
									aria-label="Gradient action icon"
								>

									<IconThumbUp />
								</ActionIcon>
								}
								{video_.voted && video_.voted == "DOWN" && <ActionIcon
									p="xs"
									size="xl"
									ml="2px"
								>
									<IconThumbDown />
								</ActionIcon>
								}
							</div>
						</Group>
						<Group justify="space-between" mt="sm">
							<Text fw={500} fz="0.8rem">Shared by: {video_.email}</Text>
						</Group>
						<Group justify="left" mt="md" gap='3px'>
							<ActionIcon
								variant="gradient"
								p="xs"
								size="xxl"
								aria-label="vote-up-btn"
								gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
								onClick={handleVoteUp}
							>
								{video_.votedUp}
								<IconThumbUp />
							</ActionIcon>
							<ActionIcon
								variant="gradient"
								p="xs"
								size="xxl"
								aria-label="vote-down-btn"
								gradient={{ from: 'red', to: 'yellow', deg: 90 }}
								onClick={handleVoteDown}
							>
								{video_.votedDown}
								<IconThumbDown />
							</ActionIcon>
						</Group>

						<Box>
							<Text size="h6" fw="500px" fz="12px">Description:</Text>
							<Text size="sm" c="dimmed" lineClamp={4} inline my="10px">
								{video_.content}
							</Text>
						</Box>
					</Card>
				</Box>
			</Flex >
		</>
	);
};