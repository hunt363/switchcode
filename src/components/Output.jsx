import { Box, useToast , Button, Text} from "@chakra-ui/react";
import theme from "../theme";
import { getOutput } from "../api";
import { useState } from "react";
const colors = theme.colors;
const Output = ({ editorRef, language }) => {
    const toast = useToast();
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const runCode = async () => {
        const code = editorRef.current.getValue();
        if (!code) return;
        setIsLoading(true);
        try {
            const { run: result } = await getOutput(language, code);
            result.stderr ? setIsError(true) : setIsError(false);
            isError?setOutput(result.stderr):setOutput(result.output);
        } catch (error) {
            console.log(error);
            toast({
                title: "Error",
                description: error.message || "something went wrong",
                status: "error",
                duration: 6000,
            });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Box w="50%">
            <Text mb={2} fontSize="lg">
                Output:
            </Text>
            <Button
                variant="outline"
                colorScheme="green"
                mb={4}
                onClick={runCode}
                isLoading={isLoading}
            >
                Run Code
            </Button>
            <Box
                height="75vh"
                p={2}
                border="1px solid"
                bg={colors.mantle}
                borderRadius={4}
                borderColor={isError ? colors.red : colors.mantle}
                color={isError ? colors.red : ""}
            >
                {
                    isError?output:output ? 
                        output.map((line,i)=><Text key={i}>{line}</Text>) 
                        : 
                        "Click the 'Run Code' button to see output here"
                }
            </Box>
        </Box>
    );
};

export default Output;
