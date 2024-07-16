import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdBuild , MdCall } from "react-icons/md"
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'

const inter = Inter({ subsets: ["latin"] });

export default function Hello() {
  return (
    
    <div>
        <VStack spacing="3">
            <Box w="full" h="100px" bgColor="white"></Box>
        </VStack>

        <Center h="100%">
            <Box maxW='32rem'>
                <Heading mb={4} size="2xl">Welcome to my site!!</Heading>
            </Box>
        </Center>;

        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Heading as='h2' size='xl'>
                        Hello World! one!
                    </Heading>
                    <div>
                        <Stack direction='row' spacing={4}>
                            <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
                                Settings
                            </Button>
                            <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
                                Call us
                            </Button>
                        </Stack>
                    </div>
                    <div>
                        <Stack spacing={4} direction='row' align='center'>
                            <Button colorScheme='teal' size='xs'>
                                Button
                            </Button>
                            <Button colorScheme='teal' size='sm'>
                                Button
                            </Button>
                            <Button colorScheme='teal' size='md'>
                                Button
                            </Button>
                            <Button colorScheme='teal' size='lg'>
                                Button
                            </Button>
                        </Stack>
                    </div>
                </TabPanel>

                <TabPanel>
                    <Heading as='h2' size='xl'>
                        Hello World! two!
                    </Heading>
                    <div>
                        <Stack direction='row' spacing={4} align='center'>
                            <Button colorScheme='teal' variant='solid'>
                                Button
                            </Button>
                            <Button colorScheme='teal' variant='outline'>
                                Button
                            </Button>
                            <Button colorScheme='teal' variant='ghost'>
                                Button
                            </Button>
                            <Button colorScheme='teal' variant='link'>
                                Button
                            </Button>
                        </Stack>
                        <Stack direction='row' spacing={4}>
                            <Button isLoading colorScheme='teal' variant='solid'>
                                Email
                            </Button>
                            <Button
                                isLoading
                                loadingText='Submitting'
                                colorScheme='teal'
                                variant='outline'
                            >
                                Submit
                            </Button>
                        </Stack>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
    
  );
}



