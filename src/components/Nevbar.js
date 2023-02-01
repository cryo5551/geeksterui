import { Button, Flex, Text, Image } from '@chakra-ui/react';
import logo from "../assets/logo.png";



const Nevbar = () => {
    return (
        <div className='nevbar'>
        <Flex bg="white" ps="20" pe="20" color="black" alignItems="center" justifyContent="space-between" flexWrap='wrap'>
            <Flex alignItems="center">
                <Image
                    boxSize='38px'
                    objectFit='cover'
                    src={logo}
                    alt='logo'
                />
                <span className='nav'>Geekster</span>
            </Flex >
            <Flex alignItems="center" flexWrap="wrap">
                <Flex m="3" flexWrap="wrap">
                    <Text m="4" cursor="pointer">Home</Text>
                    <Text m="4" cursor="pointer">Courses</Text>
                    <Text m="4" cursor="pointer">Hire Telent</Text>
                    <Text m="4" cursor="pointer">ISA</Text>
                </Flex>

                <Button m="3" variant='outline'>Log in</Button>
                <Button variant="solid" bg="#151f22" color="white">Register Now </Button>

            </Flex>
        </Flex>
        </div>
    );
}


export default Nevbar;