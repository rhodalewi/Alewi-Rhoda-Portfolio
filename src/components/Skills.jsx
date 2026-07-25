import { Flex, Icon, Text } from '@chakra-ui/react';
import { skillSet } from '../data';
import { IoLogoJavascript } from 'react-icons/io5';
import { FlexCard, HeadingCard } from "./ReusableCards";

const Skills = () => {
    return (
        <FlexCard id='skills'>
            <HeadingCard>My Skills </HeadingCard>

            <Text fontFamily='Poppins' fontSize={{ base: 'sm', md: 'lg' }} textAlign='center'>The skills, tools and technologies i use:</Text>
            
            <Flex
                alignItems='center' justify='center'
                wrap='wrap'
                gapX={{base: '8', md: '16'}} gapY={{ base: '6', md: '10' }}
                maxW={{ base: 'xs', md: 'md' }}
            >
                {skillSet.map(skill => (
                    <Icon
                        key={skill.id}
                        as={skill.name === 'JavaScript' ? IoLogoJavascript : skill.icon}
                        boxSize={{base:'9', md: '11'}}
                        color={skill.color}
                    />
                ))}
            </Flex>
        </FlexCard>
    )
};

export default Skills;