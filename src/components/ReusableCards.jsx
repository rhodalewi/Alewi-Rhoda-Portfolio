import { Button, Flex, Heading, Text} from "@chakra-ui/react"

/* FLEX CARDS */
export const FlexCard = ({ children, ...props }) => {
    return (
        <Flex
            as='section'
            direction='column' align='center' justify='center'
            gap={{base: '10', md: '16'}}
            px='7' py={{ base: '16', md: '24' }}
            borderTop='1px solid' borderColor='gray.800'
            {...props}
        >
            {children}
        </Flex>
    )
};

/* HEADING CARDS */
export const HeadingCard = ({ children }) => {
    return (
        <Heading
            textTransform='uppercase'
            display='flex'
            alignItems='center'
            gap='2'
            fontFamily='Fira Sans'
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight='bold'
            className='active'
            _before={{ content: '""', height: '0.5', w:{base: '4', md: '6'}, bg: 'gray.200', rounded: 'full' }}
            _after={{ content: '""', height: '0.5', w:{base: '4', md: '6'}, bg: 'gray.200', rounded: 'full' }}
        >
            {children}
        </Heading>
  )
};


/* BUTTON CARDS */
export const ButtonCard = ({ children, gradient = true, ...props }) => {
    return (
        <Button
            bg={gradient ? "linear-gradient(to right, rgb(173, 70, 255), rgb(43, 127, 255))" : 'transparent'}
            color='white'
            className='group'
            fontFamily='Poppins'
            fontWeight='medium'
            fontSize={{base: 'sm', md: 'md'}}
            rounded='lg'
            /* width={{ base: "auto", md: "10.5rem" }} */
            width="fit-content"
            alignSelf="center"
            overflow='hidden'
            transition='all 0.5s ease-in-out'
            {...props}
        >
            {children}
        </Button>
    )
};


/* FOOTER CARD */
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        
        <Text
            fontSize={{ base: 'xs', md: 'sm' }}
            fontFamily='Poppins'
            color='gray.400'
            textAlign='center'
            textWrap='wrap'
            p='6'
            borderTop='1px solid' borderColor='gray.900'
        >
            &copy; rhodalewi {currentYear} | Designed & Coded by Rhoda Alewi
        </Text>
       
    )
};


/* TEXT CARD */
export const TextCard = ({ children, ...props }) => {
    return (
        <Text
            fontSize={{ base: 'xs', md: 'sm' }}
            lineHeight={{ base: 'tall', md: 'taller' }}
            {...props}
        >
            {children}
        </Text>
    )
};