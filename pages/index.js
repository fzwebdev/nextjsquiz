import Head from 'next/head'
import Link from 'next/link'
import { Container, Box, Flex, Text, Button, Stack } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Perfect 20</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Perfect 20</a>
        </h1>

        <p className={styles.description}>
          A pool of objective type questions for online attempt with spontaneous answer and result
        </p>

        <Container maxW="xl" centerContent>
          <Link href="">
            <Box as="button"
              p={4}
              m={1}
              w="xs"
              color="white"
              fontWeight="bold"
              borderRadius="md"
              bgGradient="linear(to-r, teal.500,green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}>
              Login
            </Box>
          </Link>

          <Link href="">
            <Box as="button"
              w="xs"
              m={1}
              p={4}
              color="white"
              fontWeight="bold"
              borderRadius="md"
              bgGradient="linear(to-r, teal.500,green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}>
              Create account
            </Box>
          </Link>

        </Container>
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>About Perfect 20 &rarr;</h3>
            <p>The CBSE has proposed 20 marks objective questions in the Board paper from 2020 Examinations. Register yourself to make yourself self-sufficient. You can take a chapter test or you have the option of multiple selection of chapters of a subject. Every time you login you will get a different set of 20 questions from a pool of questions. You will get 20 minutes to attempt any test. After attempting, submit your answers and you will be given a detailed report. Your tests will be saved for your future reference and you can attempt the test again. Happy learning!!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{' '}
          <img src="http://perfect20.foreverbooks.co.in/images/logo.png" alt="Rachna sagar" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
