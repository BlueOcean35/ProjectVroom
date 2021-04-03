import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SuggestionTabs from "./Suggestion-Tabs.js";

export default function Suggestions() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container fixed>
				<Typography
					component="div"
					style={{ backgroundColor: "#d3d3d3", height: "100vh" }}
				/>
			</Container>
		</React.Fragment>
	);
}
