import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Menu,
  Avatar,
  MantineProvider,
  useMantineColorScheme,
  ActionIcon,
  Notification,
  Code,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconFlag,
  IconBookmark,
  IconBookmarkPlus,
  IconForms,
  IconServer,
  IconSun,
  IconMoonStars,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconPlayerPause,
  IconTrash,
} from "@tabler/icons-react";
import {
  PiCarProfileLight,
  PiMinus,
  PiPlus,
  PiShootingStarLight,
} from "react-icons/pi";
import { LiaWpforms } from "react-icons/lia";
import { useState } from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import { GrDown, GrNotification } from "react-icons/gr";
import { NavbarNested } from "./Navbar";
import Main from "./Main";
const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function Navbar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [show,setshow]=useState(true)
  const { classess } = useStyles();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const [lang, setlang] = useState({
    flag: "flag-icon flag-icon-us",
    lang: "English",
  });
  const [DropDownLang, setDropDownLang] = useState(false);
  const langarr = ["English", "Hindi", "EU", "PT", "ES"];

  function dropDown() {
    setDropDownLang(!DropDownLang);
  }
 function addshow(){
  setshow(!show)
 }
  return (

    <Box  display={'flex'}>
      <Box>
      <NavbarNested show={show} addshow={addshow} />
      </Box>
      <Box height={60} h={'70px'} w={'100%'} px="md">
        <Group id="Navbar" position="apart" sx={{ height: "100%" }}>
          
          {!show?<Box>
        {classes.dropdownFooter!=="mantine-1959vk6"?<img onClick={()=>{addshow()}} onMouseEnter={()=>{setshow(true)}} onMouseLeave={()=>{setshow(false)}} src='https://admin.pixelstrap.com/cuba/assets/images/logo/logo.png'/>:<img onClick={()=>{addshow()}} src='https://admin.pixelstrap.com/cuba/assets/images/logo/logo_dark.png'/>}
          </Box>:<Box></Box>}
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}>
            <Box
              class="lang"
              className={classes.link}
              onClick={() => {
                setDropDownLang(!DropDownLang);
              }}>
              <i class={lang.flag}></i>
              <span class="lang-txt">{lang.lang}</span>
            </Box>
            {DropDownLang && (
              <Box
                style={{
                  position: "absolute",
                  top: "60px",
                  alignItems: "start",
                  display: "flex",
                  flexDirection: "column",
                }}
                class="more_lang">
                <Box
                  className={classes.link}
                  style={{
                    width: "135px",
                    display: "flex",
                    alignItems: "start",
                  }}
                  onClick={(e) => {
                    setlang({
                      flag: "flag-icon flag-icon-us",
                      lang: "English",
                    });
                    setDropDownLang(!DropDownLang);
                  }}
                  class="lang"
                  data-value="en">
                  <i class="flag-icon flag-icon-us"></i>
                  <span class="lang-txt">
                    English<span> (US)</span>
                  </span>
                </Box>
                <Box
                  className={classes.link}
                  style={{
                    width: "135px",
                    display: "flex",
                    alignItems: "start",
                  }}
                  onClick={(e) => {
                    setlang({
                      flag: "flag-icon flag-icon-de",
                      lang: "Deutsch",
                    });
                    setDropDownLang(!DropDownLang);
                  }}
                  class="lang"
                  data-value="de">
                  <i class="flag-icon flag-icon-de"></i>
                  <span class="lang-txt">Deutsch</span>
                </Box>
                <Box
                  className={classes.link}
                  style={{
                    width: "135px",
                    display: "flex",
                    alignItems: "start",
                  }}
                  onClick={(e) => {
                    setlang({
                      flag: "flag-icon flag-icon-es",
                      lang: "Español",
                    });
                    setDropDownLang(!DropDownLang);
                  }}
                  class="lang"
                  data-value="es">
                  <i class="flag-icon flag-icon-es"></i>
                  <span class="lang-txt">Español</span>
                </Box>
                <Box
                  className={classes.link}
                  style={{
                    width: "135px",
                    display: "flex",
                    alignItems: "start",
                  }}
                  onClick={(e) => {
                    setlang({
                      flag: "flag-icon flag-icon-fr",
                      lang: "Français",
                    });
                    setDropDownLang(!DropDownLang);
                  }}
                  class="lang"
                  data-value="fr">
                  <i class="flag-icon flag-icon-fr"></i>
                  <span class="lang-txt">Français</span>
                </Box>
                <Box
                  className={classes.link}
                  style={{
                    width: "135px",
                    display: "flex",
                    alignItems: "start",
                  }}
                  onClick={(e) => {
                    setlang({
                      flag: "flag-icon flag-icon-pt",
                      lang: "Português",
                    });
                    setDropDownLang(!DropDownLang);
                  }}
                  class="lang"
                  data-value="pt">
                  <i class="flag-icon flag-icon-pt"></i>
                  <span class="lang-txt">
                    Português<span> (BR)</span>
                  </span>
                </Box>
                <Box
                  className={classes.link}
                  style={{
                    width: "135px",
                    display: "flex",
                    alignItems: "start",
                  }}
                  onClick={(e) => {
                    setlang({
                      flag: "flag-icon flag-icon-cn",
                      lang: "简体中文",
                    });
                    setDropDownLang(!DropDownLang);
                  }}
                  class="lang"
                  data-value="cn">
                  <i class="flag-icon flag-icon-cn"></i>
                  <span class="lang-txt">简体中文</span>
                </Box>
                <Box
                  className={classes.link}
                  style={{
                    width: "135px",
                    display: "flex",
                    alignItems: "start",
                  }}
                  onClick={(e) => {
                    setlang({ flag: "flag-icon flag-icon-ae", lang: "لعربية" });
                    setDropDownLang(!DropDownLang);
                  }}
                  class="lang"
                  data-value="ae">
                  <i class="flag-icon flag-icon-ae"></i>
                  <span class="lang-txt">
                    لعربية <span> (ae)</span>
                  </span>
                </Box>
              </Box>
            )}
            <HoverCard
              width={300}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      <PiShootingStarLight
                        style={{ transform: "rotate(45deg)" }}
                        size={"40px"}
                      />
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                style={{ width: "300px" }}
                sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500} m={"auto"}>
                    BookMark
                  </Text>
                </Group>
                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />
                <br></br>
                <SimpleGrid style={{ cursor: "pointer" }} cols={3} spacing={0}>
                  <LiaWpforms
                    size={"50px"}
                    radius={"100%"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "auto",
                      backgroundColor: "rgba(248, 249, 250, 1)",
                      padding: "10px",
                      borderRadius: "100%",
                    }}
                  />

                  <Avatar
                    size={"60px"}
                    radius={"100%"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "auto",
                      borderRadius: "100%",
                    }}
                  />
                  <IconServer
                    size={"50px"}
                    radius={"100%"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "auto",
                      backgroundColor: "rgba(248, 249, 250, 1)",
                      padding: "10px",
                      borderRadius: "100%",
                    }}
                  />
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}>
                    Forms
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}>
                    Profile
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}>
                    Tables
                  </Box>
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <Button m={"auto"} variant="default">
                      Add New Bookmark
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Group position="center" my="xl">
              <ActionIcon
                onClick={() => toggleColorScheme()}
                size="lg"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.yellow[4]
                      : theme.colors.blue[6],
                })}>
                {colorScheme === "dark" ? (
                  <IconSun size="1.2rem" />
                ) : (
                  <IconMoonStars size="1.2rem" />
                )}
              </ActionIcon>
            </Group>
            <HoverCard
              width={300}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal>
              <HoverCard.Target>
                <a
                  style={{ position: "relative" }}
                  href="#"
                  className={classes.link}>
                  <BsMinecartLoaded size={"25px"} />
                  <Text
                    pos={"absolute"}
                    fs={"14px"}
                    left={"40px"}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      width: "20px",
                      borderRadius: "100%",
                    }}
                    top={"10px"}>
                    3
                  </Text>
                </a>
              </HoverCard.Target>
              <HoverCard.Dropdown
                style={{ width: "300px" }}
                sx={{ overflow: "hidden" }}>
                <Box style={{ display: "flex" }}>
                  <Box>
                    <img
                      style={{ height: "70px" }}
                      src="https://admin.pixelstrap.com/cuba/assets/images/other-images/cart-img.jpg"
                    />
                  </Box>

                  <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Text>Furniture Chair for Home</Text>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      <PiMinus
                        style={{
                          borderRadius: "100%",
                          backgroundColor: "rgba(248, 249, 250, 1)",
                        }}
                        size={"20px"}
                      />
                      1<PiPlus size={"20px"} />
                    </Box>
                    <Text>$500</Text>
                  </Box>
                </Box>
                <Box style={{ display: "flex" }}>
                  <Box>
                    <img
                      style={{ height: "70px" }}
                      src="https://admin.pixelstrap.com/cuba/assets/images/other-images/cart-img.jpg"
                    />
                  </Box>

                  <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Text>Furniture Chair for Home</Text>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      <PiMinus
                        style={{
                          borderRadius: "100%",
                          backgroundColor: "rgba(248, 249, 250, 1)",
                        }}
                        size={"20px"}
                      />
                      1<PiPlus size={"20px"} />
                    </Box>
                    <Text>$500</Text>
                  </Box>
                </Box>
                <Box style={{ display: "flex" }}>
                  <Box>
                    <img
                      style={{ height: "70px" }}
                      src="https://admin.pixelstrap.com/cuba/assets/images/other-images/cart-img.jpg"
                    />
                  </Box>

                  <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Text>Furniture Chair for Home</Text>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      <PiMinus
                        style={{
                          borderRadius: "100%",
                          backgroundColor: "rgba(248, 249, 250, 1)",
                        }}
                        size={"20px"}
                      />
                      1<PiPlus size={"20px"} />
                    </Box>
                    <Text>$500</Text>
                  </Box>
                </Box>
                <Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <Text>Order Total :</Text>
                    <Text>$1500</Text>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "space-around",
                      margin: "auto",
                    }}>
                    <a style={{ fontWeight: "bold", margin: "20px" }} href="#">
                      GO TO YOUR CART
                    </a>
                  </Box>
                  <Button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "space-around",
                      margin: "auto",
                    }}>
                    Checkout
                  </Button>
                </Box>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={300}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal>
              <HoverCard.Target>
                <a
                  style={{ position: "relative" }}
                  href="#"
                  className={classes.link}>
                  <GrNotification
                    style={{ animation: "moveLeftRight 2s infinite" ,position:'relative',top:'0'}}
                    size={"25px"}
                  />
                  <Text
                    pos={"absolute"}
                    fs={"14px"}
                    left={"40px"}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      width: "20px",
                      borderRadius: "100%",
                    }}
                    top={"10px"}>
                    3
                  </Text>
                </a>
              </HoverCard.Target>
              <HoverCard.Dropdown
                style={{ width: "300px" }}
                sx={{ overflow: "hidden" }}>
                <Notification title="Delivery processing"> <Text bg={'red'} c={'white'}>10 min</Text></Notification>
                <Notification title="Order Complete"> <Text bg={'Green'} c={'white'}>50 min</Text> </Notification>
                <Notification title="Tickets Generated"> <Text bg={'Yellow'} c={'white'}>1 hours</Text> </Notification>
                <Notification title="Delivery Complete"> <Text bg={'green'}c={'white'}>50 sec</Text> </Notification>
                <Box style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <a href="#" >CHECK ALL</a>
                </Box>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={200}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal>
              <HoverCard.Target>
                <a
                  style={{ position: "relative" }}
                  href="#"
                  className={classes.link}>
                  <img src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/profile.png"
                    style={{position:'relative',top:'0'}}
                    size={"25px"}
                  />
                  <Box> Nagendra <GrDown/></Box>
                </a>
              </HoverCard.Target>
              <HoverCard.Dropdown
                style={{ width: "300px" }}
                sx={{ overflow: "hidden" }}>
                <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            withinPortal
          >
           
            <Box>
              <Menu.Item
                icon={<IconHeart size="0.9rem" stroke={1.5} color={theme.colors.red[6]} />}
              >
                Liked posts
              </Menu.Item>
              <Menu.Item
                icon={<IconStar size="0.9rem" stroke={1.5} color={theme.colors.yellow[6]} />}
              >
                Saved posts
              </Menu.Item>
              <Menu.Item
                icon={<IconMessage size="0.9rem" stroke={1.5} color={theme.colors.blue[6]} />}
              >
                Your comments
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                Account settings
              </Menu.Item>
              <Menu.Item icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}>
                Change account
              </Menu.Item>
              <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<IconPlayerPause size="0.9rem" stroke={1.5} />}>
                Pause subscription
              </Menu.Item>
              <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />}>
                Delete account
              </Menu.Item>
            </Box>
          </Menu>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
        <Main/>
      </Box>
      </Box>
  );
}
