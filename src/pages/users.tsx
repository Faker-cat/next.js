import { Button} from '@chakra-ui/react'
import { MdBuild , MdCall } from "react-icons/md"
import { Stack, VStack } from '@chakra-ui/react'
import axios from "axios";

export default function Users() {

    async function getItem() {
        try {
          const url = "http://localhost:8000/users";
          const res = await axios.get(url);
          console.log(res.data) // response data
          console.log(res.status) // status code
        } catch (err) {
            console.error(err);
        }
      }

  return (

    <Stack direction='row' spacing={4}>
    <Button onClick={getItem} leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
        Settings
    </Button>
    <Button onClick={getItem} rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
        Call us 
    </Button>
    </Stack>
    

    )
    
}