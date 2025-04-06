import React, { useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineDelete,
  AiOutlineExport
} from "react-icons/ai";
import { Card } from "@chakra-ui/react";
import {
  Text,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useSearchHistory } from "@/context/searchHistoryContext";
import { useNavigate } from 'react-router-dom';

type SearchHistoryItem = {
  id: string;
  search_details: string;
};

type SearchDetails={
  timestamp:string,
  search_query:string,
  status:string,
}

function history() {
  const { getSearchHistory,addSearchTerm,deleteSearchTerm,clearAll } = useSearchHistory();
  const [allHistory, setAllHistory] = useState<SearchHistoryItem[]>([]);
  const [reload,setReload]=useState(false)
  const navigate = useNavigate();


  const handleDeleteSearchQuery=(id:string)=>{
    deleteSearchTerm(id);
    setReload(!reload);
  }

  const handleQueryClick=(id:string,search_details:SearchDetails)=>{
    deleteSearchTerm(id)
    search_details['timestamp'] =String(new Date().getTime())  //fix the timestamp
    let user_name=search_details?.search_query

    addSearchTerm(JSON.stringify(search_details))

    navigate(`/result?username=${user_name}`)



  }


  useEffect(() => {
    setAllHistory(getSearchHistory())
  }, [reload])

  
  return (
    <Box m="2%">
      <div className="flex justify-between items-center w-full">
        <Text fontSize="xl" className="flex-shrink-0">
          Search History
        </Text>
      </div>

      <Card.Root m="5">
        <Card.Body gap="2">
          <Card.Description>
            <VStack align="start" gap={1}>
              {allHistory.map((history)=>{
                let { id, search_details } = history;

                const parsedDetails: SearchDetails = JSON.parse(search_details);

                return(
                <Box w="100%">
                  <HStack justify="space-between">
                    <Box display="flex" w="50%" justifyContent="space-between">
                      <Text fontSize="sm" color="gray.500">
                        {new Date(parsedDetails?.timestamp).toLocaleString()}
                      </Text>
                      <Text fontWeight="medium">Sample Query : {parsedDetails?.search_query}</Text>
                    </Box>
                    <Box w="5%" display="flex" justifyContent="space-between">
                      {parsedDetails?.status=="success" ? (
                              <AiOutlineCheckCircle size={24} color="green" />
                      ):(
                              <AiOutlineCloseCircle size={24} color="red" />
                      )
                      }
                      <AiOutlineExport size={24} color="blue" onClick={()=>{handleQueryClick(id,parsedDetails)}}/>   
                      <AiOutlineDelete size={24} color="red" onClick={()=>{handleDeleteSearchQuery(id)}}/>
                    </Box>
                  </HStack>
                  <Box as="hr" borderColor="gray.200" my={1} />
                </Box>
                )

              })}

            </VStack>
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}

export default history;
