import { useEffect, useState } from "react";
import { Avatar, Card } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { ApiService } from "@/services/service";
import moment from "moment";
import DynamicIcon from "@/components/ui/dynamicIcons";
import { formatDate } from "@/utils/utils";
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
  site_admin?:string;
  hireable?: boolean;
  updated_at?: string;
};

type UserEventType={
  id: string;
  type: string;
  created_at: string;
  actor: {
    login: string;
    display_login:string;
  };
  payload:{
    action:string
  };
  repo: {
    name: string;
  };
}
function userdetail() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const [userDetails, setUserDetails] = useState<UserDetailsType | null>(null);
  const [userRepo, setUserRepo] = useState([]);
  const [userEvent, setUserEvent] = useState([]);
  const apiService = new ApiService();

  useEffect(() => {
    (async () => {
      console.log(userRepo);
      setUserRepo(await apiService.get(`users/${username}/repos`));
      setUserDetails(await apiService.get(`users/${username}`));
      setUserEvent(await apiService.get(`users/${username}/received_events`));
    })();
  }, []);

  return (
    <>
      <div className="flex">
        <Card.Root m="5" className="relative w-1/2">
          <Card.Body gap="2">
            <Avatar.Root size="2xl" className="rounded-full">
              <Avatar.Image
                src={userDetails?.avatar_url || "https://picsum.photos/200/300"}
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
                Account Created At:{" "}
                {formatDate(userDetails?.created_at)}
              </Text>
            </Card.Description>

            <Card.Description>
              <Text>
                Last Updated At:{" "}
                {formatDate(userDetails?.updated_at)}
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
        </Card.Root>
        <Card.Root m="5" className="relative w-1/2 h-80 overflow-y-auto">
          <Card.Body gap="2">
            <Card.Title mt="2">User Events</Card.Title>
            <Card.Description>
              {userEvent &&
                userEvent.map((event : UserEventType) => (
                  <div className="max-h-[500px] overflow-y-auto pr-1">
                    <div key={event?.id} className="flex flex-col gap-2 w-full">
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
  );
}

export default userdetail;
