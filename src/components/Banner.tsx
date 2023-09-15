import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BannerProps } from '@/types'
import {Box, Stack, Typography, Button} from '@mui/material'


function Banner({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }: BannerProps) {
  return (
    <Stack flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
      <Image src='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'  width={500} height={300} alt='img' />
    <Box p='5'>
      <Typography color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Typography>
      <Typography fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Typography>
      <Typography fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Typography>
      <Button fontSize='xl' bg="blue.300" color='white'>
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
    </Stack>
  )
}

export default Banner