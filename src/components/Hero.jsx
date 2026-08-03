import { Box, Flex, Icon, Link, Marquee, Span, Text } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import Header from "./Header";
import { ButtonCard } from "./ReusableCards";
import { skillSet } from "../data";
import { LuDownload } from "react-icons/lu";
import {  BiSolidRightArrowAlt } from "react-icons/bi";


const Hero = () => {
    return (
        <Box
            h={{ base: 'full', lg: 'vh' }}
            bgImage={{ base: "url('/Mobile_Hero_Background.png')", md: "url('/Desktop-Hero-Background.png')" }}
            bgSize='cover'
            bgRepeat='no-repeat'
            bgPos='center'
            position='relative'
            mdDown={{pb: '12'}}
        >
            <Header />

            <Flex
                as='section'
                id="home"
                p='7' 
                pt={{ base: '28', lg: '40' }}
                mb={{base: '20', lg: '0'}}
                justify='center'
                textAlign={{ base: 'center', md: 'start' }}
            >
                <Box>
                    {/* Texts */}
                    <Span color='gray.200' fontSize={{ base: 'xs', md: 'sm' }} fontFamily='Poppins'> Hi, my name is </Span>
                    
                    <Text className="active" fontSize={{ base: '4xl', md: '6xl' }} fontWeight='bold'>Rhoda Alewi.</Text>

                    <Text maxW='lg' color='gray.300' mt='2' fontSize={{ base: 'xs', md: 'sm' }} fontFamily='Poppins' lineHeight='tall'> I’m a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive web applications. </Text>
                    
                    {/* Buttons */}
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        gap={{ base: '3', md: '6' }} mt='8' /* justifySelf={{ base: 'center', md: 'start' }}  */
                        align={{ base: "center", md: "flex-start" }}
                    >
                        {/* Download CV Button*/}
                        <ButtonCard
                            as={Link}
                            href="/Alewi-Rhoda-Frontend-Developer-Resume.pdf" download
                            px={{ base: '6', md: '8' }}
                            py='5'
                            position='relative'
                            _hover={{
                                bgGradient: "to-r",
                                gradientFrom: 'blue.500',
                                gradientTo: 'purple.500',
                            }}   
                        >
                            <Icon
                                as={LuDownload}
                                size='sm'
                                opacity='0'
                                position='absolute'
                                left='4'
                                transform="translateX(-8px)"
                                transition='all 0.5s ease-in-out'
                                _groupHover={{opacity: 1, transform: 'translateX(0)' }}
                            />
                            <Span
                                transition='all 0.5s ease-in-out' _groupHover={{ transform: 'translateX(14px)' }}
                            >
                                Download CV
                            </Span>
                        </ButtonCard>

                        {/* Go to Contact Section Button */}
                        <ButtonCard
                            variant='outline' outline='2px solid rgb(173, 70, 255)'
                            bg='transparent'
                            px={{ base: '6', md: '8' }}
                            _hover={{ bg: 'purple.500/20' }}
                        >
                            <ScrollLink
                                to='contact'
                                spy={true}
                                smooth={true}
                                duration={800}
                                offset={-50}
                            >
                                Contact Me
                                <Icon as={BiSolidRightArrowAlt} />
                            </ScrollLink>
                        </ButtonCard>
                    </Flex>
                </Box>
            </Flex>

            {/* Skill marquee */}
            <Marquee.Root
                autoFill speed='120' pauseOnInteraction spacing='1rem' maxW='7xl' mx='auto' px={{ base: '7', md: '3' }} overflow='hidden' position={{ base: 'static', lgTo2xl: 'absolute' }} bottom='-20%'
            >
                <Marquee.Edge side='start' />
                <Marquee.Viewport>
                    <Marquee.Content>
                        {skillSet.map(skill => (
                            <Marquee.Item
                                key={skill.name}
                                display='flex' alignItems='center'
                                gap='2'
                                bg='#0f172a' 
                                rounded='full'
                                px='3' py='1.5'
                                shadow='lg'
                                backdropBlur='md'
                                
                            >
                                <Icon as={skill.icon} color={skill.color} size='md' />
                                <Span fontFamily='Poppins' color='gray.200' fontSize={{base: 'xs', md: 'sm'}} lineHeight='tall'> {skill.name} </Span>
                            </Marquee.Item>
                        ))}
                    </Marquee.Content>
                </Marquee.Viewport>
                <Marquee.Edge side="end" />
            </Marquee.Root>
        </Box>
    )
};

export default Hero;