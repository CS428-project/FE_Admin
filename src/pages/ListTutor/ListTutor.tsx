import React from 'react';
import { ChakraProvider, CSSReset, Box, Heading, Flex } from '@chakra-ui/react';
import PersonCard from '../../components/PersonCard';

const people: Person[] = [
  {
    name: 'John Doe',
    field: 'Software Engineering',
    experience: '5 years',
    email: 'john.doe@example.com',
    dob: '1990-01-01',
    gender: 'Male',
  },
  // Add more people as needed
];

interface Person {
  name: string;
  field: string;
  experience: string;
  email: string;
  dob: string;
  gender: string;
}

const ListTutor: React.FC = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Flex direction="column" alignItems="center" p="4">
        <Heading as="h1" size="xl" my="4">
          List of People
        </Heading>
        <Box width="100%" maxW="600px">
          {people.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default ListTutor;
