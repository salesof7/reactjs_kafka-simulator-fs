import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export function Home() {
  return (
    <Box
      width={"100vw"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        spacing={"24px"}
        maxWidth={"1220px"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
      >
        <Typography
          variant="h1"
          fontFamily={"'Gravitas One', cursive"}
          fontSize={40}
          marginTop={"56px"}
        >
          CODE DELIVERY
        </Typography>

        <Box
          sx={{
            width: "1220px",
            height: "686px",
            backgroundColor: "#f0f0f0",
            borderRadius: "27px",
          }}
        ></Box>

        <Stack direction="row" justifyContent={"space-between"} width={"100%"}>
          <Stack direction="row" spacing={"32px"}>
            <Button
              variant="contained"
              sx={{
                width: "320px",
                backgroundColor: "#000",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Goudy Bookletter 1911', serif",
                  marginLeft: "10px",
                  letterSpacing: "1.5px",
                }}
              >
                SELECT ROUTE
              </Typography>
              <ExpandMoreIcon sx={{ fontSize: "32px" }} />
            </Button>

            <IconButton
              sx={{
                width: "52px",
                height: "52px",
                areaLabel: "delete",
                backgroundColor: "#000",
                borderRadius: "12px",
              }}
            >
              <ChevronRightIcon
                sx={{
                  fontSize: "36px",
                  color: "#fff",
                }}
              />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={"32px"} paddingRight={"24px"}>
            <Link href="https://www.linkedin.com/in/salesof7/">
              <LinkedInIcon
                sx={{
                  fontSize: "42px",
                  color: "#fff",
                }}
              />
            </Link>
            <Link href="https://github.com/salesof7">
              <GitHubIcon
                sx={{
                  fontSize: "40px",
                  color: "#fff",
                }}
              />
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
