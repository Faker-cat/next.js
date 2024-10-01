import { MdBuild , MdCall } from "react-icons/md"
import { Stack, VStack } from '@chakra-ui/react'
import { Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import {
  IconButton,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect} from "react";

export default function Users() {
    const [user, setUser] = useState<User[]>([]);

    async function getItem() {
        try {
          const url = "http://localhost:8000/users";
          const res = await axios.get(url);
          setUser(res.data);
          console.log(res.data) // response data
          console.log(res.status) // status code
        } catch (err) {
            console.error(err);
        }
      }

    useEffect(() => {
      getItem();
    }, []);

  return (
<>

    <Stack direction='row' spacing={4}>
    <Button onClick={getItem} leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
        Settings
    </Button>
    </Stack>
    
    <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Role</Th>
                <Th>Color</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {user.map((res) => (
                <Tr key={res.id}>
                  <Td>{res.id}</Td>
                  <Td>{res.name}</Td>
                  <Td>{res.role}</Td>
                  <Td>{res.color}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
</>
    )
    
}