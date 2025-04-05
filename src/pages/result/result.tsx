import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { Avatar, Button, Card } from "@chakra-ui/react";
import { Text, Input, InputGroup, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { ApiService } from "@/services/service";
import { useNavigate } from 'react-router-dom';
export default function Result() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const apiService = new ApiService();

  const handleViewUser=(user_name:string)=>{
    navigate(`/userdetail?username=${user_name}`)

  }

  useEffect(() => {
    (async () => {
      if (username) {
        const user_data = await apiService.get("search/users", { q: "ajay" });
        setUserData(user_data?.items);
      }
    })();
  }, []);
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <Text fontSize="xl" className="flex-shrink-0">
          Search History
        </Text>
        <div className="flex-grow flex justify-end max-w-md">
          <InputGroup startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
            <Input
              placeholder="Search username"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </InputGroup>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {userData.map((user_data: any) => (
          <Card.Root key={user_data.login} className="relative">
            <Card.Body gap="2">
              <Avatar.Root size="2xl" className="rounded-full">
                <Avatar.Image
                  src={user_data.avatar_url || ""}
                />
                <Avatar.Fallback name={user_data.login} />
              </Avatar.Root>
              <Card.Title mt="2">{user_data.login}</Card.Title>
              <Card.Description>
                <li>User Id : {user_data?.id}</li>
              <a href={`https://github.com/${user_data?.login}`} >View on Github</a>
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline" onClick={()=>{handleViewUser(user_data?.login)}}>
              
                  View Profile
              </Button>
            </Card.Footer>
          </Card.Root>
        ))}
      </div>
    </>
  );
}
