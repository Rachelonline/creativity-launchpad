import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";
import Space from "./images/space.png";
import Rocket from "./images/rocket.gif";
import "@fontsource/monoton";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box display={"flex"}>
        <img
          alt="Space"
          src={Space}
          style={{
            width: "100%",
            position: "relative",
          }}
        />
        <Box
          position={"absolute"}
          top={0}
          width={"100%"}
          height={"100vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img
            alt="Rocket"
            src={Rocket}
            style={{ transform: "rotate(232deg)", width: "500px" }}
          />
          <Typography color={"white"} variant="h1">
            Creativity <br /> Launchpad
          </Typography>
          <Box margin={135} />
          <a
            href={"https://time.com/collection/next-generation-leaders/"}
            alt="Time"
          >
            <Box
              bgcolor={"#fcf"}
              height={100}
              width={100}
              margin={10}
              borderRadius={100}
            />
          </a>
          <a href={"https://www.patatap.com/"} alt="Patatap">
            <Box
              bgcolor={"#fcc"}
              height={100}
              width={100}
              margin={10}
              borderRadius={100}
            />
          </a>
          <a
            href={"https://www.instructables.com/projects/"}
            alt="Instructables"
          >
            <Box
              bgcolor={"#fc9"}
              height={100}
              width={100}
              margin={10}
              borderRadius={100}
            />
          </a>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: "Monoton", // Default font for all variants
    h1: {
      fontFamily: "Monoton",
      fontSize: "5rem",
      textTransform: "none",
    },
  },
});

export default App;
