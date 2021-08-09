import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import ButtonUi from "../../UI/Button";
import CustomImage from "../../UI/CustomImage";
import Section from "../../UI/Section";
const AlbumInfoSection = ({
  title,
  description,
  year,
  image,
  photographer,
  albumSpotify,
}) => {
  console.log("Title is: ", title);
  return (
    <Section title={title} bg="brown" pt="5rem" pb="2rem">
      {/* Album Image, date, button */}
      <Stack
        w={["100vw", "80vw", "60vw", "60vw", "55vw"]}
        direction={["column", "column", "column", "row", "row"]}
        spacing={["1rem", "1.2rem", "1.2rem", "0.8rem", "2rem"]}
      >
        {/* Image and button container */}
        <Box>
          {/* Image Box */}
          <Box w={["100vw", "80vw", "60vw", "32vw", "25vw"]}>
            <CustomImage
              src={`/images${image}`}
              alt={`This is Ebo album ${title} image. Photo by: ${photographer}`}
              layout="fill"
            />
          </Box>

          {/* Date and Button Flex Box */}
          <Flex
            direction={["column", "column", "row", "row", "row"]}
            justify="space-between"
            align="center"
            py="0.8rem"
          >
            <Text
              //size={["xs", "sm", "lg", "2xl", "3xl"]}
              fontSize={["1rem", "1rem", "1rem", "1rem", "1rem"]}
              fontWeight="bold"
              mb={["1rem", "1rem", "0rem", "0rem", "0rem"]}
            >
              Release Year: {year}
            </Text>
            {albumSpotify ? (
              <ButtonUi src={albumSpotify}>Listen on Spotify</ButtonUi>
            ) : (
              <p>Coming Soon on Spotify</p>
            )}
          </Flex>
        </Box>
        {/* Description Box */}
        <Box px="1rem">
          <Heading>Description</Heading>
          <Text>{description}</Text>
        </Box>
      </Stack>
    </Section>
  );
};

export default AlbumInfoSection;