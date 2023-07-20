import { Avatar, Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  BiDownload,
  BiHome,
  BiMoney,
  BiShoppingBag,
  BiSolidDiscount,
} from "react-icons/bi";
import { BsFileSlides, BsHandIndexFill } from "react-icons/bs";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import Bar from "./Bar";
export default function Main() {
  return (
    <Box>
      <Box
        w={"100%"}
        h={"50px"}
        display={"flex"}
        justifyContent={"space-between"}>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Default
        </Text>
        <Box display={"flex"} alignItems={"center"}>
          <BiHome />/<Text>Dashboard</Text>/<Text>Default</Text>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
          width={"400px"}
          backgroundColor={"#0000ff45"}
          borderRadius={"15"}
          position={"relative"}
          height={"250px"}>
          <Box width={"250px"}>
            <Text
              m={"10px"}
              textAlign={"left"}
              color={"white"}
              fontWeight={"bold"}
              fontSize={"2xl"}>
              Welcome to cuba
            </Text>
            <Text
              m={"10px"}
              textAlign={"left"}
              color={"white"}
              fontWeight={"semibold"}
              fontSize={"xl"}>
              Here whats happing in your account today
            </Text>
          </Box>
          <Button
            zIndex={0}
            m={"20px"}
            position={"absolute"}
            top={"150px"}
            left={0}>
            Whats New !
          </Button>
          <Box>
            <Image
              position={"absolute"}
              right={0}
              top={0}
              src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/cartoon.svg"
            />
          </Box>
        </Box>
        <Box>
          <Box
            display={"flex"}
            gap={"50px"}
            gridTemplateRows={"3,1fr"}
            width={"70vw"}
            mb={"40px"}>
            <Box
              _hover={{ transform: "translateY(-10px)" }}
              transition="transform 0.2s ease"
              shadow="dark-lg"
              width="25%"
              borderRadius="15px"
              alignItems="center"
              justifyContent="center"
              h="100px"
              display="flex">
              <Box
                border="1px solid red"
                h="60px"
                alignItems="center"
                display="flex"
                justifyContent="center"
                width="60px"
                borderRadius="100%">
                <BiShoppingBag size={30} color="red" />
              </Box>
              <Box>
                <Text textAlign="left" fontSize="xl">
                  10000
                </Text>
                <Text textAlign="left" fontSize="xl">
                  Purchase
                </Text>
              </Box>
            </Box>
            <Box
              _hover={{ transform: "translateY(-10px)" }}
              transition="transform 0.2s ease"
              shadow={"dark-lg"}
              width={"25%"}
              borderRadius={"15px"}
              alignItems={"center"}
              justifyContent={"center"}
              h={"100px"}
              display={"flex"}>
              <Box
                border={"1px solid red"}
                h={"60px"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"center"}
                width={"60px"}
                borderRadius={"100%"}>
                <BsFileSlides size={30} color="red" />
              </Box>
              <Box>
                <Text textAlign={"left"} fontSize={"xl"}>
                  7000
                </Text>
                <Text textAlign={"left"} fontSize={"xl"}>
                  Sales return
                </Text>
              </Box>
            </Box>
            <Box
              _hover={{ transform: "translateY(-10px)" }}
              transition="transform 0.2s ease"
              shadow={"dark-lg"}
              width={"25%"}
              borderRadius={"15px"}
              alignItems={"center"}
              justifyContent={"center"}
              h={"100px"}
              display={"flex"}>
              <Box
                border={"1px solid red"}
                h={"60px"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"center"}
                width={"60px"}
                borderRadius={"100%"}>
                <AiOutlineOrderedList size={30} color="red" />
              </Box>
              <Box>
                <Text textAlign={"left"} fontSize={"xl"}>
                  1.80k
                </Text>
                <Text textAlign={"left"} fontSize={"xl"}>
                  Orders
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            gap={"50px"}
            gridTemplateRows={"3,1fr"}
            width={"70vw"}>
            <Box
              _hover={{ transform: "translateY(-10px)" }}
              transition="transform 0.2s ease"
              shadow="dark-lg"
              width="25%"
              borderRadius="15px"
              alignItems="center"
              justifyContent="center"
              h="100px"
              display="flex">
              <Box
                border="1px solid red"
                h="60px"
                alignItems="center"
                display="flex"
                justifyContent="center"
                width="60px"
                borderRadius="100%">
                <BiSolidDiscount size={30} color="red" />
              </Box>
              <Box>
                <Text textAlign="left" fontSize="xl">
                  4200
                </Text>
                <Text textAlign="left" fontSize="xl">
                  Sales
                </Text>
              </Box>
            </Box>
            <Box
              _hover={{ transform: "translateY(-10px)" }}
              transition="transform 0.2s ease"
              shadow={"dark-lg"}
              width={"25%"}
              borderRadius={"15px"}
              alignItems={"center"}
              justifyContent={"center"}
              h={"100px"}
              display={"flex"}>
              <Box
                border={"1px solid red"}
                h={"60px"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"center"}
                width={"60px"}
                borderRadius={"100%"}>
                <MdRateReview size={30} color="red" />
              </Box>
              <Box>
                <Text textAlign={"left"} fontSize={"xl"}>
                  5700
                </Text>
                <Text textAlign={"left"} fontSize={"xl"}>
                  Purchase rate
                </Text>
              </Box>
            </Box>
            <Box
              _hover={{ transform: "translateY(-10px)" }}
              transition="transform 0.2s ease"
              shadow={"dark-lg"}
              width={"25%"}
              borderRadius={"15px"}
              alignItems={"center"}
              justifyContent={"center"}
              h={"100px"}
              display={"flex"}>
              <Box
                border={"1px solid red"}
                h={"60px"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"center"}
                width={"60px"}
                borderRadius={"100%"}>
                <BiMoney size={30} color="red" />
              </Box>
              <Box>
                <Text textAlign={"left"} fontSize={"xl"}>
                  6,90k
                </Text>
                <Text textAlign={"left"} fontSize={"xl"}>
                  Profit
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}>
            <Bar />
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}>
              <Box
                _hover={{ transform: "translateY(-10px)" }}
                transition="transform 0.2s ease"
                shadow={"dark-lg"}
                width={"300px"}
                borderRadius={"15px"}
                alignItems={"center"}
                justifyContent={"center"}
                h={"100px"}
                display={"flex"}>
                <Box
                  border={"1px solid red"}
                  h={"60px"}
                  alignItems={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  width={"60px"}
                  borderRadius={"100%"}>
                  <BiDownload size={30} color="red" />
                </Box>
                <Box>
                  <Text textAlign={"left"} fontSize={"xl"}>
                    $22,678
                  </Text>
                  <Text textAlign={"left"} fontSize={"xl"}>
                    Income
                  </Text>
                </Box>
              </Box>
              <Box
                _hover={{ transform: "translateY(-10px)" }}
                transition="transform 0.2s ease"
                shadow={"dark-lg"}
                width={"300px"}
                borderRadius={"15px"}
                alignItems={"center"}
                justifyContent={"center"}
                h={"100px"}
                display={"flex"}>
                <Box
                  border={"1px solid red"}
                  h={"60px"}
                  alignItems={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  width={"60px"}
                  borderRadius={"100%"}>
                  <BsHandIndexFill size={30} color="red" />
                </Box>
                <Box>
                  <Text textAlign={"left"} fontSize={"xl"}>
                    12,057
                  </Text>
                  <Text textAlign={"left"} fontSize={"xl"}>
                    Expense
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box position={"relative"}>
              <Box
                width={"200px"}
                height={"200px"}
                borderRadius={"100%"}
                backgroundColor={"red"}>
                <Box
                  textAlign={"center"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                  width={"160px"}
                  height={"160px"}
                  borderRadius={"100%"}
                  top={5}
                  left={5}
                  position={"absolute"}
                  backgroundColor={"white"}>
                  <Box>
                    <Text fontSize={"40px"}>100</Text>
                    <Text>Total Profit</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box />
        </Box>
      </Box>

      <Box display={"flex"} gap={"3%"} justifyContent={"space-evenly"}>
        <Box width={"250%"} shadow={"2xl"} height={"400px"}>
          <Box display={"flex"} justifyContent={"space-between"} m={"30px"}>
            <Text fontWeight={"bold"}>Activity</Text>
            <select>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>Yesterday</option>
            </select>
          </Box>
          <Box>
            <Box>
              <Box display={'flex'} ml={'30px'} mr={'30px'} justifyContent={'space-between'}>
              <Text fontWeight={"bold"}>Updated Product</Text>
              <Text>Yesterday</Text>
              </Box>
              <Text>Quisque a consequat ante sit amet</Text>
            </Box>
            <Box>
              <Box display={'flex'} ml={'30px'} mr={'30px'} justifyContent={'space-between'}>

              <Text fontWeight={"bold"}>Tello just like your product</Text>
              <Text>Yesterday</Text>
              </Box>
              <Text>Quisque a consequat ante sit amet</Text>
            </Box>
            <Box>
              <Box display={'flex'} ml={'30px'} mr={'30px'} justifyContent={'space-between'}>

              <Text fontWeight={"bold"}>Tello just like your product</Text>
              <Text>Yesterday</Text>
              </Box>
              <Text>Quisque a consequat ante sit amet</Text>
            </Box>
            
          </Box>
        </Box>
        <Box width={"250%"} shadow={"2xl"} height={"400px"}>
          <Box display={"flex"} justifyContent={"space-between"} m={"30px"}>
            <Text fontWeight={"bold"}>Recent Sales</Text>
            <select>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>Yesterday</option>
            </select>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box
              display={"flex"}
              alignItems={"start"}
              justifyContent={"space-evenly"}>
              <Avatar />
              <Box>
                <Text> Jane Cooper</Text>
                <Text>10 minutes ago</Text>
              </Box>
              <Text>$200.00</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"start"}
              justifyContent={"space-evenly"}>
              <Avatar />
              <Box>
                <Text> Brooklyn simmons</Text>
                <Text>19 minutes ago</Text>
              </Box>
              <Text>$970.00</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"start"}
              justifyContent={"space-evenly"}>
              <Avatar />
              <Box>
                <Text> Leslie Alexander</Text>
                <Text>2 hours ago</Text>
              </Box>
              <Text>$300.00</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"start"}
              justifyContent={"space-evenly"}>
              <Avatar />
              <Box>
                <Text>Travis Wright</Text>
                <Text>8 hours ago</Text>
              </Box>
              <Text>$400.00</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"start"}
              justifyContent={"space-evenly"}>
              <Avatar />
              <Box>
                <Text> Jane Cooper</Text>
                <Text>21 hours ago</Text>
              </Box>
              <Text>$200.00</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"start"}
              justifyContent={"space-evenly"}>
              <Avatar />
              <Box>
                <Text> Mark Green</Text>
                <Text>1 day ago</Text>
              </Box>
              <Text>$768.00</Text>
            </Box>
          </Box>
        </Box>
        <Box width={"250%"} shadow={"2xl"} height={"400px"}>
          <Box display={"flex"} justifyContent={"space-between"} m={"30px"}>
            <Text fontWeight={"bold"}>TimeLine</Text>
            <select>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>Yesterday</option>
            </select>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}
