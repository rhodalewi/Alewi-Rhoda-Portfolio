import { FlexCard, HeadingCard } from "./ReusableCards";
import { Box, Flex, HStack, Icon, Link, Text, VStack } from '@chakra-ui/react';
import { socialIcons } from '../data';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <FlexCard id='contact'>
            <HeadingCard>Get in touch </HeadingCard>

            <Flex direction={{ base: 'column', lg: 'row'}} align={{base: 'start', lg: 'center'}} gap='16' w='full' maxW='6xl'>
                {/* Text side */}
                <VStack gap='8' align='start' flex='1'>
                    <Text
                        textTransform='uppercase'
                        fontFamily='Poppins' fontSize={{base:'lg', md: 'xl'}}
                        bgGradient='to-br' gradientFrom='pink.500' gradientTo='blue.500' bgClip='text' color='transparent'
                    >
                        Do you have a project to discuss?
                    </Text>

                    <Flex direction={{base: 'column', md: 'row'}} justify='space-between' gap={{base: '10', md: '20'}} >
                        <Box spaceY='2'>
                            <Text textTransform='uppercase' fontSize={{ mdTo2xl: 'lg' }}>Contact</Text>

                            {socialIcons.filter(social => social.id === 'Email').map(email => (
                                <Link
                                    key={email.id}
                                    href={email.href}
                                    color='blue.400'
                                    _hover={{ textDecor: 'underline', opacity: '0.8' }}
                                >
                                    {email.text}
                                </Link>
                            ))}
                        </Box>

                        <Box spaceY='3'>
                            <Text textTransform='uppercase' fontSize={{ mdTo2xl: 'lg' }}>Find me on</Text>

                            <HStack gap='4'>
                                {socialIcons.filter(email => email.id !== 'Email').map(socials => (
                                    <Link
                                        key={socials.id}
                                        href={socials.href}
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        {...socials.style} p='1.5'
                                        _hover={{ opacity: '0.8' }}
                                    >
                                        <Icon as={socials.icon} size='sm' />
                                    </Link>
                                ))}
                            </HStack>
                        </Box>
                    </Flex>
                </VStack>

                {/* Form side */}
                <ContactForm />
            </Flex>
        </FlexCard>
    )
};

export default Contact; 