import { Stack } from "@chakra-ui/react";

export const List = ({ of, render, isLoading, isError }) => {
  if (isLoading) return "Loading...";

  if (isError) return "Error!";

  return (
    <Stack spacing={4}>{of.map((item, index) => render(item, index))}</Stack>
  );
};
