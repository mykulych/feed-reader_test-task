import { Card, CardBody, Heading, Text, Box, Flex, Button, chakra } from "@chakra-ui/react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const CFaEdit = chakra(FaEdit);
const CFaTrash = chakra(FaTrash);

export function PostItem({item, onEdit, onRemove}) {
  const [show, setShow] = useState(false)
  return (
    <Card onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <CardBody>
        <Box key={item.id} p={5}>
          <Flex justifyContent="space-between">
            <Heading fontSize="xl">{item.title}</Heading>
            <Flex
              w="30%"
              justifyContent="flex-end"
              gap={2}
              visibility={show ? "visible" : "hidden"}
            >
              <Button onClick={() => onEdit(item)}>
                <CFaEdit />
              </Button>
              <Button onClick={() => onRemove({id: item.id})}>
                <CFaTrash />
              </Button>
            </Flex>
          </Flex>
          <Text mt={4}>{item.body}</Text>
        </Box>
      </CardBody>
    </Card>
  );
}
