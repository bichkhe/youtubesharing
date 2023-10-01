import { Flex, Text, Card, Group, Badge, Button, AspectRatio, Grid, ActionIcon, rem, Container, Box, Tooltip } from '@mantine/core';
import { IconThumbDown, IconThumbUp } from '@tabler/icons-react';
import classes from './VideoCard.module.css';
import { Movie } from '@/model/movie';
interface Props {
	video: Movie;
};
export const VideoCard: React.FC<Props> = ({ video }) => {
	return (
		<>
			<Flex direction="row" columnGap="10px" justify="center" align="end" className={classes.wrapper} mt="10px">
				<Box>
					<iframe
						src={video.url}
						title="YouTube video player"
						style={{ border: 0 }}
						width="360px"
						height="270px"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</Box>
				<Box>
					<Card padding="sm">
						<Group justify="space-between" className={classes.titleWrapper}>
							<Tooltip label={video.title}>
								<Text c="red" size="lg" fw={800}
									fz="1.5rem"
									className={classes.title}>
									{video.title}
								</Text>
							</Tooltip>
							<div style={{
								display: 'flex'
							}}>
								<ActionIcon
									p="xs"
									size="xl"
									aria-label="Gradient action icon"
								>
									<IconThumbUp />
								</ActionIcon>
								<ActionIcon
									p="xs"
									size="xl"
									ml="2px"
								>
									<IconThumbDown />
								</ActionIcon>
							</div>

						</Group>
						<Group justify="space-between" mt="sm">
							<Text fw={500} fz="0.8rem">Shared by: {video.shared_by}</Text>
						</Group>
						<Group justify="left" mt="md">
							<ActionIcon
								variant="gradient"
								p="xs"
								size="xxl"
								aria-label="Gradient action icon"
								gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
							>
								{video.votedup}
								<IconThumbUp />
							</ActionIcon>
							<ActionIcon
								variant="gradient"
								p="xs"
								size="xxl"
								aria-label="Gradient action icon"
								gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
							>
								{video.votedown}
								<IconThumbDown />
							</ActionIcon>
						</Group>

						<Text size="sm" c="dimmed" lineClamp={4} inline>
							<h6>Description:</h6>
							<Text>
								{' '}
								{video.description}
							</Text>
						</Text>
					</Card>
				</Box>
			</Flex >
		</>
	);
};