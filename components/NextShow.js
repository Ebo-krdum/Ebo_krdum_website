import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BiCalendarCheck, BiLocationPlus, BiTimeFive } from "react-icons/bi";
import classes from "../styles/roundImage.module.css";
import ButtonUi from "./UI/Button";

const NextShow = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      bg="yellow"
      w={["90vw", "80vw", "80vw", "80vw", "50vw"]}
      px={["1rem", "1rem", "1rem", "1rem", "2rem"]}
      py={["2rem", "2rem"]}
      //mx={["5%", "16%", "15%", "20%", "25%"]}
      //mb={["2rem", "6rem"]}
      align={["center", "center", "center"]}
      //border="1px solid red"

      justify="space-evenly"
    >
      {/*image section */}
      <Box
        align="center"
        // border="1px white solid"
        className={classes.image}
      >
        <Image
          src="/images/ebo-next-show2.jpg"
          alt="Event image"
          width={400}
          height={400}
          objectFit="cover"
          // layout="fill"
        />
      </Box>

      <Stack
        alignItems="center"
        spacing={["2%"]}
        direction="column"
        ml={["0%", "0%", "5%"]}
        mt={["2%", "2%", "0%"]}
        //border="1px solid blue"
        // w="80%"
        align="center"
      >
        <Heading as="h3" size="xl" pb="1rem">
          FASCHING
        </Heading>
        {/* date,time place section */}
        <Stack direction="column" pb="1rem" justify="center">
          <Flex fontSize={["1rem", "1.2rem"]} align="center">
            <BiCalendarCheck />
            <Box pl="0.4rem">2021-09-30</Box>
          </Flex>

          <Flex fontSize={["1rem", "1.2rem"]} align="center">
            <BiTimeFive />
            <Box pl="0.4rem">20:00</Box>
          </Flex>
          <Flex fontSize={["1rem", "1.2rem"]} align="center">
            <BiLocationPlus />
            <Box pl="0.4rem">Kungsgatan 34, Stockholm</Box>
          </Flex>
        </Stack>
        {/* button and link section */}
        <Flex>
          <Box>
            <ChakraLink
              href="https://www.fasching.se/ebo-krdum/#2021-09-30T20-00"
              isExternal
              mr="1rem"
            >
              <ButtonUi>Book tickets</ButtonUi>
            </ChakraLink>
          </Box>
          <Box color="brown" align="center" pt="1rem">
            <Link href="/shows">
              <a>See all shows</a>
            </Link>
          </Box>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default NextShow;
