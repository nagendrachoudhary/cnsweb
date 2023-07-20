import { Avatar, Box, Image, Input, Select, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { SearchIcon, CloseIcon, StarIcon, EditIcon, SettingsIcon } from "@chakra-ui/icons";
import { AiFillDatabase, AiOutlineDown } from "react-icons/ai";
import { BiBulb, BiLogIn, BiTask } from "react-icons/bi";
import { BsInbox, BsMinecartLoaded } from "react-icons/bs";
import { MdAccountBalance, MdAccountBox, MdNotificationsActive } from "react-icons/md";
export default function Navbar() {
  const [state, setState] = useState(0);
  const [Search, setSearch] = useState(false);
  const [Admin, setAdmin] = useState(false);
  const [isHoveringSearchIcon, setIsHoveringSearchIcon] = useState(false);
  const [isHoveringStarIcon, setIsHoveringStarIcon] = useState(false); // New state variable for the StarIcon hover

  const arr = [
    "Don't Miss Out! ",
    "Something you love is now on sale!",
    "Our new update has been released.",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState((prevState) => (prevState + 1) % arr.length);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const toggleSearchBox = () => {
    setSearch(!Search);
  };

  const handleSearchIconHover = () => {
    setIsHoveringSearchIcon(!isHoveringSearchIcon);
  };

  const handleStarIconHover = () => {
    setIsHoveringStarIcon(!isHoveringStarIcon);
  };

  return (
    <>
   
      <style>
        {`
          @keyframes zoomIn {
            from {
              transform: scale(0);
            }
            to {
              transform: scale(1);
            }
          }
        `}
      </style>
      {Search ? (
        <Box
          style={{
            height: "50px",
            overflow: "hidden",
            animation: "zoomIn 0.5s ease-in-out",
            transition: "height 0.3s ease",
          }}
          backgroundColor={'gray.300'}
          zIndex={999}
          position="sticky"
          top="0"
          boxShadow={"base"}
          display={"flex"}
          left="0"
          justifyContent={"center"}
          alignItems={"center"}>
             <Text>
      Cuba
    </Text>
          <Input width={"70vw"} placeholder="Type your search here" />
          <CloseIcon onClick={toggleSearchBox} boxSize={"20px"} />
        </Box>
      ) : (
        <Box
        zIndex={999}
        backgroundColor={'gray.300'}
          position="sticky"
          top="0"
          display={"flex"}
          justifyContent={"space-between"}
          boxShadow={"base"}
          left="0">
          <Box
            width="30%"
            justifyContent="flex-start"
            display="flex"
            alignItems="center">
               <Text mr={'50px'}>
      Cuba
    </Text>
            <Image
              src="https://admin.pixelstrap.com/cuba/assets/images/giftools.gif"
              alt="logo"
            />
            <Text>{arr[state]}</Text>
          </Box>
          <Box
            display={"flex"}
            gap={"30px"}
            alignItems={"center"}
            position="relative">
            <Select width={"100px"} variant={"unstyled"} transform={"auto-gpu"}>
              <option value="">English</option>
              <option value="">Français</option>
              <option value="">Español</option>
              <option value="">Deutsch</option>
              <option value="">Italiano</option>
              <option value="">日本語</option>
              <option value="">한국어</option>
              <option value="">中文</option>
              <option value="">Português Brasileiro</option>
            </Select>
            <SearchIcon onClick={toggleSearchBox} boxSize={"20px"} />
            <Box
              onMouseEnter={handleStarIconHover}
              onMouseLeave={handleStarIconHover}>
              <StarIcon />
              {isHoveringStarIcon && (
                <Box
                  position="absolute"
                  top="50%"
                  translateY={"30px"}
                  width={"400px"}
                  transform="translateX(-50%)"
                  backgroundColor="white"
                  boxShadow="md"
                  padding="10px"
                  transition={"10s"}
                  height={"300px"}
                  shadow={"base"}>
                  <Box shadow={"base"}>
                    <Text fontSize={"2xl"}>BookMark</Text>
                  </Box>
                  <Box
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}>
                    <Box cursor={"pointer"}>
                      <EditIcon boxSize={"10"} />
                      <Text>Forms</Text>
                    </Box>
                    <Box cursor={"pointer"}>
                      <Avatar />
                      <Text>Profile</Text>
                    </Box>
                    <Box cursor={"pointer"}>
                      <AiFillDatabase size={"50px"} />
                      <Text>Tables</Text>
                    </Box>
                  </Box>
                  <Text _activeLink={true} cursor={"pointer"}>
                    Add New Bookmark
                  </Text>
                </Box>
              )}
            </Box>
            <Box>
              <BiBulb size={"30px"} />
            </Box>
            <Box>
              <BsMinecartLoaded size={"30px"} />
            </Box>
            <Box>
              <MdNotificationsActive size={"30px"} />
            </Box>
            <Box>
              <Image src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/profile.png" />
            </Box>
            <Box width={"300px"} ml={"0"}>
              <Text fontWeight={"bold"}>Emay Walter</Text>
              <Box
                onMouseEnter={() => {
                  setAdmin(true);
                }}
                onMouseLeave={() => {
                  setAdmin(false);
                }}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}>
                <Text>Admin </Text>
                <AiOutlineDown />
              </Box>
            </Box>
            {Admin && (
              <Box
                onMouseEnter={() => {
                  setAdmin(true);
                }}
                onMouseLeave={() => {
                  setAdmin(false);
                }}
                position="absolute"
                top="50%"
                right={0}
                translateY={"30px"}
                width={"200px"}
                transform="translateX(-50%)"
                backgroundColor="white"
                boxShadow="md"
                padding="10px"
                transition={"10s"}
                height={"300px"}
                shadow={"base"}>
                <Text textAlign={'left'} display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'}> <MdAccountBox/>ACCOUNT</Text>
                <Text textAlign={'left'} display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'}><BsInbox/>INBOX</Text>
                <Text textAlign={'left'} display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'}><BiTask/>TASKBOARD</Text>
                <Text textAlign={'left'} display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'}><SettingsIcon/>SETTINGS</Text>
                <Text textAlign={'left'} display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'}><BiLogIn/>LOG IN</Text>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
