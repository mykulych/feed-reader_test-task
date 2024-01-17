import { Stack } from "@chakra-ui/react";
import { LoadingIndicator } from "./LoadingIndicator";
import { ErrorMessage } from "./ErrorMessage";

export const List = ({ of, render, isLoading, isError }) => {
  if (isLoading) return <LoadingIndicator />

  if (isError) return <ErrorMessage message="Something went wrong, try again later" />

  if (of.length === 0) return <ErrorMessage message="There are no items to display at the moment." />

  return (
    <Stack spacing={4}>{of.map((item, index) => render(item, index))}</Stack>
  );
};
