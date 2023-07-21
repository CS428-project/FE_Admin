import React from 'react';
import { ChakraProvider, CSSReset, Box, Heading, Flex } from '@chakra-ui/react';
import TutorEditForm from '../../components/TutorEditForm';

const initialTutor = {
  name: 'John Doe',
  field: 'Software Engineering',
  experience: '5 years',
  email: 'john.doe@example.com',
  dob: '1990-01-01',
  gender: 'Male',
};

const EditTutorInfo: React.FC = () => {
  const handleTutorUpdate = (updatedTutor: any) => {
    // In a real application, you would handle the tutor update here and possibly send it to the server.
    console.log('Updated Tutor:', updatedTutor);
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Flex direction="column" alignItems="center" p="4">
        <Heading as="h1" size="xl" my="4">
          Edit Tutor Information
        </Heading>
        <Box width="100%" maxW="400px">
          {/* Pass the initialTutor object as a prop */}
          <TutorEditForm initialTutor={initialTutor} onSubmit={handleTutorUpdate} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default EditTutorInfo;
