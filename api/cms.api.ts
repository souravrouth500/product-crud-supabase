import { createClient } from "@/supabase/client";
import { RequestBody } from "@/typescript/common.interface";


export const supabase = createClient()

// export const addProduct = async (payload: RequestBody) => {
//     return await supabase.from('products').insert(payload).select()
// }

// export const addProduct = async ({values, img}: {values: RequestBody, img: any}) => {

//     const { data: userDetails, error: userError } = await supabase.from('products').insert(values).select()
//     const userId = userDetails[0].id

//     const { data: fileRes, error: fileresError } = await supabase.storage
//     .from('logo')
//     .upload(`${userId}.jpg`, img, {
//         cacheControl: '3600',
//         upsert: false
//     })

//     const { path, fullPath } = fileRes;

//     return await supabase.from('products').update({...values, image_url: fullPath}).eq('id', userId).select()
// }

export const addProduct = async ({ values, img }: { values: RequestBody, img: File }) => {
    const { data: userDetails, error: userError } = await supabase.from('products').insert(values).select();

    if (userError || !userDetails || userDetails.length === 0) {
        throw new Error('Error inserting product or userDetails is null');
    }

    const userId = userDetails[0].id;

    const { data: fileRes, error: fileresError } = await supabase.storage
        .from('logo')
        .upload(`${userId}.jpg`, img, {
            cacheControl: '3600',
            upsert: false
        });

    if (fileresError || !fileRes) {
        throw new Error('Error uploading file or fileRes is null');
    }

    const { path, fullPath } = fileRes;

    const { data: updatedProduct, error: updateError } = await supabase.from('products')
        .update({ ...values, image_url: fullPath })
        .eq('id', userId)
        .select();

    if (updateError || !updatedProduct) {
        throw new Error('Error updating product or updatedProduct is null');
    }

    return updatedProduct;
};


export const uploadPicture = async (payload: any) => {
    return await supabase.storage.from('logo').upload(payload.filename, payload.file, {
        cacheControl: '3600', upsert: false
    }
    )
}
export const fetchProducts = async () => {
    return await supabase.from('products').select('*')
}