import { FormControl, InputGroup, InputLeftElement, Input, Textarea } from "@chakra-ui/react";

export const TextAreaField = ({ id, register, validation, type = "text", placeholder, leftElement }) => {
  return (
    <FormControl>
      <InputGroup>
        { leftElement ? <InputLeftElement pointerEvents="none" children={leftElement} /> : null }
        <Textarea type={type} {...register(id, validation)} placeholder={placeholder} />
      </InputGroup>
    </FormControl>
  );
};
