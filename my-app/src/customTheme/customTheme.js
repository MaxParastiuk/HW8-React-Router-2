import { createTheme } from "@mui/material/styles";

const themeBtn = createTheme({
	palette: {
		primary: { main: "#358780", contrastText: "#fff" },
		secondary: { main: "#c60000", contrastText: "#fff" },
	},
});

const marginInput = {
	mb: 2,
	"&:nth-of-type(1)": {
		mt: 4,
	},
};

export { themeBtn, marginInput };
