import { Box } from "@chakra-ui/react"

export type WrapperVariant = "small" | "regular"

interface WrapperProps {
  variant?: 'small' | 'regular'
  children
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
    return (
      <Box
        mt={8}
        mx="auto"
        maxW={variant === "regular" ? "800px" : "400px"}
      >
        {children}
      </Box>
    )
}