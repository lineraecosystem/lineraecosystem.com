import { Link } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import NextLink from "next/link";

import { useTranslate } from "../../context/TranslateProvider";

import MenuButton from "./MenuButton";

function LanguageChooser() {
  const { locale } = useTranslate();

  return (
    <MenuButton
      menus={[
        {
          href: "",
          children: (
            <NextLink href="" passHref locale="en">
              <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                English
              </Link>
            </NextLink>
          ),
        },
        {
          href: "",
          children: (
            <NextLink href="" passHref locale="zh_CN">
              <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                简体中文
              </Link>
            </NextLink>
          ),
        },
        {
          href: "",
          children: (
            <NextLink href="" passHref locale="zh_TW">
              <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                繁體中文
              </Link>
            </NextLink>
          ),
        },
      ]}
      icon={solid("chevron-down")}
      text={locale ? locale.toUpperCase() : " - "}
    />
  );
}

export default LanguageChooser;
