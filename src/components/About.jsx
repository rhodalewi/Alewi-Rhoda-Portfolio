import { Box, Flex, Image, Group, Highlight, Link, Icon } from '@chakra-ui/react';
import { socialIcons } from '../data';
import { HeadingCard, FlexCard, TextCard } from './ReusableCards';

const About = () => {
    return (
        <FlexCard id='about'>
            <HeadingCard> About Me </HeadingCard>

            <Flex direction={{ base: 'column', lg: 'row' }} align='center' justify='center' gap={{ base: '10', lg: '20' }} maxW='5xl'>
                {/* Avatar */}
                <Box p='0.5' rounded='full'
                    bgGradient='to-r' gradientFrom='purple.500' gradientVia='pink.400' gradientTo='blue.500'
                    bgSize='200% 100%' 
                    animation='borderGradient 3s linear infinite'
                >
                    <Image
                        src='/about-avatar.png' alt='Avatar'
                        rounded='full'
                        fit='cover'
                        w={{ base: '28', lg: '2xl' }}
                        h='100%'
                        bg='var(--primary-color)'
                    />
                </Box>

                {/* Text description */}
                <Group fontFamily='Poppins' color='gray.100' textAlign={{base: 'center', lg: 'start'}} display='flex' flexDirection='column' gap='3'>
                    <TextCard>
                        <Highlight query={['Frontend', 'Developer']} styles={{ color: 'purple.400', fontWeight: 'medium' }}>
                            Hi, I’m Rhoda Alewi. I’m a Frontend Developer with a background in Psychology. I have experience building user-friendly applications using modern web technologies. I enjoys building responsive user-friendly web applications
                        </Highlight>
                    </TextCard>
                    <TextCard>
                        <Highlight
                            query={['HTML', 'CSS/Sass', 'JavaScript', 'React', 'TailwindCSS', 'Chakra-UI']}
                            styles={{ color: 'purple.400', fontWeight: 'medium' }}
                        >
                            I currently work with HTML, CSS/Sass, JavaScript, React, TailwindCSS, and Chakra-UI, and I'm always learning new technologies to improve my skills. I enjoy solving problems, writing clean, maintainable code, and paying attention to the details that make a product feel polished.

                        </Highlight>
                    </TextCard>
                    <TextCard>
                         I'm always excited to take on new challenges, collaborate with others, and build digital experiences that are both functional and impactful. When I'm not coding, you'll find me exploring new technologies, improving my development workflow, or working on personal projects that challenge me to grow as a developer.
                    </TextCard>
                </Group>

                {/* Social Links */}
                <Flex direction={{base: 'row', lg: 'column'}} gap='4'>
                    {socialIcons.map(icons => (
                        <Link
                            key={icons.id}
                            href={icons.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            p='2' 
                            transition='all 0.5s ease-in-out'
                            _hover={{ scale: '0.9', opacity: '0.8' }}
                            rounded={icons.style.rounded}
                            {...icons.style}
                        >
                            <Icon as={icons.icon} size='sm' />
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </FlexCard>
    )
};

export default About;

