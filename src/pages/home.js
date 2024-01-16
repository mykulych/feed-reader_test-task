import { Box, Heading, Center } from "@chakra-ui/layout"
import { Layout } from "../components/layout/Layout"

export const Home = () => {
    return <Layout>
      <Box p={5}>
        <Center>
          <Box textAlign="center">
            <Heading as="h1" mb={4}>
              Welcome to the Feed Reader App!
            </Heading>
          </Box>
        </Center>
      </Box>
    </Layout>
}