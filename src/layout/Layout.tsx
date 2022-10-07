import { FC, ReactNode, useState } from 'react';
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core';

import { SideNav } from './SideNav';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint={1024}
      asideOffsetBreakpoint="sm"
      header={
        <Header height={70} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan={1024} styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>안녕하세요</Text>
          </div>
        </Header>
      }
      navbar={<SideNav opened={opened} />}
    >
      {children}
    </AppShell>
  );
};
export default Layout;
