import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  HStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  console.log(t)
  console.log(t("welcome"))
  console.log(t("text"))


  return (
    <Box theme={theme} textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Text fontSize={30} fontWeight='bold'>
          {t("welcome")}!{' '}
          {t("text")}
        </Text>
        <HStack justifyContent="center" m='50px'>
          <Button
            onClick={() => changeLanguage("th")}
            colorScheme="red"
          >
            ไทย
          </Button>
          <Button
            onClick={() => changeLanguage("en")}
            colorScheme="blue"
          >
            English
          </Button>
        </HStack>
        <Text
        pl='100px'
        pr='100px'
        >
          {t("test")}
          </Text>
      </Grid>
    </Box>
  );
}

export default App;
