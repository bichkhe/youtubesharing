import {
  Flex,
  Text,
  useMantineTheme,
  Image,
  ThemeIcon,
  em,
} from "@mantine/core";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import classes from "./Logo.module.css";
interface Props {
  width?: string;
  height?: string;
}
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
const SIZES: string[] = ["md", "sm"];

export const Logo: React.FC<Props> = ({ width, height }) => {
  const isMobile = useMediaQuery(`(max-width: ${em(720)})`);
  return (
    <Flex direction="row" align="center" visibleFrom="sm">
      <Link to={"/"} data-testid="link-home">
        <ThemeIcon size={isMobile ? SIZES[1] : SIZES[0]}>
          <IconBrandYoutubeFilled style={{ width: "70%", height: "70%" }} />
        </ThemeIcon>
      </Link>
      <Text fw="bolder" size="xl" ml="10pt" className={classes.title}>
        Youtube Sharing
      </Text>
    </Flex>
  );
};
