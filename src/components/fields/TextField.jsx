import { FormControl, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

export const TextField = ({ id, register, validation, type = "text", placeholder, leftElement }) => {
  return (
    <FormControl>
      <InputGroup>
        { leftElement ? <InputLeftElement pointerEvents="none" children={leftElement} /> : null }
        <Input type={type} {...register(id, validation)} placeholder={placeholder} />
      </InputGroup>
    </FormControl>
  );
};
