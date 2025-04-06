import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { Avatar, Button, Card } from "@chakra-ui/react"
import { Text, Input, InputGroup, Kbd } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
function history() {
  return (
    <>
  <div className='flex justify-between items-center w-full'>
  <Text fontSize="xl" className="flex-shrink-0">Search History</Text>
  <div className="flex-grow flex justify-end max-w-md">
    <InputGroup startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
      <Input placeholder="Search username" className="w-full px-4 py-2 border rounded-lg" />
    </InputGroup>
  </div>
</div>
      <div className='flex'>
       <Card.Root m="5"  className="relative w-1/2">
       <div className="absolute top-5 right-5 text-green-500 text-xl z-10">
    <AiOutlineCheckCircle  size={30}/>
  </div>
      <Card.Body gap="2">
        <Avatar.Root size="2xl" className="rounded-full">
          <Avatar.Image src="https://picsum.photos/200/300" />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2">Nue Camp</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View Profile</Button>
      </Card.Footer>
    </Card.Root>
    <Card.Root m="5"  className="relative w-1/2">
       <div className="absolute top-5 right-5 text-red-500 text-xl z-10">
    <AiOutlineCloseCircle size={30}/>
  </div>
      <Card.Body gap="2">
        <Avatar.Root size="2xl" className="rounded-full">
          <Avatar.Image src="https://picsum.photos/200/300" />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2">Nue Camp</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View Profile</Button>
      </Card.Footer>
    </Card.Root>
    </div>
    </>
  
  )
}

export default history
