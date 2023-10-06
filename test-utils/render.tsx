import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import theme from '../src/theme';
import { BrowserRouter } from 'react-router-dom';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </MantineProvider>
    ),
  });
}
