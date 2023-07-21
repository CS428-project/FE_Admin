import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"

interface Person {
  name: string
  field: string
  experience: string
  email: string
  dob: string
  gender: string
}

interface PersonCardProps {
  person: Person
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <Box
      p="4"
      borderWidth="1px"
      borderRadius="md"
      mb="4">
      <Heading
        as="h3"
        size="md"
        mb="2">
        {person.name}
      </Heading>
      <Text mb="2">
        Field: {person.field} | Experience: {person.experience} | Email:{" "}
        {person.email} | Date of Birth: {person.dob} | Gender: {person.gender}
      </Text>
    </Box>
  )
}

export default PersonCard
