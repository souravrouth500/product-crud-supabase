"use client"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Container from '@mui/material/Container';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ShoppingCart } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Typography } from '@mui/material';
import { Label } from "@/components/ui/label"
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchSingleProduct, updateProduct } from '@/api/cms.api';
import { RequestBody } from '@/typescript/common.interface';
import { toast } from 'sonner';
import { LoadingButton } from '@mui/lab';

const formSchema = z.object({
    id: z
    .string()
    .min(4, "Please enter a valid value")
    .optional(),
    name: z.string().min(2, {
        message: "name must be at least 2 characters.",
    }),
    nickname: z.string().min(2, {
        message: "Nickname must be at least 2 characters.",
    }),
    size: z.string().min(1, {
        message: "Size must from S, M, L, XL, XXL",
    }),
    address: z.string().min(2, {
        message: "Address must be at least 2 characters.",
    }),
    // img: z.string().min(2, {
    //   message: "Address must be at least 2 characters.",
    // }),
})


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit({ open, handleClose, productId }: { open: boolean, handleClose: any, productId: string }) {

    const [img, setImg] = useState<File | null>(null)
    const queryClient = useQueryClient()

    console.log("id", productId);

    const { data: singleProductRes, error: singleProductErrorRes } = useQuery({
        queryKey: ['getSingleProduct', productId],
        queryFn: () => fetchSingleProduct(productId)
    })

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            nickname: "",
            size: "",
            address: "",
            // img: ""
        },
    })

    const { setValue } = form

    console.log("spr", singleProductRes);
    console.log("spe", singleProductErrorRes);

    const { mutate, data: addProductRes, isPending } = useMutation({
        mutationFn: async ({ values, img }: { values: RequestBody, img: File }) => {
            try {
                return await updateProduct({ values, img });
            } catch (error) {
                throw error;
            }
        },
        onSuccess: (res) => {
            console.log(res);
            
            if (res && Array.isArray(res) && res.length > 0) {
                form.reset()
                setImg(null)
                console.log(res);
                toast("Product added successfully", {
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                    },
                });
                queryClient.invalidateQueries({ queryKey: ['getProducts'] });
                handleClose();
            } else {
                console.log(res);
                toast("Unexpected response format");
            }
        },
        onError: (error) => {
            console.error(error);
            toast(`Error: ${error.message}`);
        }
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target && e.target.files && e.target.files.length > 0) {
            setImg(e.target.files[0]);
        }
    };


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        
        if(productId.toString().length > 0){
            values =  {...values, id: productId}
        }
        if (img) {
            mutate({ values, img });
        } else {
            console.error("Image is null or undefined.");
            toast("Please upload an image before submitting.");
        }
    }


    console.log(addProductRes);

    useEffect(() => {
        if (!productId || !singleProductRes) {
            console.log('product id not found');
        }

        if (productId && Array.isArray(singleProductRes) && singleProductRes.length > 0) {
            setValue('name', singleProductRes[0]?.name)
            setValue('nickname', singleProductRes[0]?.nickname)
            setValue('size', singleProductRes[0]?.size)
            setValue('address', singleProductRes[0]?.address)
        }
    }, [productId, singleProductRes, setValue,])

    useEffect(() => {
        productId.toString().length === 0 && form.reset()
    }, [productId])


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Container maxWidth={'sm'}>
                        <Typography variant='h5' textAlign={'center'} sx={{ my: 2 }}>{ typeof productId === "number" ? 'Edit Product' : 'Add Product'}</Typography>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="nickname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nickname</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Nickname" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="size"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Size</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select your size" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent style={{ zIndex: 1300 }}>
                                                    <SelectItem value="S">S</SelectItem>
                                                    <SelectItem value="M">M</SelectItem>
                                                    <SelectItem value="L">L</SelectItem>
                                                    <SelectItem value="XL">XL</SelectItem>
                                                    <SelectItem value="XXL">XXL</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* <FormField
                                    name='img'
                                    render={({ field })} => (
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="picture">Picture</Label>
                                    <Input id="picture" type="file" onChange={handleFileChange} />
                                    {img && <img src={URL.createObjectURL(img)} height={100} width={100} />}
                                </div>
                                )
                                /> */}

                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="picture">Picture</Label>
                                    <Input id="picture" type="file" onChange={handleFileChange} />
                                    {img && <img src={URL.createObjectURL(img)} height={100} width={100} />}
                                </div>

                                <Button>
                                    {isPending ? <LoadingButton loading color='primary' /> : typeof productId === "number" ? `Edit Product` : `Add Product`}
                                </Button>
                            </form>
                        </Form>
                    </Container >
                </Box>
            </Modal>
        </>
    )
}

export default Edit