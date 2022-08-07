import { Box, styled } from "@mui/material";

export default function SplashScreen() {
  return <StyleSplash>로딩...</StyleSplash>;
}

const StyleSplash = styled(Box)(({ theme, ...props }) => ({
  position: "absolute",
  content: "''",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
}));
