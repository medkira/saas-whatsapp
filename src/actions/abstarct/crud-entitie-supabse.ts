'use server'
import { revalidatePath } from 'next/cache';

import { Pieces } from '@/domain/entities/Pieces';
import { createClient } from '@/utils/supabase/server';

const ITEMS_PER_PAGE = 6;

class SupabaseService {
    tableName: string;
    supabase: any;

    constructor(tableName: string) {
        this.tableName = tableName;
        this.supabase = createClient(true);
    }


    // ? Done
    async getAllItems<T>(): Promise<T[]> {
        const { data } = await this.supabase.from(this.tableName).select().order('created_at', { ascending: false });

        if (!data) return [];

        return data;
    }

    // ? Done
    // ? includes Fuzzy Search 
    async searchItems<T>(search: string): Promise<T[]> {
        const { data, error } = await this.supabase.rpc(`search_${this.tableName}`, { piece_term: search });

        if (!data) return [];

        return data;
    }

    async filterItems({ categories, marks }: { categories: string[], marks: string[] }): Promise<Pieces[]> {
        const { data, error } = await this.supabase.rpc("get_machins_filter", { categories: categories, marks: marks });

        return data;
    }



    async getItems(page: string = '1'): Promise<Pieces[]> {
        const pageNumber = Number(page);
        const start = ITEMS_PER_PAGE * (pageNumber - 1);
        const end = start + ITEMS_PER_PAGE - 1;

        const { data } = await this.supabase.from(this.tableName).select().range(start, end).order('created_at', { ascending: false });

        if (!data) return [];

        return data;
    }



    async getItemsPages(): Promise<number> {
        const { data, count } = await this.supabase.from(this.tableName).select('*', { count: 'exact', head: true });

        if (!count) { return 0; }
        const totalPage = Math.ceil(count / ITEMS_PER_PAGE);

        return totalPage;
    }

    async getItemById(id: string): Promise<Pieces> {
        let { data } = await this.supabase.from(this.tableName).select('*').eq('id', id);

        if (!data || data.length === 0) return {} as Pieces; // This is bad, but keeping it for consistency

        return data[0];
    }

    async deleteItem(id: number, prevState: any, formData: FormData) {
        // const { data } = await this.supabase.from(this.tableName).select().eq('id', id);
        // const item: Pieces = data![0]; // Data could be null

        // const url = item.image_url;

        // if (url) {
        //     const secondLastSlashIndex = url.lastIndexOf("/", url.lastIndexOf("/") - 1);
        //     const imageBacketPath = url.slice(secondLastSlashIndex + 1);

        //     await this.deleteFile(imageBacketPath);
        // }

        await this.supabase.from(this.tableName).delete().eq('id', id);

        revalidatePath(`/dashboard/${this.tableName}`);
        revalidatePath('/');
        // revalidatePath('/products');
    }

    async updateItem(id: number, prevState: any, formData: FormData, props: string[]) {
        const image = formData.get("file") as File;
        let imageUrl = "";

        if (image.size != 0) {
            const { data } = await this.supabase.from(this.tableName).select().eq('id', id);
            const item: Pieces = data![0]; // Data could be null

            const url = item.image_url;
            const secondLastSlashIndex = url.lastIndexOf("/", url.lastIndexOf("/") - 1);
            const imageBacketPath = url.slice(secondLastSlashIndex + 1);

            await this.deleteFile(imageBacketPath);

            imageUrl = await this.uploadFile(image);
        }


        const item: Record<string, any> = {};

        props.forEach((prop: string) => {
            const value = formData.get(prop);
            if (value && (
                (typeof value === 'string' && value.length !== 0) ||
                (value instanceof File && value.size !== 0)
            )) {
                item[prop] = value as any;
            }
        });


        if (image.size != 0) {
            await this.supabase.from(this.tableName).update({ ...item, image_url: imageUrl }).eq('id', id);
        } else {
            await this.supabase.from(this.tableName).update({ ...item }).eq('id', id);
        }

        revalidatePath(`/dashboard/${this.tableName}`);
        revalidatePath('/');
    }







    async createItem<T>(prevState: any, formData: FormData, props: string[]) {

        // const image: any = formData.get("file");
        let imageUrl = "";

        // if (image.size != 0) {
        //     imageUrl = await this.uploadFile(image);
        // }

        // const item: Omit<Pieces, 'id' | 'image_url'> = {
        //     price: formData.get("price") as any,
        //     reference: formData.get("reference") as any,
        //     available: formData.get("available") as any == "on",
        //     description: formData.get("description") as any,
        //     mark: formData.get("mark") as any,
        //     name: formData.get("name") as any
        // };

        const item: Record<string, any> = {};

        props.forEach((prop: string) => {
            item[prop] = formData.get(prop) as any;
        });

        // console.log("patients", item)

        const { data, error } = await this.supabase.from(this.tableName).insert(item);

        //   console.log(error)

        revalidatePath(`/dashboard/${this.tableName}`);
        revalidatePath('/');
        revalidatePath('/products/1');

        // return true;
    }

    async uploadFile(file: File): Promise<string> {
        const { data, error } = await this.supabase.storage.from('MMC machines').upload(`${this.tableName}/${file.name}`, file, {
            cacheControl: '3600',
            upsert: true
        });

        if (error) {
            console.log(error);

            return error.message;
        } else {
            const { data } = this.supabase.storage.from('MMC machines').getPublicUrl(`${this.tableName}/${file.name}`);

            return data.publicUrl;
        }
    }

    async deleteFile(filePath: string) {
        await this.supabase.storage.from('MMC machines').remove([filePath]);
    }
}

export default SupabaseService;
