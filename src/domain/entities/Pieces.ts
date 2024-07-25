export type Pieces = {
    id: number;
    reference: string;
    image_url: string;
    price: number;

    name?:string;
    description?: string;
    mark?: string;
    // applicable?: string;
    available?: boolean;
    created_at?:string;
}