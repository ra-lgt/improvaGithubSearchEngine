import React, { useEffect, useState } from "react";
import { Avatar, Button, Card } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { ApiService } from "@/services/service";
function userdetail() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const [userDetails, setUserDetails] = useState({});
  const [userRepo,setUserRepo]=useState([]);
  const apiService = new ApiService();

  useEffect(() => {
    (async () => {
      setUserRepo(await apiService.get(`users/${username}/repos`));
      setUserDetails( await apiService.get(`users/${username}`));
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
                {new Date(userDetails?.created_at).toLocaleDateString()}
              </Text>
            </Card.Description>

            <Card.Description>
              <Text>
                Last Updated At:{" "}
                {new Date(userDetails?.updated_at).toLocaleDateString()}
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
        <Card.Root m="5" className="relative w-1/2">
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
  );
}

export default userdetail;
