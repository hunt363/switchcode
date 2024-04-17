import React from "react";
import {Box, Button, Text ,Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import theme from "../theme";
import { LANGUAGE_VERSIONS } from "../constants";
const languages=Object.entries(LANGUAGE_VERSIONS);
const colors=theme.colors;
const ACTIVE_COLOR=colors.lavender;
const ACTIVE_BG=colors.crust;
const LanguageSelector = ({language, onSelect}) => {
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} color={colors.text} fontSize="lg">
                Language:
            </Text>
            <Menu isLazy>
                <MenuButton as={Button}>
                    {language}
                </MenuButton>
                <MenuList bg={colors.mantle}>
                    {
                        languages.map(([activeLang,version])=>(
                            <MenuItem 
                                key={activeLang}
                                onClick={()=>onSelect(activeLang)}
                                color={
                                    activeLang===language?ACTIVE_COLOR:colors.text
                                }
                                bg={
                                    activeLang===language?ACTIVE_BG:"transparent"
                                }
                                _hover={{
                                    color:ACTIVE_COLOR, bg:ACTIVE_BG
                                }}
                            >
                                {activeLang}&nbsp;
                                <Text as="span" color={colors.subtext} fontSize='sm'>
                                    ({version})
                                </Text>
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </Box>
    );
};

export default LanguageSelector;
