import { Inter } from "next/font/google";
import { Button} from '@chakra-ui/react'
import { MdBuild , MdCall } from "react-icons/md"
import { Stack, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Center} from '@chakra-ui/react'
import { Input ,Flex} from "@chakra-ui/react";
import NextLink from "next/link"
import {useColorMode, useColorModeValue } from "@chakra-ui/react";


const inter = Inter({ subsets: ["latin"] });

export default function Hello() {

    const { toggleColorMode } = useColorMode();
    const formBackGround = useColorModeValue("gray.100", "gray.700");

  return (

    <div>
        <VStack spacing="3">
            <Box w="full" h="100px" bgColor="white"></Box>
        </VStack>

        <Center h="100%">
            <Box maxW='32rem'>
                <Heading mb={4} size="2xl">Welcome to my site!!</Heading>
            </Box>
        </Center>

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
                    <div>
                        <Flex height="100vh" alignItems="center" justifyContent="center">
                        <Flex direction="column" background={formBackGround} p={12} rounded={6}>
                            <Heading mb={6}>Log in</Heading>
                            <Input
                            placeholder="faker@chakra-ui.com"
                            variant="filled"
                            mb={3}
                            type="email"
                            />
                            <Input placeholder="*******" variant="filled" type="password" mb={6} />
                            <NextLink href="https://iyatomi-lab.info/top" passHref>
                                <Button colorScheme="teal"  variant='outline' as="a">
                                    Log in
                                </Button>
                            </NextLink>
                            <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
                        </Flex>
                        </Flex>  
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



