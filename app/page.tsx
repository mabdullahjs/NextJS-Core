"use client"

import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import MAButton from '@config/components/MAButton'
import MAModal from '@config/components/MAModal'


const Page = () => {
  return (
    <Box>
      <Text>hello world</Text>
      <MAButton size='sm' label='submit' loading={false} colorScheme='red'/>
      <MAModal/>
    </Box>
  )
}

export default Page