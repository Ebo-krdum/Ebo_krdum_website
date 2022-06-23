import { Box } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grammy } from "./Grammy";
import Hero from "./Hero";

export const HeroSlider = ({ slug }) => {
	return (
		<Box
			w="100vw"
			h={["90Vh", "65vh", "70vh", "88vh"]}
			overflow="hidden"
			zIndex="1"
			alignSelf="center"
			border="solid 2px yellow"
		>
			<Carousel
				width="100%"
				showArrows={false}
				showThumbs={false}
				infiniteLoop
				//autoPlay
				interval={6000}
				showStatus={false}
				useKeyboardArrows
				transitionTime={1000}
			>
				<div>
					<Hero slug={slug} />
				</div>
				<div>
					<Grammy />
				</div>
			</Carousel>
		</Box>
	);
};