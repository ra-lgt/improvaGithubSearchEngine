
import React from 'react'
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineDelete } from "react-icons/ai";
import { Avatar, Button, Card } from "@chakra-ui/react"
import { Text, Input, InputGroup, Kbd,Box ,VStack,HStack} from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
function history() {
  return (
    <Box m="2%">
  <div className='flex justify-between items-center w-full'>
  <Text fontSize="xl" className="flex-shrink-0">Search History</Text>

</div>

       <Card.Root m="5"  >
  
      <Card.Body gap="2">
     
        <Card.Description>
        <VStack align="start" gap={1}>
        {[...Array(5)].map((_, i) => (
          <Box w="100%">

<HStack justify="space-between" >
        <Box display="flex" w="50%" justifyContent="space-between">
        <Text fontSize="sm" color="gray.500">
            {new Date().toLocaleString()}
          </Text>
          <Text fontWeight="medium">Sample Item {i + 1}</Text>
         
        </Box>
    <Box w="5%" display="flex" justifyContent="space-between">
    <AiOutlineCheckCircle size={24} color="green" />
    < AiOutlineDelete size={24} color="red" />
    </Box>
      </HStack>
<Box as="hr" borderColor="gray.200" my={1} />
          </Box>
         
        ))}
      </VStack>
        </Card.Description>
      </Card.Body>
   
    </Card.Root>

   
    </Box>
  
  )
}

export default history
