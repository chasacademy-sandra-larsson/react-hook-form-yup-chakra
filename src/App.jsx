import * as React from 'react'
import "./App.css"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";

const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup.string().email(),
    age: yup.number().positive().integer().required()
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => console.log(data);
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
        <FormControl onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor='name'>First name</FormLabel>
        <Input {...register("firstName")} />
        <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>

        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input {...register("email")} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>

        <FormLabel htmlFor='age'>Age</FormLabel>
        <Input {...register("age")} />
        <FormErrorMessage>{errors.age?.message}</FormErrorMessage>

        <Button type="submit">Submit </Button>
      </FormControl>
    </ChakraProvider>
  )
}
export default App