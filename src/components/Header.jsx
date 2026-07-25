import { Box, Drawer, Flex, Icon, Link, IconButton, Portal, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { IoMenu, IoClose } from 'react-icons/io5';
import { navLinks } from "../data";

const Header = () => {
    const [openMobile, setOpenMobile] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <Flex
            align='center'
            justify='space-between'
            w='full'
            px={{ base: '7', md: '12', lg: '20' }}
            py={isScrolled ? {base: '3', md: '6'} : {base: '5', md: '12'}}
            position='fixed'
            top='0'
            shadow={{ base: 'sm', md: 'none'}}
            shadowColor='gray-700/20'
            zIndex='overlay'
            bg={isScrolled ? 'black.subtle' : 'transparent'}
            backdropFilter={isScrolled ? 'blur(12px)' : 'none'}
            shadow={isScrolled ? 'md' : 'none'} 
            shadowColor={isScrolled ? 'gray.700/20' : 'none'}
        >
            <Text fontSize={{base: '4', md: 'xl', lg: '2xl'}} fontWeight='bold' >Rhoda.Alewi</Text>

            <Box spaceX='8' hideBelow='md'>
                {navLinks.map(links => (
                    <ScrollLink
                        key={links.id}
                        to={links.id}
                        spy={true}
                        smooth={true}
                        duration={700}
                        offset={-80}
                        onSetActive={() => setActiveLink(links.id)}
                    > 
                        <Link
                            position='relative'
                            textDecor='none'
                            color={activeLink === links.id ? 'transparent' : 'gray.100'}
                            bgGradient={activeLink === links.id ? 'to-br' : 'none'}
                            gradientFrom='purple.500'
                            gradientTo='blue.500'
                            bgClip={activeLink === links.id ? 'text' : 'none'}
                            
                            _after={{
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: '-1',
                                width: '0%',
                                height: '0.5',
                                bgGradient: "to-r",
                                gradientFrom: 'purple.500',
                                gradientTo: 'blue.500',
                                transition: 'width 0.5s ease'
                            }}

                            _hover={{
                                bgGradient: "to-r",
                                gradientFrom: 'purple.500',
                                gradientTo: 'blue.500',
                                color: 'transparent',
                                bgClip: 'text',
                                _after: {
                                    width: '5'
                                },
                            }}
                            >
                                {links.name}
                        </Link>
                    </ScrollLink>
                    
                ))}
            </Box>

            <IconButton display={{md: 'none'}} onClick={() => setOpenMobile(true)} bg='purple.500/20' color='white' rounded='lg' transition='all 0.7s ease-in-out' _hover={{ rotate: '180deg'}}>
                <IoMenu />
            </IconButton>

            {/* Mobile navigation */} 
            <Drawer.Root open={openMobile} onOpenChange={(e) => setOpenMobile(e.open)} >
                <Portal>
                    <Drawer.Positioner>
                        <Drawer.Content bg='black.subtle' w={{base: '64', sm: '80'}} px='4'>
                            <Drawer.Body >
                                <VStack align='start' gap='4' my='28'>
                                    {navLinks.map(links => (
                                        <ScrollLink
                                            to={links.id}
                                            key={links.id}
                                            spy={true}
                                            smooth={true}
                                            duration={700}
                                            offset={-80}
                                            onSetActive={() => setActiveLink(links.id)}
                                            style={{width: '100%'}}
                                        >
                                            <Link
                                                w='full' py='2' pl='4'
                                                fontSize='md' gap='4'
                                                rounded='lg'
                                                color={activeLink === links.id ? 'purple.400' : 'gray.100'}
                                                bg={activeLink === links.id ? 'purple.500/10' : 'transparent'}

                                                _hover={{ color: 'purple.400' }}
                                                onClick={() => setOpenMobile(false)}
                                            >
                                                <Icon as={links.icon} size='sm' />
                                                <Text> {links.name} </Text>
                                            </Link>
                                        </ScrollLink>
                                    ))}
                                </VStack>
                            </Drawer.Body>

                            <Drawer.CloseTrigger asChild>
                                <IconButton
                                    display={{ md: 'none' }}
                                    onClick={() => setOpenMobile(true)} bg='purple.500/20'
                                    color='white'
                                    rounded='lg'
                                    mt='2'
                                    mr='4'
                                    transition='all 0.7s ease-in-out' _hover={{ rotate: '180deg' }}
                                >
                                    <IoClose />
                                </IconButton>
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                    </Drawer.Positioner>
            </Portal>
            </Drawer.Root>
        </Flex>
    )
};

export default Header;