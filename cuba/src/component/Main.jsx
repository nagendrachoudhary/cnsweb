import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  ReferenceLine,
  CartesianGrid,
  Tooltip,
  Legend,
  ScatterChart,
  Scatter,
} from "recharts";
import {
  BackgroundImage,
  Center,
  Text,
  Box,
  Button,
  Paper,
  Group,
  RingProgress,
  createStyles,
  rem,
  Timeline,
  Title,
  Avatar,
  Badge,
  Table,
  Select,
  ScrollArea,
} from "@mantine/core";
import { Icon123, IconDiscount } from "@tabler/icons-react";
import {
  BsArrowUpRightSquare,
  BsCart,
  BsDot,
  BsDownload,
  BsGraphDownArrow,
  BsGraphUpArrow,
  BsThreeDots,
} from "react-icons/bs";
import { GrMoney, GrReturn } from "react-icons/gr";
import { Cell, ResponsiveContainer } from "recharts";
import { PiHandCoinsBold } from "react-icons/pi";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";
const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export default function Main() {
  const data = [
    { name: "", PROFIT:Math.floor(Math.random()*100) },
    { name: "", PROFIT:Math.floor(Math.random()*100) },
    { name: "", PROFIT:Math.floor(Math.random()*100) },
    { name: "", PROFIT:Math.floor(Math.random()*100) },
    { name: "", PROFIT:Math.floor(Math.random()*100) },
    { name: "", PROFIT:Math.floor(Math.random()*100) },
    { name: "", PROFIT:Math.floor(Math.random()*100) },
    { name: "", PROFIT:Math.floor(Math.random()*100) },
    { name: "", PROFIT:Math.floor(Math.random()*100) },
  ];
  const data2 = [
    { name: "", PROFIT: 3 },
    { name: "", PROFIT: -2 },
    { name: "", PROFIT: 3.5 },
    { name: "", PROFIT: -2.5 },
    { name: "", PROFIT: 1.5 },
    { name: "", PROFIT: -0.5 },
    { name: "", PROFIT: 2.5 },
    { name: "", PROFIT: -1.5 },
    { name: "", PROFIT: 3.5 },
  ];
  const data3 = [
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
    {
      Earning: Math.floor(Math.random()*1000),
      Expense: Math.floor(Math.random()*1000),
    },
  ];
  const data4 = [
    { x: 100, y: 200, z: 200, name: "Analysis" },
    { x: 120, y: 100, z: 260, name: "Design " },
    { x: 170, y: 300, z: 400, name: "Coding" },
    { x: 170, y: 300, z: 400, name: "Testing" },
  ];
  const data5 = [
    { name: "Jan", uv:Math.floor(Math.random()*1000) },
    { name: "Feb", uv:Math.floor(Math.random()*1000) },
    { name: "Mar", uv:Math.floor(Math.random()*1000) },
    { name: "Apr", uv:Math.floor(Math.random()*1000) },
    { name: "May", uv:Math.floor(Math.random()*1000) },
    { name: "Jun", uv:Math.floor(Math.random()*1000) },
    { name: "Jul", uv:Math.floor(Math.random()*1000) },
    { name: "Aug", uv:Math.floor(Math.random()*1000) },
    { name: "Sep", uv:Math.floor(Math.random()*1000) },
    { name: "Oct", uv:Math.floor(Math.random()*1000) },
    { name: "Nov", uv:Math.floor(Math.random()*1000) },
    { name: "Dec", uv:Math.floor(Math.random()*1000) },
  ];
  const bage=['SASS','E-Commerce','Crypto',"Project","NFT","+9"]
  const { classes } = useStyles();
  return (
    <Box>
      <Box mt={"30px"} display={"flex"}>
        <Box className="box" display={"flex"}>
          <Box display={"flex"}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}>
              <Box>
                <Text color="#fff" fw={"bold"} fz={"24px"}>
                  Welcome to Cuba
                </Text>
                <Text color="#fff">
                  Here whats happing in your account today
                </Text>
              </Box>
              <Button id="whatbutton">Whats New!</Button>
            </Box>
            <Box>
              <img src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/cartoon.svg" />
            </Box>
          </Box>
        </Box>
        <Box w={"100%"}>
          <Box display={"flex"} style={{ justifyContent: "space-evenly" }}>
            <Box w={"250px"}>
              <Box>
                <Paper withBorder radius="md" p="xs">
                  <Box
                    display={"flex"}
                    style={{ justifyContent: "space-evenly" }}>
                    <Box>
                      <RingProgress
                        size={80}
                        roundCaps
                        thickness={4}
                        sections={[{ value: 10000, color: "red" }]}
                        mr={"40px"}
                        label={
                          <Center>
                            <BsCart size={30} color="red" />
                          </Center>
                        }
                      />
                    </Box>
                    <Box>
                      <Text weight={700} size="xl">
                        10,000
                      </Text>
                      <Text
                        color="dimmed"
                        size="xs"
                        transform="uppercase"
                        weight={700}>
                        Purchase
                      </Text>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
            <Box w={"250px"}>
              <Box>
                <Paper withBorder radius="md" p="xs">
                  <Box
                    display={"flex"}
                    style={{ justifyContent: "space-evenly" }}>
                    <Box>
                      <RingProgress
                        size={80}
                        roundCaps
                        thickness={4}
                        sections={[{ value: 7000, color: "yellow" }]}
                        mr={"40px"}
                        label={
                          <Center>
                            <GrReturn size={30} color="red" />
                          </Center>
                        }
                      />
                    </Box>
                    <Box>
                      <Text weight={700} size="xl">
                        7,000
                      </Text>
                      <Text
                        color="dimmed"
                        size="xs"
                        transform="uppercase"
                        weight={700}>
                        Sales return
                      </Text>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
            <Box w={"250px"}>
              <Box>
                <Paper withBorder radius="md" p="xs">
                  <Box
                    display={"flex"}
                    style={{ justifyContent: "space-evenly" }}>
                    <Box>
                      <Text weight={700} size="xl">
                        1,80k
                      </Text>
                      <Text
                        color="dimmed"
                        size="xs"
                        transform="uppercase"
                        weight={700}>
                        Orders
                      </Text>
                    </Box>
                    <Box>
                      <ResponsiveContainer height={80} width={150}>
                        <LineChart width={100} height={100} data={data2}>
                          <CartesianGrid stroke="transparent" />
                          <Tooltip />
                          <Line type="monotone" dataKey="PROFIT" />
                        </LineChart>
                      </ResponsiveContainer>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Box>

          <Box
            display={"flex"}
            w={"100%"}
            style={{ justifyContent: "space-evenly" }}>
            <Box w={"250px"}>
              <Box>
                <Paper withBorder radius="md" p="xs">
                  <Box
                    display={"flex"}
                    style={{ justifyContent: "space-evenly" }}>
                    <Box>
                      <RingProgress
                        size={80}
                        roundCaps
                        thickness={4}
                        sections={[{ value: 10000, color: "blue" }]}
                        mr={"40px"}
                        label={
                          <Center>
                            <IconDiscount size={30} color="blue" />
                          </Center>
                        }
                      />
                    </Box>
                    <Box>
                      <Text weight={700} size="xl">
                        4,200
                      </Text>
                      <Text
                        color="dimmed"
                        size="xs"
                        transform="uppercase"
                        weight={700}>
                        Sales
                      </Text>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
            <Box w={"250px"}>
              <Box>
                <Paper withBorder radius="md" p="xs">
                  <Box
                    display={"flex"}
                    style={{ justifyContent: "space-evenly" }}>
                    <Box>
                      <RingProgress
                        size={80}
                        roundCaps
                        thickness={4}
                        sections={[{ value: 10000, color: "green" }]}
                        mr={"40px"}
                        label={
                          <Center>
                            <GrMoney size={30} color="green" />
                          </Center>
                        }
                      />
                    </Box>
                    <Box>
                      <Text weight={700} size="xl">
                        5,700
                      </Text>
                      <Text
                        color="dimmed"
                        size="xs"
                        transform="uppercase"
                        weight={700}>
                        Purchase rate
                      </Text>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
            <Box w={"250px"}>
              <Box>
                <Paper withBorder radius="md" p="xs">
                  <Box
                    display={"flex"}
                    style={{ justifyContent: "space-evenly" }}>
                    <Box>
                      <Text weight={700} size="xl">
                        6,90k
                      </Text>
                      <Text
                        color="dimmed"
                        size="xs"
                        transform="uppercase"
                        weight={700}>
                        Profit
                      </Text>
                    </Box>
                    <Box>
                      <ResponsiveContainer height={80} width={150}>
                        <LineChart width={100} height={100} data={data}>
                          <CartesianGrid stroke="transparent" />
                          <Tooltip />
                          <Line type="monotone" dataKey="PROFIT" />
                        </LineChart>
                      </ResponsiveContainer>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} style={{ gap: "30px" }}>
        <Box w={"60%"}>
          <Box display={"flex"} style={{ justifyContent: "space-between" }}>
            <Box>
              <Text fz={"24px"} fw={700}>
                Overall Balance
              </Text>
            </Box>
            <Box display={"flex"} style={{ gap: "30px" }}>
              <Box
                display={"flex"}
                style={{ alignItems: "center", justifyContent: "center" }}>
                <Box
                  w={"5px"}
                  h={"5px"}
                  bg="Yellow"
                  m={"auto"}
                  style={{ borderRadius: "100%" }}></Box>
                <Text>Earning</Text>
              </Box>
              <Box
                display={"flex"}
                style={{ alignItems: "center", justifyContent: "center" }}>
                <Box
                  w={"5px"}
                  h={"5px"}
                  bg="blue"
                  m={"auto"}
                  style={{
                    borderRadius: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}></Box>
                <Text>Expense</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} style={{ justifyContent: "space-evenly" }}>
            <ResponsiveContainer height={300} width={"70%"}>
              <BarChart
                width={500}
                height={300}
                data={data3}
                barSize={3}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}>
                <CartesianGrid stroke="transparent" />{" "}
                {/* Set the stroke to 'transparent' */}
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Expense" stackId="a" fill="#7063ff" />
                <Bar dataKey="Earning" stackId="a" fill="#aaafcb" />
              </BarChart>
            </ResponsiveContainer>
            <Box>
              <Paper withBorder p={10} w={"100%"} radius="md">
                <Box display={"flex"}>
                  <Box
                    display={"flex"}
                    mr={10}
                    style={{ alignItems: "center" }}>
                    <BsDownload size={30} />
                  </Box>
                  <Box>
                    <Group position="apart">
                      <Text size="xs" color="dimmed" className={classes.title}>
                        Income
                      </Text>
                    </Group>
                    <Group align="flex-end" spacing="xs" mt={25}>
                      <Text className={classes.value}>$22,678</Text>
                      <Text color={"teal"} fz="sm" fw={500}>
                        <span>+$456</span>
                      </Text>
                    </Group>
                  </Box>
                </Box>
              </Paper>
              <Paper withBorder p={10} w={"100%"} radius="md">
                <Box display={"flex"}>
                  <Box
                    display={"flex"}
                    mr={10}
                    style={{ alignItems: "center" }}>
                    <PiHandCoinsBold size={30} />
                  </Box>
                  <Box>
                    <Group position="apart">
                      <Text size="xs" color="dimmed" className={classes.title}>
                        Expense
                      </Text>
                    </Group>
                    <Group align="flex-end" spacing="xs" mt={25}>
                      <Text className={classes.value}>$12,056</Text>
                      <Text color={"red"} fz="sm" fw={500}>
                        <span>+$256</span>
                      </Text>
                    </Group>
                  </Box>
                </Box>
              </Paper>
              <Paper withBorder p={10} w={"100%"} radius="md">
                <Box display={"flex"}>
                  <Box
                    display={"flex"}
                    mr={10}
                    style={{ alignItems: "center" }}>
                    <IconDiscount size={30} />
                  </Box>
                  <Box>
                    <Group position="apart">
                      <Text size="xs" color="dimmed" className={classes.title}>
                        Cashback
                      </Text>
                    </Group>
                    <Group align="flex-end" spacing="xs" mt={25}>
                      <Text className={classes.value}>$8,475</Text>
                    </Group>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>
        <Box w={"40%"}>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Text fw={400} fz={"24px"}>
              Recent Order
            </Text>
            <BsThreeDots cursor={"pointer"} />
          </Box>
          <Box
            display={"flex"}
            style={{ justifyContent: "center", alignItems: "center" }}>
            <Box id="fring"></Box>
            <Box id="sring">
              <Text fz={"40px"}>100</Text>
              <Text c={"gray"} fw={500}>
                Total Profit
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} style={{ gap: "30px" }}>
        <Box
          w={"33%"}
          p={"lg"}
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Box display={"flex"} style={{ justifyContent: "space-between" }}>
            <Title>Activity</Title>
            <select style={{ border: "none" }}>
              <option style={{ border: "none" }}>Today</option>
              <option style={{ border: "none" }}>This week</option>
              <option style={{ border: "none" }}>Last month</option>
            </select>
          </Box>
          <Timeline active={4} bulletSize={10} lineWidth={2}>
            <Timeline.Item
              bullet={<BsDot color="red" size={55} />}
              title="8th March, 2022">
              <Text>Updated Product</Text>
              <Text color="dimmed" size="sm">
                Quisque a consequat ante sit amet mag
                <Text variant="link" component="span" inherit>
                  fix-notifications
                </Text>{" "}
                from master
              </Text>
              <Text size="xs" mt={4}>
                2 hours ago
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<BsDot color="red" size={55} />}
              title="15th Oct, 2022">
              <Text>Tello just like your product</Text>
              <Text color="dimmed" size="sm">
                Quisque a consequat ante sit amet magna...
                <Text variant="link" component="span" inherit>
                  fix-notifications
                </Text>{" "}
                from master
              </Text>
              <Text size="xs" mt={4}>
                Today
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<BsDot color="red" size={55} />}
              title="20th Sep, 2022">
              <Text>Tello just like your product</Text>
              <Text color="dimmed" size="sm">
                Quisque a consequat ante sit amet magna...
                <Text variant="link" component="span" inherit>
                  fix-notifications
                </Text>{" "}
                from master
              </Text>
              <Text size="xs" mt={4}>
                12:00 PM
              </Text>
            </Timeline.Item>
            <Timeline.Item></Timeline.Item>
          </Timeline>
        </Box>
        <Box
          w={"33%"}
          p={"lg"}
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Box display={"flex"} style={{ justifyContent: "space-between" }}>
            <Title>Recent Sales</Title>
            <select style={{ border: "none" }}>
              <option style={{ border: "none" }}>Today</option>
              <option style={{ border: "none" }}>This week</option>
              <option style={{ border: "none" }}>Last month</option>
            </select>
          </Box>
          <Box>
            <ScrollArea>
              <Table verticalSpacing="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Group spacing="sm">
                        <Avatar
                          size={40}
                          src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/1.jpg"
                          radius={40}
                        />
                        <div>
                          <Text fz="sm" fw={500}>
                            John Doe
                          </Text>
                          <Text>
                            {Math.floor(Math.random() * 6 + 5)} days ago
                          </Text>
                        </div>
                      </Group>
                    </td>
                    <td>$ {Math.floor(Math.random() * 1000)}</td>
                  </tr>
                </tbody>
              </Table>
            </ScrollArea>
            <ScrollArea>
              <Table verticalSpacing="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Group spacing="sm">
                        <Avatar
                          size={40}
                          src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/5.jpg"
                          radius={40}
                        />
                        <div>
                          <Text fz="sm" fw={500}>
                            MArk Green
                          </Text>
                          <Text>
                            {Math.floor(Math.random() * 6 + 5)} days ago
                          </Text>
                        </div>
                      </Group>
                    </td>
                    <td>$ {Math.floor(Math.random() * 1000)}</td>
                  </tr>
                </tbody>
              </Table>
            </ScrollArea>
            <ScrollArea>
              <Table verticalSpacing="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Group spacing="sm">
                        <Avatar
                          size={40}
                          src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/4.jpg"
                          radius={40}
                        />
                        <div>
                          <Text fz="sm" fw={500}>
                            Weigth
                          </Text>
                          <Text>
                            {Math.floor(Math.random() * 6 + 5)} days ago
                          </Text>
                        </div>
                      </Group>
                    </td>
                    <td>$ {Math.floor(Math.random() * 1000)}</td>
                  </tr>
                </tbody>
              </Table>
            </ScrollArea>
            <ScrollArea>
              <Table verticalSpacing="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Group spacing="sm">
                        <Avatar
                          size={40}
                          src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/3.jpg"
                          radius={40}
                        />
                        <div>
                          <Text fz="sm" fw={500}>
                            Leslie Alexander
                          </Text>
                          <Text>
                            {Math.floor(Math.random() * 6 + 5)} days ago
                          </Text>
                        </div>
                      </Group>
                    </td>
                    <td>$ {Math.floor(Math.random() * 1000)}</td>
                  </tr>
                </tbody>
              </Table>
            </ScrollArea>
            <ScrollArea>
              <Table verticalSpacing="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Group spacing="sm">
                        <Avatar
                          size={40}
                          src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/2.jpg"
                          radius={40}
                        />
                        <div>
                          <Text fz="sm" fw={500}>
                            Brooklyn Simmons
                          </Text>
                          <Text>
                            {Math.floor(Math.random() * 6 + 5)} days ago
                          </Text>
                        </div>
                      </Group>
                    </td>
                    <td>$ {Math.floor(Math.random() * 1000)}</td>
                  </tr>
                </tbody>
              </Table>
            </ScrollArea>
          </Box>
        </Box>
        <Box
          w={"33%"}
          p={"lg"}
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Box display={"flex"} style={{ justifyContent: "space-between" }}>
            <Title>Timeline</Title>
            <select style={{ border: "none" }}>
              <option style={{ border: "none" }}>Today</option>
              <option style={{ border: "none" }}>This week</option>
              <option style={{ border: "none" }}>Last month</option>
            </select>
          </Box>
          <Box>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}>
                <CartesianGrid />
                <XAxis type="category" dataKey="x" unit="" />
                <YAxis type="category" dataKey="y" name="" unit="" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="A school" data={data4} fill="#8884d8">
                  <Button>{data4[0].name}</Button>
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} style={{ gap: "30px" }}>
        <Box
          w={"50%"}
          mt={30}
          p={"lg"}
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Box>
            <Box>
              <Box display={"flex"} style={{ justifyContent: "space-between" }}>
                <Title>Total Users</Title>
                <BsThreeDots style={{}} />
              </Box>
              <Box display={"flex"} style={{ justifyContent: "space-between" }}>
                <Paper withBorder radius="md" w={"45%"} p="xs">
                  <Group>
                    <RingProgress
                      size={80}
                      roundCaps
                      thickness={3}
                      sections={[{ value: 1000, color: "teal" }]}
                      label={
                        <Center>
                          <Avatar />
                        </Center>
                      }
                    />

                    <div>
                      <Text
                        color="dimmed"
                        size="xs"
                        transform="uppercase"
                        weight={700}>
                        178,098
                      </Text>
                      <Text c="green" weight={700} size="xl">
                        <BsGraphUpArrow />
                        +30.89
                      </Text>
                    </div>
                  </Group>
                </Paper>
                <Paper withBorder radius="md" w={"45%"} p="xs">
                  <Group>
                    <RingProgress
                      size={80}
                      roundCaps
                      thickness={3}
                      sections={[{ value: 1000, color: "Green" }]}
                      label={
                        <Center>
                          <Avatar c={"green"} />
                        </Center>
                      }
                    />

                    <div>
                      <Text
                        color="dimmed"
                        size="xs"
                        transform="uppercase"
                        weight={700}>
                        178,098
                      </Text>
                      <Text c={"red"} weight={700} size="xl">
                        <BsGraphDownArrow />
                        +30.89
                      </Text>
                    </div>
                  </Group>
                </Paper>
              </Box>
            </Box>
          </Box>
          <Box>
          <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data5}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            
          >
            <CartesianGrid  strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Line type="monotone" strokeWidth={5} dot={false}   dataKey="uv" stroke="#8884d8" fillOpacity={0} />
          </LineChart>
        </ResponsiveContainer>
          </Box>
        </Box>
        <Box  w={"50%"}
          mt={30}
          p={"lg"}
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          
          <Box  display={"flex"} style={{ justifyContent: "space-between" }}>
                <Title>PaperNote</Title>
                <Text> View Project <BsArrowUpRightSquare/></Text>
          </Box>
          <Box>
            <img src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/papernote.jpg"/>
            <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
            {bage.map((el)=>{
              return <Badge>{el}</Badge>
            })}
            <Box display={'flex'} style={{justifyContent:'space-evenly'}}>
             <Avatar.Group spacing="sm">
             <Avatar src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/2.jpg" radius="xl" />
             <Avatar src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/1.jpg" radius="xl" />
             <Avatar src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/3.jpg" radius="xl" />
             <Avatar src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/4.jpg" radius="xl" />
             <Avatar src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/user/5.jpg" radius="xl" />
             <Avatar radius="xl">+5</Avatar>
            </Avatar.Group>
            <Text><span style={{fontWeight:'800',fontSize:'20',color:'blue'}}>$239,098</span> (Budget)</Text>
            </Box>
           
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
