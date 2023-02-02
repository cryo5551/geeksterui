import { Flex, Text } from '@chakra-ui/react';


const Header = () => {
    return (
        <div style={{
          maxWidth: '100vw',
        }}>
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center" pt="12" pb="5">
        <Flex>
          <Text color="green" fontWeight="bold" m="1" fontSize="2xl">Thousends </Text>
          <Text fontWeight="bold" m="1" fontSize="2xl"> of Lives Changed</Text>
        </Flex>
      </Flex>
      <Text color="#959580" align="center" fontSize="sm">Hear it from those who have been on this journy already</Text>
        </div>
    );
}


export default Header;