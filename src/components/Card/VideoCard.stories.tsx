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
	"id": 7,
	"createdAt": "2023-10-04T15:23:09.398Z",
	"linkUrl": "https://www.youtube.com/embed/uexouAOMuHM?si=4P3XeZ7glgnbVQ7W",
	"updatedAt": "2023-10-05T13:43:06.467Z",
	"title": "Mua và bán bitcoin bằng các loại thẻ quà tặng",
	"content": "Mua và bán bitcoin bằng các loại thẻ quà tặng",
	"published": true,
	"viewCount": 0,
	"authorId": 1,
	"email": "mr.bichkhe@gmail.com",
	"votedUp": 0,
	"votedDown": 2
};
export const Default: Story = {
	render: () => <VideoCard video={video} />,
};
