import { Box, Flex, Heading, CheckboxGroup,  Stack, Checkbox } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  name: string,
  options: string[]
};

const Filter = ({name, options}: Props) => {
  const [selectedOption, setSelectedOption] = useState<Array<string>>(['']);

  const handleCheckboxChange = (value) => {
    setSelectedOption([value]);
  };

  return (
    <Box bg="rgba(78,110,82,0.3)" borderRadius={10} p="2rem 4rem">
      <Heading fontSize="1.8rem">{name}</Heading>
      <Flex flexDir="column" gap={3} mt={4}>
        <CheckboxGroup
        colorScheme="brand.darkGreen"
        value={selectedOption}
        onChange={(value) => handleCheckboxChange(value[1])}
        >
          <Stack spacing={[1, 3]} direction={["column"]}>
            {options.map((value, index) => (
              <Checkbox
              key={index}
              size="lg"
              value={value}
              color="brand.darkGreen"
              borderColor="brand.darkGreen"
              _checked={{
                "& .chakra-checkbox__control": { background: "brand.darkGreen" },
              }}
              >
                {value}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </Flex>
    </Box>
  );
};

export default Filter;