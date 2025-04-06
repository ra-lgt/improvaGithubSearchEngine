import {
  Box,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

interface CardLoaderProps {
  avatarSize?: string;
  lineCount?: number;
  showBottom?: boolean;
  maxWidth?: string;
  loadingType?: string[];
  count?: number;
}

const CardLoader = ({
  avatarSize = "12",
  lineCount = 4,
  showBottom = true,
  maxWidth = "",
  loadingType = ["avatar", "infoLines"],
  count = 4,
}: CardLoaderProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {[...Array(count)].map((_, index) => (
        <Box
          key={index}
          w="full"
          maxW={maxWidth}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="4"
          boxShadow="md"
        >
          <Stack spacing="4">
            {/* Avatar and Title */}
            {loadingType?.includes("avatar") && (
              <HStack spacing="4">
                <SkeletonCircle size={avatarSize} />
                <SkeletonText
                  noOfLines={2}
                  spacing="2"
                  skeletonHeight="4"
                  w="60%"
                />
              </HStack>
            )}

            {/* Info lines */}
            {loadingType?.includes("infoLines") && (
              <SkeletonText
                noOfLines={lineCount}
                spacing="3"
                skeletonHeight="4"
              />
            )}

            {/* Optional Bottom */}
            {showBottom && <Skeleton height="40px" borderRadius="md" />}
          </Stack>
        </Box>
      ))}
    </div>
  );
};

export default CardLoader;
