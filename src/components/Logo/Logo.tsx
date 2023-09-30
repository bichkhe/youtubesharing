import { Flex, Text, useMantineTheme, Image, ThemeIcon } from '@mantine/core';
import { IconBrandYoutubeFilled } from '@tabler/icons-react';
interface Props {
	width?: string;
	height?: string;
}

export const Logo: React.FC<Props> = ({ width, height }) => {
	return (
		<Flex direction="row" align="center" gap={4} mt="10pt">
			<ThemeIcon>
				<IconBrandYoutubeFilled style={{ width: '70%', height: '70%' }} />
			</ThemeIcon>
			{/* <Image
				maw={80}
				mx="auto"
				radius="xs"
				src="/static/images/logo.png"
				alt="logo"
			/> */}
			<Text
				fw="bolder"
				size="xl"
				ml="10pt"
			>
				Youtube sharing
			</Text>
		</Flex>
	);
};
