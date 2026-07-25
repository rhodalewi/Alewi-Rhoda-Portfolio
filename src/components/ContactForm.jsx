import { VStack, Text, Field, Box, Input, Textarea, Icon } from "@chakra-ui/react";
import { toaster } from "./ui/toaster";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { ButtonCard } from "./ReusableCards";
import { IoPaperPlaneOutline } from 'react-icons/io5'


const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm();

    const handleSubmitForm = async (data) => {
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
                    name: data.name,
                    email: data.email,
                    message: data.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toaster.create({
                title: "Message sent successfully",
                description: "Thank you for reaching out! I will get back to you as soon as possible.",
                type: 'success',
                duration: 5000,
                closable: true,
            });
            reset();
        } catch (error) {
            console.error(error)

            toaster.create({
                title: 'Message not sent',
                description: 'Something went wrong. Please try again later.',
                type: 'error',
                duration: 9000,
                closable: true
            });
        }
    };


    return (
        <VStack  gap={{base: '8', lg: '10'}} flex='1' w='full'>
            <Text textTransform='uppercase' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'xl' }} color='gray.200'> Contact form</Text>
          
            <Box
                as='form'
                onSubmit={handleSubmit(handleSubmitForm)}
                bg='var(--card-bgColor)' p='8' rounded='2xl' spaceY='6' shadow='xl' w='full' border='1px solid' borderColor='purple.500'
            >
                <Field.Root invalid={!!errors.name}>
                    <Input
                        type="text" placeholder="Enter Full Name"
                        {...register("name", { required: "Name is required" })}
                        variant='subtle' size='lg' bg='#1e293b'
                        w='full' rounded='lg' 
                        outline='1px solid' outlineColor='gray.600'
                        focusRing='inside' focusRingColor='purple.500'
                        transition='all 0.4s ease-in-out'
                        _placeholder={{fontSize: 'sm'}}
                    />
                    <Field.ErrorText>{ errors.name?.message }</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.email}>
                    <Input
                        type="text" placeholder="Enter Email Address"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                         })}
                        variant='subtle' size='lg' bg='#1e293b'
                        w='full' rounded='lg' 
                        outline='1px solid' outlineColor='gray.600'
                        focusRing='inside' focusRingColor='purple.500'
                        transition='all 0.4s ease-in-out'
                        _placeholder={{fontSize: 'sm'}}
                    />
                    <Field.ErrorText>{errors.email?.message }</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.message}>
                    <Textarea
                        placeholder="Enter Message"
                        rows='6'
                        {...register("message", {required: 'Message is required'})}
                        bg='#1e293b'
                        w='full' rounded='lg' resize='vertical'
                        outline='1px solid' outlineColor='gray.600'
                        focusRing='inside' focusRingColor='purple.500'
                        transition='all 0.4s ease-in-out'
                    />

                    <Field.ErrorText> {errors.message?.message} </Field.ErrorText>
                </Field.Root>

                <ButtonCard
                    type='submit'
                    variant='solid'
                    loading={isSubmitting} loadingText='Sending...'
                    disabled={isSubmitting}
                    w='full'
                    fontFamily='Fira Sans'
                    _hover={{
                        bgGradient: "to-r",
                        gradientFrom: 'blue.500',
                        gradientTo: 'purple.500',
                        opacity: '0.9'
                    }}

                >
                    <Icon as={IoPaperPlaneOutline } size='sm' />
                    Send Message
                </ButtonCard>
            </Box>
        </VStack>
    )
};

export default ContactForm