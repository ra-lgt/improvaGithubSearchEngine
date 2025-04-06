import React, { useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import { Card } from "@chakra-ui/react";
import {
  Text,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useSearchHistory } from "@/context/searchHistoryContext";

type SearchHistoryItem = {
  id: string;
  search_details: string;
};

function history() {
  const { getSearchHistory,addSearchTerm,deleteSearchTerm,clearAll } = useSearchHistory();
  const [allHistory, setAllHistory] = useState<SearchHistoryItem[]>([]);


  useEffect(() => {
    setAllHistory(getSearchHistory())
  }, [])


  useEffect(()=>{
    console.log(allHistory)
  },[allHistory])
  
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
                search_details=JSON.parse(search_details)

                return(
                <Box w="100%">
                  <HStack justify="space-between">
                    <Box display="flex" w="50%" justifyContent="space-between">
                      <Text fontSize="sm" color="gray.500">
                        {new Date().toLocaleString()}
                      </Text>
                      <Text fontWeight="medium">Sample Item {i + 1}</Text>
                    </Box>
                    <Box w="5%" display="flex" justifyContent="space-between">
                      <AiOutlineCheckCircle size={24} color="green" />
                      <AiOutlineDelete size={24} color="red" />
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
