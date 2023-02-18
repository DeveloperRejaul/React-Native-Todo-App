import {Center, HStack, Skeleton, VStack, ScrollView} from 'native-base';
import React from 'react';

const LoadingItemsCom = () => {
  return (
    <ScrollView showsVerScrollIndicator={false}>
      <Center w="100%">
        <HStack
          w="90%"
          maxW="400"
          space={8}
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}
          p="4">
          <VStack flex="3" space="4">
            <Skeleton startColor="amber.300" />
            <Skeleton.Text />
            <HStack space="2" alignItems="center">
              <Skeleton size="5" rounded="full" />
              <Skeleton h="3" flex="2" rounded="full" />
              <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
          </VStack>
        </HStack>
        <HStack
          w="90%"
          maxW="400"
          space={8}
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}
          p="4">
          <VStack flex="3" space="4">
            <Skeleton startColor="amber.300" />
            <Skeleton.Text />
            <HStack space="2" alignItems="center">
              <Skeleton size="5" rounded="full" />
              <Skeleton h="3" flex="2" rounded="full" />
              <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
          </VStack>
        </HStack>
        <HStack
          w="90%"
          maxW="400"
          space={8}
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}
          p="4">
          <VStack flex="3" space="4">
            <Skeleton startColor="amber.300" />
            <Skeleton.Text />
            <HStack space="2" alignItems="center">
              <Skeleton size="5" rounded="full" />
              <Skeleton h="3" flex="2" rounded="full" />
              <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
          </VStack>
        </HStack>
      </Center>
    </ScrollView>
  );
};

export default LoadingItemsCom;
