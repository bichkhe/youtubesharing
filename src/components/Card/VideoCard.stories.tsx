import type { Meta, StoryObj } from '@storybook/react';
import { VideoCard } from './VideoCard';
import { rem } from '@mantine/core';

const meta: Meta<typeof VideoCard> = {
	title: 'Components/Logo',
	component: VideoCard,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof VideoCard>;

const video = {
	id: 4,
	url: 'https://www.youtube.com/embed/mzJ4vCjSt28',
	votedup: 2023,
	votedown: 102,
	voted: 1,
	shared_at: '2023-30-09',
	shared_by: 'mr.bichkhe@gmail.com',
	title: 'Sugar - Maroon 5'
};
export const Default: Story = {
	render: () => <VideoCard video={video} />,
};
