import {FC, useCallback, useState} from 'react';
import {createStyles, Navbar} from '@mantine/core';

import {
    TbBellRinging,
    TbReceipt2,
    TbFingerprint,
    TbKey,
    TbDatabaseImport,
    Tb2Fa,
    TbSettings,
    TbLogout,
} from 'react-icons/tb';
import {IconContext} from 'react-icons';
import {Link, useNavigate} from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');
    return {
        header: {
            paddingBottom: theme.spacing.md,
            marginBottom: theme.spacing.md * 1.5,
            borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
        },

        footer: {
            paddingTop: theme.spacing.md,
            marginTop: theme.spacing.md,
            borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
        },

        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            textDecorationLine:"none",
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,

                [`& .${icon}`]: {
                    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                },
            },
        },

        linkIcon: {
            ref: icon,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.fn.variant({variant: 'light', color: theme.primaryColor}).background,
                color: theme.fn.variant({variant: 'light', color: theme.primaryColor}).color,
                [`& .${icon}`]: {
                    color: theme.fn.variant({variant: 'light', color: theme.primaryColor}).color,
                },
            },
        },
    };
});

const data = [
    {link: '/manage', label: 'Manage', icon: TbBellRinging},
    // {link: '', label: 'Billing', icon: TbReceipt2},
    // {link: '/manage', label: 'Security', icon: TbFingerprint},
    // {link: '/manage', label: 'SSH Keys', icon: TbKey},
    // {link: '/manage', label: 'Databases', icon: TbDatabaseImport},
    // {link: '/manage', label: 'Authentication', icon: Tb2Fa},
    // {link: '/manage', label: 'Other Settings', icon: TbSettings},
];

interface Props {
    opened: boolean;
}

export const SideNav: FC<Props> = ({opened}) => {
    const {classes, cx} = useStyles();
    const [active, setActive] = useState('Manage');

    const navigate = useNavigate();

    const links = data.map((item) => (
            <Link to={item.link} key={item.label}>
                <a
                    className={cx(classes.link, {[classes.linkActive]: item.label === active})}
                    href={item.link}
                    onClick={(event) => {
                        event.preventDefault();
                        setActive(item.label);
                    }}
                >
                    <IconContext.Provider value={{size: '20px', className: `${classes.linkIcon}`}}>
                        <item.icon/>
                    </IconContext.Provider>
                    <span>{item.label}</span>
                </a>
            </Link>
        ));

    return (
        <Navbar p="md" hiddenBreakpoint={1024} hidden={!opened} width={{sm: 200, lg: 300}}>
            <Navbar.Section grow>{links}</Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <div className={classes.link}>
                    <IconContext.Provider value={{size: '20px', className: `${classes.linkIcon}`}}>
                        <TbLogout/>
                    </IconContext.Provider>
                    <span>Logout</span>
                </div>
            </Navbar.Section>
        </Navbar>
    );
};