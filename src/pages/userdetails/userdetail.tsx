import React, { useEffect, useState } from "react";
import { Avatar, Button, Card } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { ApiService } from "@/services/service";
import moment from "moment";
import DynamicIcon from "@/components/ui/dynamicIcons";
import { formatDate } from "@/utils/utils";
import CardLoader from "@/components/ui/cardLoader";
type UserDetailsType = {
  login: string;
  avatar_url: string;
  name?: string;
  company?: string;
  bio?: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  created_at?: string;
  location?: string;
  email?: string;
  blog?: string;
  twitter_username?: string;
  public_gists?: number;
  site_admin?: string;
  hireable?: boolean;
  updated_at?: string;
};

type UserEventType = {
  id: string;
  type: string;
  created_at: string;
  actor: {
    login: string;
    display_login: string;
  };
  payload: {
    action: string;
  };
  repo: {
    name: string;
  };
};

type RepoType={
  name: string;
  description: string;
  html_url: string;
  watchers_count: number;
  forks_count: number;
  language: string;
}
function userdetail() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const [userDetails, setUserDetails] = useState<UserDetailsType | null>(null);
  const [userRepo, setUserRepo] = useState([]);
  const [userEvent, setUserEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiService = new ApiService();

  useEffect(() => {
    (async () => {
      setUserRepo(await apiService.get(`users/${username}/repos`));
      setUserDetails(await apiService.get(`users/${username}`));
      setUserEvent(await apiService.get(`users/${username}/received_events`));
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    console.log(userRepo);
  }, [userRepo]);

  return (
    <>
   <Box display="flex" justifyContent="space-between" alignItems="center" w="full" mt={4} ml={4}>
  <Text fontSize="xl" fontWeight="bold">
    User Details
  </Text>
</Box>

      <div className="flex">
        <div></div>

        <Card.Root m="5" className="relative w-1/2">
          {loading ? (
            <CardLoader count={1} lineCount={10} />
          ) : (
            <Card.Body gap="2">
              <Avatar.Root size="2xl" className="rounded-full">
                <Avatar.Image
                  src={
                    userDetails?.avatar_url || "https://picsum.photos/200/300"
                  }
                />
                <Avatar.Fallback name={userDetails?.login || "GitHub User"} />
              </Avatar.Root>

              <Card.Title mt="2">Username: {userDetails?.login}</Card.Title>

              {userDetails?.name && (
                <Card.Description>
                  <Text>Full Name: {userDetails.name}</Text>
                </Card.Description>
              )}

              {userDetails?.company && (
                <Card.Description>
                  <Text>Company: {userDetails.company}</Text>
                </Card.Description>
              )}

              {userDetails?.location && (
                <Card.Description>
                  <Text>Location: {userDetails.location}</Text>
                </Card.Description>
              )}

              {userDetails?.email && (
                <Card.Description>
                  <Text>Email: {userDetails.email}</Text>
                </Card.Description>
              )}

              {userDetails?.blog && (
                <Card.Description>
                  <Text>
                    Blog:{" "}
                    <a href={userDetails.blog} target="_blank" rel="noreferrer">
                      {userDetails.blog}
                    </a>
                  </Text>
                </Card.Description>
              )}

              {userDetails?.twitter_username && (
                <Card.Description>
                  <Text>
                    Twitter:{" "}
                    <a
                      href={`https://twitter.com/${userDetails.twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{userDetails.twitter_username}
                    </a>
                  </Text>
                </Card.Description>
              )}

              <Card.Description>
                <Text>Followers: {userDetails?.followers}</Text>
              </Card.Description>

              <Card.Description>
                <Text>Following: {userDetails?.following}</Text>
              </Card.Description>

              <Card.Description>
                <Text>Public Repositories: {userDetails?.public_repos}</Text>
              </Card.Description>

              <Card.Description>
                <Text>Public Gists: {userDetails?.public_gists}</Text>
              </Card.Description>

              <Card.Description>
                <Text>
                  GitHub Staff: {userDetails?.site_admin ? "Yes" : "No"}
                </Text>
              </Card.Description>

              <Card.Description>
                <Text>Hireable: {userDetails?.hireable ? "Yes" : "No"}</Text>
              </Card.Description>

              <Card.Description>
                <Text>
                  Account Created At: {formatDate(userDetails?.created_at)}
                </Text>
              </Card.Description>

              <Card.Description>
                <Text>
                  Last Updated At: {formatDate(userDetails?.updated_at)}
                </Text>
              </Card.Description>

              <Card.Description>
                <Text>
                  Profile:{" "}
                  <a
                    href={userDetails?.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub
                  </a>
                </Text>
              </Card.Description>
            </Card.Body>
          )}
        </Card.Root>
        <Card.Root
          m="5"
          className="relative w-1/2 overflow-y-auto flex flex-col h-80"
          style={{ height: "100vh" }}
        >
          {loading ? (
            <CardLoader count={1} lineCount={10} />
          ) : (
            <Card.Body gap="2">
              <Card.Title mt="2" className="sticky top-0 z-10 py-2 md-50">
                User Events
              </Card.Title>
              <Card.Description className="pt-4">
                {userEvent &&
                  userEvent.map((event: UserEventType) => (
                    <div className="max-h-[500px] overflow-y-auto pr-1">
                      <div
                        key={event?.id}
                        className="flex flex-col gap-2 w-full"
                      >
                        <div className="flex items-start justify-between gap-4 px-4 py-3 bg-white dark:bg-gray-900 shadow-md rounded-xl transition hover:shadow-lg">
                          {/* Icon */}
                          <div className="pt-1 text-blue-600">
                            <DynamicIcon type={event?.type} />
                          </div>

                          {/* Text content */}
                          <div className="flex-1 text-sm text-gray-800 dark:text-gray-200">
                            <span className="font-medium">
                              {event?.actor?.display_login}{" "}
                              {event?.payload?.action}
                            </span>{" "}
                            the repository
                            <a
                              href={`https://github.com/${event?.repo?.name}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline block mt-1"
                            >
                              {event?.repo?.name}
                            </a>
                          </div>

                          {/* Timestamp */}
                          <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            {moment(event?.created_at).fromNow()}
                          </div>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700" />
                      </div>

                      <hr className="border-gray-200" />
                    </div>
                  ))}
              </Card.Description>
            </Card.Body>
          )}
        </Card.Root>
      </div>
      <Card.Root m="5" className="h-80 overflow-y-auto">
        {loading ? (
          <CardLoader count={1} lineCount={10} />
        ) : (
          <Card.Body gap="2" className="h-full">
            <Card.Title mt="2" className="sticky top-0 z-10 py-2 md-50">Repositories</Card.Title>

            <Card.Description>
              Explore all public repositories created by the user. These
              repositories include various projects, code challenges, and
              experiments contributed over time. Each repository showcases
              different skills, technologies, and problem-solving approaches.
              <div className="mt-4">
                {userRepo.map((repo : RepoType) => (
                  <Box
                    mt={4}
                    p={4}
                    borderWidth="1px"
                    borderRadius="lg"
                    boxShadow="md"
                    maxH="40"
                    overflowY="auto"
                  >
                    <Card.Title mt="2">{repo?.name}</Card.Title>
                    <Card.Description>
                      <Text>{repo?.description ?? "No Description Given"}</Text>

                      <div className="flex flex-wrap items-center justify-between mt-2 gap-y-2">
                        {/* Left Side Stats */}
                        <div className="flex flex-row gap-5">
                          {/* Watchers */}
                          <div className="flex items-center gap-1">
                            <DynamicIcon type="WatchEvent" />
                            <Text>{repo?.watchers_count}</Text>
                          </div>

                          {/* Forks */}
                          <div className="flex items-center gap-1">
                            <DynamicIcon type="ForkEvent" />
                            <Text>{repo?.forks_count}</Text>
                          </div>

                          {/* Language */}
                          <div className="flex items-center gap-1">
                            <Text>{repo?.language}</Text>
                          </div>
                        </div>

                        {/* Right Side GitHub Link */}
                        <div className="ml-auto">
                          <a
                            href={repo?.html_url}
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View on GitHub
                          </a>
                        </div>
                      </div>
                    </Card.Description>
                  </Box>
                ))}
              </div>
            </Card.Description>
          </Card.Body>
        )}
      </Card.Root>
    </>
  );
}

export default userdetail;
