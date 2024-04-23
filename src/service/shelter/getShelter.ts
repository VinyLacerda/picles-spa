import { IShelter } from "../../interfaces/shelter"
import httpClient from "../api/httpClient"

export async function getShelter(): Promise<IShelter> {
    try {
        const reponse = await httpClient.get('/shelter')
        return reponse.data
    } catch (error) {
        console.log('Erro ao buscar abrigo')
        throw Error
    }
}