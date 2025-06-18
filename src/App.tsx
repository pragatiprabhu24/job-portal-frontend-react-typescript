import { createTheme, MantineProvider, Slider, Text } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@mantine/carousel/styles.css"

function App() {
  const theme = createTheme({
    colors: {
      "mine-shaft": [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
      green: [
        "#f0fdf4",
        "#dcfce7",
        "#b9f8cf",
        "#7bf1a8",
        "#05df72",
        "#00c950",
        "#00a63e",
        "#008236",
        "#016630",
        "#0d542b",
        "#032e15",
      ],
    },
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
