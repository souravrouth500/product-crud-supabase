import React, { useState } from 'react'
import { fetchProducts, removeProduct } from '@/api/cms.api'
import { ProductsResponse } from '@/typescript/common.interface';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Box, Container, Stack } from '@mui/material';
import { CircleX, Pencil, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Add from '@/components/addProduct';
import { useConfirm } from "material-ui-confirm";
import { toast } from 'sonner';
import Edit from '@/components/editProduct';

function Home() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [productId, setProductId] = useState<string>('')

  const confirm = useConfirm();
  const queryClient = useQueryClient()

  const { data: productsRes, isPending } = useQuery({
    queryKey: ['getProducts'],
    queryFn: () => fetchProducts(),
    // refetchInterval: 5000
  })

  console.log(productsRes);

  const { mutate, data, error } = useMutation({
    mutationFn: async (id: string) => {
      try {
        return await removeProduct(id)
      } catch (error) {
        throw error
      }
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ['getProducts']
      })
      toast('product deleted successfully')
    },
    onError: (error) => {
      console.error(error);
      toast(`Error: ${error.message}`);
  }
  })

  const handleDelete = (item: ProductsResponse) => {
    confirm({ description: `This will permanently delete ` })
      .then(() => {
        mutate(item.id)
        if (!productsRes || productsRes.data?.length === 0) {
          throw new Error("Error deleting product")
        }
      })
      .catch(() => console.log("Deletion cancelled."));
  };

  const handleAdd = () => {
    setProductId('')
    handleOpen()
  }

  const handleEdit = (id:string) => {
    setProductId(id)
    handleOpen()
  }


  return (
    <>
      <Container maxWidth={'lg'} sx={{ pt: 2, my: 2 }}>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-8">
          Dashboard
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="grid grid-cols-subgrid gap-4 col-span-1">
            {/* <div className="col-start-2">01</div> */}
            <Card className=" h-[240px] flex justify-center items-center">
              <Button className='px-8 py-6 bg-indigo-700' onClick={handleAdd}>
                <Plus className="h-10 w-10" />
              </Button>
            </Card>
          </div>
          {
            productsRes?.data?.map((item: ProductsResponse, index: number) => {
              return (
                <div className='gap-4' key={index}>
                  <Card className="md:h-[240px] group relative">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center my-2">
                      {item.name}
                    </h4>
                    <Stack direction={'row'} px={1} my={2} className='flex justify-center gap-4' sx={{ overflow: 'hidden' }}>
                      <div style={{ borderRadius: '4px', overflow: 'hidden' }}>
                        <img src={`https://zvffdsdravynurjomyow.supabase.co/storage/v1/object/public/${item.image_url}`} alt="" style={{ height: '120px', width: "100%", objectFit: 'cover', }} />
                      </div>
                      <Box sx={{ pl: 1 }}>
                        <p className="leading-7 [&:not(:first-child)]">
                          Nickname: {item.nickname}
                        </p>
                        <p className="leading-7 [&:not(:first-child)]">
                          Gender: {item.gender}
                        </p>
                        <p className="leading-7 [&:not(:first-child)]">
                          Size: {item.size}
                        </p>
                        <p className="leading-7 [&:not(:first-child)]">
                          Address: {item.address}
                        </p>
                        <p className="leading-5 [&:not(:first-child)]">
                          T-shirt: {item.tshirtType}
                        </p>
                      </Box>
                    </Stack>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className='invisible group-hover:visible text-black bg-transparent hover:bg-transparent absolute -top-5 -right-6 transition ease-in-out duration-300 hover:scale-125 hover:text-indigo-700 animate-waving-icon' onClick={() => handleDelete(item)}>
                            <CircleX />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className='text-black'>Delete</p>
                        </TooltipContent>


                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className='invisible group-hover:visible text-black bg-transparent hover:bg-transparent absolute -top-5 right-3 transition ease-in-out duration-300 hover:scale-125 hover:text-indigo-700 animate-waving-icon' onClick={() => handleEdit(item.id)}>
                            <Pencil className='h-5' />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </Container>

      {/* <Add open={open} handleClose={handleClose} /> */}
      <Edit open={open} handleClose={handleClose} productId={productId} />
    </>
  )
}

export default Home