import {useState} from 'react';
import reactLogo from './assets/react.svg';
import {
    AppShell,
    Navbar,
    Header,
    Text,
    MediaQuery,
    Burger,
    ActionIcon,
    Group,
    createStyles,
    useMantineTheme, useMantineColorScheme
} from '@mantine/core';
import {MantineProvider} from '@mantine/core';

import {MemoryRouter, NavLink, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import Settings from "./Settings";


const App = () => {
    const [count, setCount] = useState(0)
    const views = [{
        path: '/',
        name: 'Home',
        exact: true,
        component: Home
    }, {
        path: 'settings',
        name: 'settings',
        component: Settings
    }
    ]

    const [opened, setOpened] = useState(false);
    const defaultColorSchema = 'dark';
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    // const toggleColorSchema = (value: string) => {
    //     const newColorSchema = value || (colorScheme === 'dark' ? 'light' : 'dark');
    //     setColorSchema(newColorSchema);
    // }

    const useStyles = createStyles((theme) => ({
        navLink: {
            display: 'block',
            width: '100%',
            padding: theme.spacing.xs,
            borderRadius: theme.radius.md,
            color: colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            textDecoration: 'none',

            "&:hover": {
                backgroundColor: colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
            }
        },
        navLinkActive: {
            backgroundColor: colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        }
    }))
    const {classes} = useStyles();


    return (
        // @ts-ignore
        <MantineProvider theme={{colorScheme: colorScheme, fontFamily: "Open Sans, sans serif"}} withGlobalStyles>
            <MemoryRouter>
                <AppShell padding="md" navbarOffsetBreakpoint='sm' fixed navbar={
                    <Navbar width={{sm: 200}} hidden={!opened} hiddenBreakpoint="sm">
                        {
                            views.map((view, index) => (
                                <NavLink to={view.path} key={index} onClick={() => setOpened(false)}
                                         className={({isActive}) => classes.navLink + ' ' + (isActive ? classes.navLinkActive : '')}>
                                    <Group><Text>{view.name}</Text></Group>
                                </NavLink>
                            ))
                        }
                    </Navbar>
                } header={
                    <Header height={70}>
                        <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                            <MediaQuery largerThan='sm' styles={{display: 'none'}}>
                                <Burger
                                    opened={opened}
                                    size = 'sm'
                                    color = {useMantineTheme().colors.gray[6]}
                                    mr='xl'
                                    onClick={() => setOpened((o) => !o)}
                                />
                            </MediaQuery>
                            <Text>Animal Header</Text>
                            <div style={{marginLeft: 'auto'}}>
                                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>

                                </ActionIcon>
                            </div>
                        </div>
                    </Header>
                }>

                </AppShell>
            </MemoryRouter>
        </MantineProvider>
    )
}

export default App
