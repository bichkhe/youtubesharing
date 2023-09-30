import { Title, Text, Anchor, Box } from '@mantine/core';
import classes from './Header.module.css';

export function Header() {
  return (
    <>
      <Box className="flex justify-space-between">
        <div>logo</div>
        <div>auth form</div>
      </Box>
    </>
  );
}
