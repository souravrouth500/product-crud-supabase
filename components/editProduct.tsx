"use client"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Container from '@mui/material/Container';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Info, LoaderCircle, ShoppingCart } from 'lucide-react';

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
import { RequestBody, SizeChartItem } from '@/typescript/common.interface';
import { toast } from 'sonner';
import { LoadingButton } from '@mui/lab';
import { Item } from '@radix-ui/react-select';
import { useWindowSize } from '@/lib/useWindowSize';
import Confetti from 'react-confetti'

const formSchema = z.object({
    id: z
        .string()
        .optional(),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
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
    tshirtType: z.string().min(2, {
        message: "Please select T-shirt type.",
    }),
    gender: z.string().min(1, {
        message: "Please select gender.",
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
    width: { xs: '90%', sm: "400px", md: "600px" },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit({ open, handleClose, productId }: { open: boolean, handleClose: any, productId: string }) {

    const [img, setImg] = useState<File | null>(null)
    const [userGender, setUserGender] = useState('')
    const [userSize, setUserSize] = useState('')
    const [userSizeIncm, setUserSizeIncm] = useState<SizeChartItem | null>(null)
    const [showConfetti, setShowConfetti] = useState(false)
    const queryClient = useQueryClient()
    const { height, width } = useWindowSize()

    const menChart = [
        { size: 'S', chest: 109.2, waist: 69.2, length: 61.0 },
        { size: 'M', chest: 114.3, waist: 71.1, length: 61.6 },
        { size: 'L', chest: 119.4, waist: 73.0, length: 62.2 },
        { size: 'XL', chest: 124.5, waist: 74.9, length: 62.9 },
        { size: 'XXL', chest: 129.5, waist: 76.8, length: 63.5 },
    ];

    const womenChart = [
        { size: 'S', chest: 111.8, waist: 66.0, length: 19.1 },
        { size: 'M', chest: 116.8, waist: 68.6, length: 19.7 },
        { size: 'L', chest: 121.9, waist: 71.1, length: 20.3 },
        { size: 'XL', chest: 127.0, waist: 73.7, length: 21.0 },
        { size: 'XXL', chest: 132.1, waist: 76.2, length: 21.6 }
    ];

    // let chart;
    // userGender === "male" ? chart = menChart : chart = womenChart;
    const chart: SizeChartItem[] = userGender === 'male' ? menChart : womenChart;

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
            tshirtType: "",
            gender: "",
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
                setUserSizeIncm(null)
                console.log(res);
                setShowConfetti(true);

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

    // setTimeout(() => {
        // if(showConfetti){
    //         setShowConfetti(false);
    //     }
    // }, 5000);

    if (showConfetti) {
        setTimeout(() => {
            setShowConfetti(false);
        }, 5000);
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target && e.target.files && e.target.files.length > 0) {
            setImg(e.target.files[0]);
        }
    };


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {

        if (productId.toString().length > 0) {
            values = { ...values, id: productId }
        }
        if (img) {
            mutate({ values, img });
        } else {
            console.error("Image is null or undefined.");
            toast("Please upload an image before submitting.");
        }
    }


    console.log(addProductRes);
    console.log(userGender);
    console.log(userSizeIncm);


    useEffect(() => {
        const sizeCM = chart.find((item) => item.size === userSize);
        if (sizeCM) {
            setUserSizeIncm(sizeCM);
        } else {
            setUserSizeIncm(null); // Handle case where size is not found
        }
    }, [userSize, userGender,]);

    useEffect(() => {
        if (!productId || !singleProductRes) {
            console.log('product id not found');
        }

        if (productId && Array.isArray(singleProductRes) && singleProductRes.length > 0) {
            setValue('name', singleProductRes[0]?.name)
            setValue('nickname', singleProductRes[0]?.nickname)
            setValue('size', singleProductRes[0]?.size)
            setValue('address', singleProductRes[0]?.address)
            setValue('tshirtType', singleProductRes[0]?.tshirtType)
            setValue('gender', singleProductRes[0]?.gender)
            // setImg(`https://zvffdsdravynurjomyow.supabase.co/storage/v1/object/public/${singleProductRes[0]?.image_url}`)
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
                    <Container maxWidth={'sm'} className='md:w-500'>
                        <Typography variant='h5' textAlign={'center'} sx={{ my: 2 }}>{typeof productId === "number" ? 'Edit Product' : 'Add Product'}</Typography>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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

                                <div>
                                    <div className="flex gap-4">


                                        <FormField
                                            control={form.control}
                                            name="gender"
                                            render={({ field }) => (
                                                <FormItem className='w-1/2'>
                                                    <FormLabel>Gender</FormLabel>
                                                    <Select onValueChange={(value) => {
                                                        field.onChange(value);
                                                        setUserGender(value);
                                                    }} value={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select gender" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent style={{ zIndex: 1300 }}>
                                                            <SelectItem value="male">Male</SelectItem>
                                                            <SelectItem value="female">Female</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="size"
                                            render={({ field }) => (
                                                <FormItem className={`w-1/2`}>
                                                    <FormLabel>Size</FormLabel>
                                                    <Select onValueChange={(value) => {
                                                        field.onChange(value);
                                                        setUserSize(value);
                                                    }} value={field.value} disabled={!form.getValues('gender')}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select size" />
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
                                    </div >
                                    {
                                        userSizeIncm && "chest" in userSizeIncm && "waist" in userSizeIncm && "length" in userSizeIncm && <div className='flex items-center text-indigo-700 mt-1'>
                                            <Info size={12} style={{ marginRight: '4px' }} />
                                            <span style={{ fontSize: "12px" }}>chest: {userSizeIncm.chest}cm | Front-length: {userSizeIncm.waist}cm | Sleeve-length: {userSizeIncm.length}cm</span>
                                        </div>
                                    }
                                </div>

                                <FormField
                                    control={form.control}
                                    name="tshirtType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tshirt Type</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select tshirt type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent style={{ zIndex: 1300 }}>
                                                    <SelectItem value="oversized">Oversized</SelectItem>
                                                    <SelectItem value="full-sleeve">Full-sleeve</SelectItem>
                                                    <SelectItem value="half-sleeve">half-sleeve</SelectItem>
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

                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="picture">Picture</Label>
                                    <Input id="picture" type="file" onChange={handleFileChange} />
                                    {img && <img src={URL.createObjectURL(img)} height={100} width={100} />}
                                </div>

                                <Button>
                                    {isPending ? <LoadingButton loading variant='contained' startIcon={<LoaderCircle className='animate-spin h-5 w-5 mr-3' />} color='primary' sx={{ '&.MuiLoadingButton-root': { color: 'white' } }}>Loading</LoadingButton> : typeof productId === "number" ? `Edit Product` : `Add Product`}
                                </Button>
                            </form>
                        </Form>
                    </Container >
                </Box>
            </Modal>
            {
                showConfetti && (
                    <Confetti
                        width={width}
                        height={height}
                    />
                )
            }
        </>
    )
}

export default Edit