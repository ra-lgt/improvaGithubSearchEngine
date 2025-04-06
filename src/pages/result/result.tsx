import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Avatar, Button, Card } from "@chakra-ui/react";
import { Text, Input, InputGroup, Kbd,Box } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { ApiService } from "@/services/service";
import { useNavigate } from 'react-router-dom';
import CardLoader from "@/components/ui/cardLoader";


type User={
  login: string;

}
export default function Result() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const [userData, setUserData] = useState([]);
  const [allUserData,setAllUserData]=useState([]);
  const [loading,setLoading]=useState(true);
  const navigate = useNavigate();
  const apiService = new ApiService();

  const handleViewUser=(user_name:string)=>{
    navigate(`/userdetail?username=${user_name}`)

  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const user_query = e.currentTarget.value.toLowerCase();
    
    setUserData(allUserData.filter((user:User) => {
      return user?.login?.toLowerCase().includes(user_query);
    }));
  };

  useEffect(() => {
    (async () => {
      if (username) {
        const user_data = await apiService.get("search/users", { q: username });
        setAllUserData(user_data?.items)
        setUserData(user_data?.items);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    })();
  }, []);
  return (

    <Box m="2%">
   <Text 
  display="flex" 
  justifyContent="center" 
  mt="1%" 
  fontWeight="500" 
  fontSize="2xl" 
  width="100%"
>
  Results
</Text>
    <div className="h-2 md:h-4 lg:h-6" />

  <div className="flex justify-between items-center w-full">
    <Text fontSize="xl" className="flex-shrink-0">
      Total Searches
    </Text>
    <div className="flex-grow flex justify-end max-w-md">
      <InputGroup startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
        <Input
          placeholder="Search username"
          className="w-full px-4 py-2 border rounded-lg"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
      </InputGroup>
    </div>
  </div>

  <div className="h-2 md:h-4 lg:h-6" />


      {loading && (
          <CardLoader count={12}/>

        )

        }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

        {!loading && userData && userData.map((user_data: any) => (
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
    </Box>
  );
}
