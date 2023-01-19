import { Box } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function MyComponenet() {
  const { t } = useTranslation();
  return <Box>{t("text")}</Box>;
}

export default MyComponenet;