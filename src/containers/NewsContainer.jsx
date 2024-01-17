import { Heading, Box, Divider } from "@chakra-ui/react"
import { List } from "../components/List"
import { useGetNewsReleaseQuery } from "../store/nasa.api";
import { NewsItem } from "../components/NewsItem";

export const NewsContainer = () => {
  const { data: news, ...newsState } = useGetNewsReleaseQuery();

    return (
        <Box p={10}>
            <Heading as="h1" size="lg"> NASA Breaking news </Heading>
            <Divider my={4} />
            <List of={news} {...newsState} render={(item) => <NewsItem item={item} />} />
        </Box>
    ) 
}