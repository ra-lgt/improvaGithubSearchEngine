import React, { useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineDelete,
  AiOutlineExport,
} from "react-icons/ai";
import { Card } from "@chakra-ui/react";
import { Text, Box, VStack, HStack, Button } from "@chakra-ui/react";
import { useSearchHistory } from "@/context/searchHistoryContext";
import { useNavigate } from "react-router-dom";

type SearchHistoryItem = {
  id: string;
  search_details: string;
};

type SearchDetails = {
  timestamp: number;
  search_query: string;
  status: string;
};

function history() {
  const { getSearchHistory, addSearchTerm, deleteSearchTerm, clearAll } =
    useSearchHistory();
  const [allHistory, setAllHistory] = useState<SearchHistoryItem[]>([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  const handleDeleteSearchQuery = (id: string) => {
    deleteSearchTerm(id);
    setReload(!reload);
  };

  const handleQueryClick = (id: string, search_details: SearchDetails) => {
    deleteSearchTerm(id);
    search_details["timestamp"] = new Date().getTime(); //fix the timestamp
    let user_name = search_details?.search_query;

    addSearchTerm(JSON.stringify(search_details));

    navigate(`/result?username=${user_name}`);
  };

  useEffect(() => {
    setAllHistory(getSearchHistory());
    console.log(allHistory);
  }, [reload]);

  return (
<Box m="2%">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-2">
    <Text fontSize="xl" className="flex-shrink-0">
      Search History
    </Text>
    <Button
      size="sm"
      background="red"
      borderRadius="md"
      px={4}
      fontWeight="medium"
      color="white"
      onClick={() => {
        clearAll();
        setReload(!reload);
      }}
    >
      Clear All
    </Button>
  </div>

  <Card.Root m="5">
    <Card.Body gap="2">
      <Card.Description>
        <VStack align="start" gap={1}>
          {allHistory.map((history) => {
            let { id, search_details } = history;
            const parsedDetails: SearchDetails = JSON.parse(search_details);

            return (
              <Box w="100%" key={id}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 w-full">
                  <div className="flex flex-col sm:flex-row w-full sm:w-3/4 text-sm">
                    <Text color="gray.500" className="text-xs sm:text-sm">
                      {new Date(parsedDetails?.timestamp).toLocaleString()}
                    </Text>
                    <Text fontWeight="medium" className="text-sm mt-1 sm:mt-0" style={{marginLeft:'2%'}}>
                      Sample Query: {parsedDetails?.search_query}
                    </Text>
                  </div>

                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    {parsedDetails?.status === "success" ? (
                      <AiOutlineCheckCircle size={20} color="green" />
                    ) : (
                      <AiOutlineCloseCircle size={20} color="red" />
                    )}
                    <AiOutlineExport
                      size={20}
                      color="blue"
                      onClick={() => {
                        handleQueryClick(id, parsedDetails);
                      }}
                      className="cursor-pointer"
                    />
                    <AiOutlineDelete
                      size={20}
                      color="red"
                      onClick={() => {
                        handleDeleteSearchQuery(id);
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                <Box as="hr" borderColor="gray.200" my={2} />
              </Box>
            );
          })}
        </VStack>
      </Card.Description>
    </Card.Body>
  </Card.Root>
</Box>

  );
}

export default history;
