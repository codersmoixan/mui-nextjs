import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import type { AppProps } from "next/app";
import type { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  }
}))

function App({ Component, pageProps }: AppProps) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Component {...pageProps} />
    </Box>
  )
}

export default App
