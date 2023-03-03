import Head from 'next/head'
import Image from 'next/image'
import makeStyles, { Theme } from "utils/styles/makeStyles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import useSwitchTheme from "containers/App/hooks/useSwitchTheme";
import useNotifier from "components/Snackbar/hooks/useNotifier";
import type { VariantType } from "notistack";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(0, 4),
  },
  main: {
    minHeight: '100vh',
    padding: theme.spacing(8, 0),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textDecoration: 'none',
    textAlign: 'center',
    '& a': {
      textDecoration: 'none',
    }
  },
  description: {
    margin: theme.spacing(8, 0),
    lineHeight: 1.5,
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  code: {
    borderRadius: 5,
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: 800
  },
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: 10,
    transition: 'color 0.15s ease, border-color 0.15s ease',
    maxWidth: 300,
    '&:hover, &:focus, &:active': {
      color: '#0070f3',
      borderColor: '#0070f3'
    },
    '& h2': {
      margin: '0 0 1rem 0',
      fontSize: '1.5rem'
    },
    '& p': {
      margin: 0,
      fontSize: '1.25rem',
      lineHeight: 1.5
    }
  },
  logo: {
    height: '1em',
    marginLeft: '0.5rem'
  },
  footer: {
    display: 'flex',
    flex: 1,
    padding: '2rem 0',
    borderTop: '1px solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1
    }
  }
}), 'Home')

export default function Home() {
  const classes = useStyles()
  const { mode, presets, switchMode, switchPresets } = useSwitchTheme()
  const notify = useNotifier()

  const handleNotify = (variant: VariantType) => {
    notify('一条测试信息', variant)
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Box>
        <Button onClick={() => switchMode('light')}>Light</Button>
        <Button onClick={() => switchMode('dark')}>Dark</Button>
        <Button onClick={() => switchPresets('one')}>default</Button>
        <Button onClick={() => switchPresets('two')}>cyan</Button>
        <Button onClick={() => switchPresets('three')}>purple</Button>
        <Button onClick={() => switchPresets('four')}>blue</Button>
        <Button onClick={() => switchPresets('five')}>orange</Button>
        <Button onClick={() => switchPresets('six')}>red</Button>
      </Box>
      <Box mt={4}>
        <Button onClick={() => handleNotify('success')}>success</Button>
        <Button onClick={() => handleNotify('warning')}>warning</Button>
        <Button onClick={() => handleNotify('error')}>error</Button>
      </Box>

      <main className={classes.main}>
        <Typography component="h1" className={classes.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Typography>

        <Typography component="p" className={classes.description}>
          Get started by editing{' '}
          <Typography component="code" className={classes.code}>pages/index.js</Typography>
        </Typography>

        <div className={classes.grid}>
          <a href="https://nextjs.org/docs" className={classes.card}>
            <Typography component="h2">Documentation &rarr;</Typography>
            <Typography component="p">Find in-depth information about Next.js features and API.</Typography>
          </a>

          <a href="https://nextjs.org/learn" className={classes.card}>
            <Typography component="h2">Learn &rarr;</Typography>
            <Typography component="p">Learn about Next.js in an interactive course with quizzes!</Typography>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={classes.card}
          >
            <Typography component="h2">Examples &rarr;</Typography>
            <Typography component="p">Discover and deploy boilerplate example Next.js projects.</Typography>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={classes.card}
          >
            <Typography component="h2">Deploy &rarr;</Typography>
            <Typography component="p">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Typography>
          </a>
        </div>
      </main>

      <footer className={classes.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={classes.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
