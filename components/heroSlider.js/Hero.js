import { Box, Flex, Text } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import hero from "../../public/images/ebo-transparent.png";
import Button from "../UI/Button";
/*
 * the array of percentage({["10%", "40%"]}) represent the  breakpoint for the element start from mobile to lager screen
 * check the link for more details:
 *https://chakra-ui.com/docs/features/responsive-styles
 * add blur from Next js check ou :https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/placeholder.js
 */

const Hero = ({ slug }) => {
	return (
		<Box
			w="100%"
			position="relative"
			h={["90Vh", "65vh", "70vh", "88vh"]}
			//pt={["1.6rem", "7.6rem", "6.2rem"]}
			pt="1%"
			//pb={["1.2rem", "0rem"]}
			bg="linear-gradient(180deg, #C2B552 0%, #795806 100%)"
			align="center"
		>
			<Flex
				border="solid 2px red"
				direction={["column", "row"]}
				w={["100%", "96%", "90%", "80%"]}
				h="100%"
				justifyContent={["flex-end"]}
				align="center"
			>
				<Box
					w="100%"
					position="absolute"
					top="0"
					bottom="0"
					left="0"
					right="0"
					border="solid 2px blue"
					bg="red"
				>
					<Image
						src={hero}
						alt="This is the main hero image of Ebo Krdums website"
						layout="fill"
						placeholder="blur"
						objectFit="contain"
					/>
				</Box>
				<VStack
					//direction="column"
					spacing={-1}
					align="center"
					//mt={["0%", "15%"]}
					mb={["10%", "15%"]}
					//ml={["20%", "0%"]}
					//mr={["20%", "0%"]}
					border="1px blue solid"
					zIndex={1}
					position="absolute"
				>
					<Box>
						<Text color="brown" fontWeight="bold" fontStyle="italic">
							Latest Album
						</Text>
					</Box>
					<Box>
						<Text
							color="brown"
							fontWeight="bold"
							fontStyle="italic"
							fontSize={["2.8rem", "2.8rem", "3.5rem", "5rem", "6rem"]}
							fontFamily="Alex Brush, cursive"
						>
							Diversity
						</Text>
					</Box>
					<Box>
						<Link href={`/album/${slug}`}>
							<a>
								<Button>View Album</Button>
							</a>
						</Link>
					</Box>
				</VStack>
			</Flex>
		</Box>
	);
};

export default Hero;