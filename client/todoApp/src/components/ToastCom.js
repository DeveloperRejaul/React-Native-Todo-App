import {CheckIcon, Center, Box, HStack, Text, Slide} from 'native-base';

export default ToastCom = ({text, isOpen, status}) => {
  return (
    <Center>
      <Box w={['250', '300']} justifyContent="center">
        <Slide in={isOpen} placement="top">
          <Box
            w="100%"
            position="absolute"
            p="2"
            borderRadius="xs"
            bg={status === 200 ? 'emerald.100' : 'warning.200'}
            alignItems="center"
            justifyContent="center"
            _dark={{
              bg: status === 200 ? 'emerald.200' : 'warning.200',
            }}
            safeArea>
            <HStack space={2}>
              <CheckIcon
                size="4"
                color={status === 200 ? 'emerald.600' : 'warning.600'}
                mt="1"
                _dark={{
                  color: status === 200 ? 'emerald.700' : 'warning.700',
                }}
              />
              <Text
                color={status === 200 ? 'emerald.600' : 'warning.600'}
                textAlign="center"
                _dark={{
                  color: status === 200 ? 'emerald.700' : 'warning.700',
                }}
                fontWeight="medium">
                {status === 200 ? text : 'Invalite Action'}
              </Text>
            </HStack>
          </Box>
        </Slide>
      </Box>
    </Center>
  );
};
