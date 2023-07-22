import { Navbar, Group, Code, ScrollArea, createStyles, rem, Box } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './LinksGroup';
import { ImCross } from 'react-icons/im';

const mockdata = [
    { label: 'Dashboard', icon: IconGauge,  initiallyOpened: true,
      links: [
        { label: 'Default', link: '/' },
        { label: 'Ecommerce', link: '/' },
        { label: 'Online Course', link: '/' },
        { label: 'Crypto', link: '/' },
        { label: 'Social', link: '/' },
        { label: 'NFT', link: '/' },
        { label: 'School Management', link: '/' },
        { label: 'POS', link: '/' },
      ],},
    {
      label: 'Widgets',
      icon: IconNotes,
      initiallyOpened: true,
      links: [
        { label: 'General', link: '/' },
        { label: 'Chart', link: '/' },
        
      ],
     
    },
  {
    label: 'Page Layout',
    icon: IconCalendarStats,
    links: [
      { label: 'Boxed', link: '/' },
      { label: 'RTL', link: '/' },
      { label: 'Dark Layout', link: '/' },
    ],
  },
  { label: 'Project', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested({show,addshow}) {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);
  console.log(classes.navbar);
  return (
    show&&
    <Box pos={'sticky'} style={{zIndex:'10000'}}   top={70}>
    <Navbar height={800} mah={window.innerHeight} pos={'absolute'} top={-70} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
        {classes.navbar!=='mantine-kx242s'?<img onClick={()=>{addshow()}} src='https://admin.pixelstrap.com/cuba/assets/images/logo/logo_dark.png'/>:<img src='https://admin.pixelstrap.com/cuba/assets/images/logo/logo.png'/>}
        <ImCross onClick={()=>{addshow()}}/>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
    </Box>
  );
}