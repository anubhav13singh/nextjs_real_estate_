'use client'
import Banner from "@/components/Banner"
import PropertyForSale from "@/components/PropertyForSale"
import { Box, Stack } from "@mui/material"

export default function Home() {


  return (
    <Box>
   
      <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />

    <Stack flexWrap='wrap' direction='row'>
      {/* fetching a property and calling it here */}

    </Stack>

     <Banner
      purpose='Buy A HOME'
      title1='Find, Buy & own your'
      title2='Dream Home'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
    <PropertyForSale/>
    </Box>
  )
}
