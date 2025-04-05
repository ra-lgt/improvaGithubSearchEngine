import React from 'react'
import { Avatar, Button, Card } from "@chakra-ui/react"
import { Text} from "@chakra-ui/react"

function userdetail() {
  return (
    <>

          <div className='flex'>
           <Card.Root m="5"  className="relative w-1/2">
          <Card.Body gap="2">
            <Avatar.Root size="2xl" className="rounded-full">
              <Avatar.Image src="https://picsum.photos/200/300" />
              <Avatar.Fallback name="Nue Camp" />
            </Avatar.Root>
            <Card.Title mt="2">Name</Card.Title>
            <Card.Description>
              <Text>Date Of Join : 3/10/2003</Text>
            </Card.Description>
          </Card.Body>
    
        </Card.Root>
        <Card.Root m="5"  className="relative w-1/2">
          
          <Card.Body gap="2">
            <Card.Title mt="2">Achievements</Card.Title>
            <Card.Description>
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
              Curabitur nec odio vel dui euismod fermentum.
            </Card.Description>
          </Card.Body>
       
        </Card.Root>
        </div>
        <Card.Root m="5" className="h-80 overflow-y-auto">
  <Card.Body gap="2" className="h-full">
    <Card.Title mt="2">Repositories</Card.Title>

    <Card.Description>
      This is the card body. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
      Curabitur nec odio vel dui euismod fermentum.

      <div className="mt-4">
        {[...Array(20)].map((_, i) => (
          <p key={i}>Additional content line {i + 1}</p>
        ))}
      </div>
    </Card.Description>
  </Card.Body>
</Card.Root>


        </>
  )
}

export default userdetail
