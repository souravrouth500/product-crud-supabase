import React from 'react'
import { fetchProducts } from '@/api/cms.api'
import { ProductsResponse } from '@/typescript/common.interface';
import { useQuery } from '@tanstack/react-query'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Box, Container, Stack } from '@mui/material';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Add from '@/components/addProduct';

function Home() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data: productsRes, isPending } = useQuery({
    queryKey: ['getProducts'],
    queryFn: () => fetchProducts()
  })

  console.log(productsRes);


  return (
    <>
      <Container maxWidth={'lg'} sx={{ pt: 2 }}>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-8">
          Dashboard
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="grid grid-cols-subgrid gap-4 col-span-1">
            {/* <div className="col-start-2">01</div> */}
            <Card className=" h-[200px] flex justify-center items-center">
              <Button className='px-8 py-6' onClick={handleOpen}>
                <Plus className="h-10 w-10" />
              </Button>
            </Card>
          </div>
          {
            productsRes?.data?.map((item: ProductsResponse, index: number) => {
              return (
                <div className='gap-4' key={index}>
                  <Card className="h-[200px]">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center my-2">
                      {item.name}
                    </h4>
                    <Stack direction={'row'} px={1} my={2} sx={{ overflow: 'hidden' }}>
                      <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <img src={`https://zvffdsdravynurjomyow.supabase.co/storage/v1/object/public/${item.image_url}`} alt="" style={{ height: '100px', width: "100%", objectFit: 'cover', }} />
                      </div>
                      <Box sx={{pl:1}}>
                        <p className="leading-7 [&:not(:first-child)]">
                          Nickname: {item.nickname}
                        </p>
                        <p className="leading-7 [&:not(:first-child)]">
                          Size: {item.size}
                        </p>
                        <p className="leading-7 [&:not(:first-child)]">
                          Address: {item.address}
                        </p>
                      </Box>
                    </Stack>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </Container>

      <Add open={open} handleClose={handleClose} />
    </>
  )
}

export default Home