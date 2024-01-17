import { useState } from "react";
import { FormControl, InputGroup, InputLeftElement, Input, InputRightElement, Button } from "@chakra-ui/react";

export const PasswordField = ({ id, register, validation, leftElement }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          children={leftElement}
        />
        <Input
          {...register(id, validation)}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleShowClick}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
