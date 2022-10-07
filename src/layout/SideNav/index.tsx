import { FC } from 'react';
import { createStyles, Navbar } from '@mantine/core';

import { TbBellRinging, TbLogout, TbReceipt2 } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      textDecorationLine: 'none',
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({
          variant: 'light',
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: '/manage', label: '유기동물 현황', icon: TbBellRinging },
  { link: '/register', label: '신규등록', icon: TbReceipt2 },
];

interface Props {
  opened: boolean;
}

export const SideNav: FC<Props> = ({ opened }) => {
  const { classes } = useStyles();

  const links = data.map((item) => (
    <NavLink
      to={item.link}
      key={item.label}
      className={({ isActive }) =>
        classes.link + ' ' + (isActive ? classes.linkActive : '')
      }
    >
      <IconContext.Provider
        value={{ size: '20px', className: `${classes.linkIcon}` }}
      >
        <item.icon />
      </IconContext.Provider>
      <span style={{ fontSize: '18px' }}>{item.label}</span>
    </NavLink>
  ));

  return (
    <Navbar
      p="md"
      hiddenBreakpoint={1024}
      hidden={!opened}
      width={{ sm: 250, lg: 300 }}
    >
      <Navbar.Section grow>{links}</Navbar.Section>
      <Navbar.Section className={classes.footer}>
        <div className={classes.link}>
          <IconContext.Provider
            value={{ size: '20px', className: `${classes.linkIcon}` }}
          >
            <TbLogout />
          </IconContext.Provider>
          <span>Logout</span>
        </div>
      </Navbar.Section>
    </Navbar>
  );
};
