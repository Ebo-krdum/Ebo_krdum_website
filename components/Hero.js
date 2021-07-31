import { Box, Text, Flex } from "@chakra-ui/layout";
/* Component */
import Image from "../ui/Image";
//import Section from "../UI/Section";
import Button from "../UI/Button";
/*
 * the array of percentage({["10%", "40%"]}) represent the  breakpoint for the element start from mobile to lager screen
 * check the link for more details:
 *https://chakra-ui.com/docs/features/responsive-styles
 */

const Hero = () => {
	return (
		<Box
			w="100%"
			h="auto"
			pt={["4.6rem", "6.2rem"]}
			pb={["1.2rem", "0rem"]}
			bg="linear-gradient(180deg, #C2B552 0%, #795806 100%)"
			align="center"
		>
			<Flex direction={["column", "row"]} w={["100%", "96%", "90%", "80%"]}>
				<Image
					src="/images/ebo-transparent.png"
					layout="fill"
					width="100%"
					objectFit="contain"
				/>
				<Flex
					direction="column"
					justify={["flex-start", "center"]}
					align="center"
				>
					<Box>
						<Text
							color="brown"
							fontWeight="bold"
							fontStyle="italic"
							fontSize={["3.8rem", "4.4rem", "6.4rem", "7rem", "8.4rem"]}
							fontFamily="Brush Script MT"
						>
							Diversity
						</Text>
					</Box>
					<Box>
						<Button>View latest Album</Button>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Hero;
