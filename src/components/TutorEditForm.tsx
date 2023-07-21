import React, { useState, useEffect } from "react"
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react"

interface Tutor {
  name: string
  field: string
  experience: string
  email: string
  dob: string
  gender: string
}

interface TutorEditFormProps {
  initialTutor: Tutor // Rename the prop to "initialTutor"
  onSubmit: (updatedTutor: Tutor) => void
}

const TutorEditForm: React.FC<TutorEditFormProps> = ({
  initialTutor,
  onSubmit,
}) => {
  const [editedTutor, setEditedTutor] = useState<Tutor>(initialTutor)

  // Use useEffect to update the editedTutor state when initialTutor changes
  useEffect(() => {
    setEditedTutor(initialTutor)
  }, [initialTutor])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setEditedTutor((prevTutor) => ({ ...prevTutor, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(editedTutor)
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={editedTutor.name}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Field</FormLabel>
        <Input
          type="text"
          name="field"
          value={editedTutor.field}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Experience</FormLabel>
        <Input
          type="text"
          name="experience"
          value={editedTutor.experience}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={editedTutor.email}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Date of Birth</FormLabel>
        <Input
          type="date"
          name="dob"
          value={editedTutor.dob}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Gender</FormLabel>
        <Select
          name="gender"
          value={editedTutor.gender}
          onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Select>
      </FormControl>

      <Button
        mt={4}
        colorScheme="blue"
        type="submit">
        Save Changes
      </Button>
    </Box>
  )
}

export default TutorEditForm
