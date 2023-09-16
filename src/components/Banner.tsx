"use client"
import React from 'react'
import Link from 'next/link'
import { BannerProps } from '@/types'
import {Box, Stack, Typography, Button} from '@mui/material'


function Banner({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }: BannerProps) {
  return (
    <Stack direction='row' gap='10px' flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
       <img src={imageUrl} width={400} height={300} />
    <Box p='5'>
      <Typography color='gray' fontSize='sm' fontWeight='medium'>{purpose}</Typography>
      <Typography fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Typography>
      <Typography fontSize='lg' paddingTop='3' paddingBottom='3' color='gray'>{desc1}<br />{desc2}</Typography>
      <Button sx={{
         fontSize: '20px',
         
         color:'red',
         
      }}>
         <Link href={linkName}>{buttonText} </Link> 
      </Button>
    </Box>
    </Stack>
  )
}

export default Banner