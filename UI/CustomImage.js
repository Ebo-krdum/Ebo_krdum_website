import Styles from "../styles/image.module.css";
import Image from "next/image";

const CustomImage = ({ height, maxHeight, width, maxWidth, ...rest }) => {
	let widths = {};
	width ? (widths["width"] = width) : "100%";
	maxWidth ? (widths["maxWidth"] = maxWidth) : "100%";

	return (
		<div className={Styles.imageContainer} style={widths}>
			<Image className={Styles.image} {...rest} />
		</div>
	);
};

export default CustomImage;