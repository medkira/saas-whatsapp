import { getAllMachines } from "@/actions/machines"
import { getAllPieces } from "@/actions/pieces";



export default async function sitemap(){
const baseUrl = "https://mmc-cyan.vercel.app/";

    const responseMachines = await getAllMachines();
    const responsePieces = await getAllPieces();

    const machines = responseMachines.map((machine)=> {
        
        return {
            url: `${baseUrl}/machines/${machine.id}`,
            lastModified: machine.created_at
        }
    })


    const pieces = responsePieces.map((piece)=> {
        
        return {
            url: `${baseUrl}/pieces/${piece.id}`,
            lastModified: piece.created_at
        }
    })

return[
        {
            url:baseUrl,
            lastModified: new Date()
        },
        ...machines,
        ...pieces

    ]
}