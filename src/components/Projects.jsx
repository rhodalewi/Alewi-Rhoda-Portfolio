import { Badge, Box, Card, Flex, HStack, Icon, Image, Link, SimpleGrid, Span } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { projects } from '../data';
import { FlexCard, HeadingCard } from './ReusableCards';
import {FaArrowUpRightFromSquare, FaGithub, FaArrowRight} from 'react-icons/fa6'

const ImageComponent = ({ image}) => {
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        if (image.length < + 1) return;

        const interval = setInterval(() => {
            setCurrentImg(prev => (prev + 1) % image.length);
        }, 2000)

        return () => clearInterval(interval);
    }, [image])

    return (
            <Image
                src={image[currentImg]}
                alt='image'
                w='full' h='full'
                objectFit='cover'
                filter='brightness(95%)'
                roundedTop='2xl'
                transition='all 0.8s ease-in-out'
                _groupHover={{
                    scale: 1.1
                }}
            />
    )
};

const Projects = () => {  
    return (
        <FlexCard id='projects'>
            <HeadingCard> My Projects </HeadingCard>

            <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={{base: '8', md: '14'}} placeContent='center' maxW='6xl'>
                {projects.map(project => (
                    <Card.Root
                        key={project.id}
                        className='group'
                        overflow='hidden'
                        bg='var(--card-bgColor)'
                        variant='outline'
                        outline='1px solid' outlineColor='purple.500'
                        rounded='2xl'
                        transition='all 0.8s ease-in-out'
                        _hover={{boxShadow:"2px 8px 32px -4px rgba(243, 232, 255, 0.11) "}}
                    >
                       <Box overflow='hidden' h='52'>
                            <ImageComponent image={project.image}/>
                        </Box>
                        
                        {/* Card content */}
                        <Card.Body gap='4'>
                            <Span w='8' h='0.5' bg='gray.400' rounded='full' alignSelf='center'></Span>

                            <Card.Title color='purple.400' fontSize={{base: 'md', md: 'lg'}} fontWeight='semibold'> {project.title} </Card.Title>

                            <Card.Description color='gray.300' fontSize={{base: 'xs', md: 'sm'}} fontFamily='Poppins'> {project.description} </Card.Description>
                        </Card.Body>

                        <Card.Footer alignItems='center' justifyContent='space-between' gap='2'>
                            {/* Programming languages and Links */}
                            <Flex gap='1' wrap='wrap' items='start'>
                                {project.languages.map((language, index) => (
                                    <Badge
                                        key={index}
                                        bg='blue.500/20' backdropBlur='3xl'
                                        rounded='xl'
                                        py='1' px='3'
                                        fontSize='xs'
                                    >
                                        {language}
                                    </Badge>
                                ) )}
                            </Flex>

                            {/* Live Links and github links */}
                            <HStack alignItems='center' gap='3.5'>
                                <Link
                                    href={project.livelink}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    _hover={{ opacity: '75%', scale: '1.2' }}
                                    transition='all 0.5s ease-in-out'
                                >
                                    <Icon as={FaArrowUpRightFromSquare} size='sm' />
                                </Link>

                                <Link
                                    href={project.codelink}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    _hover={{ opacity: '75%', scale: '1.2' }}
                                    transition='all 0.5s ease-in-out'
                                >
                                    <Icon as={FaGithub} size='md' />
                                </Link>
                            </HStack>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </SimpleGrid>

            <Link
                href='https://github.com/rhodalewi?tab=repositories' target='_blank' rel='noopener noreferrer'
                color='gray.200'
                animation='pulse 1.8s ease-in-out infinite'
                textDecor='none'
                _hover={{ color: 'blue.500', animation: 'paused'}}
            >
                View More
                <Icon as={FaArrowRight} />
            </Link>
        </FlexCard>
    )
};

export default Projects;
