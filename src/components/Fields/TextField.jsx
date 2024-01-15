import { FormControl, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

export const TextField = ({ leftElement }) => {
  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={leftElement} />
        <Input type="email" placeholder="email address" />
      </InputGroup>
    </FormControl>
  );
};
