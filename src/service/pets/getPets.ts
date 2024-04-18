import { GetPetResponse, GetPetsRequest } from '../../interfaces/pet'
import httpClient from '../api/httpClient'

export async function getPetsb(params?: GetPetsRequest): Promise<GetPetResponse> {
    try {
        const response = await httpClient.get('/pet', { params })
        return response.data
    } catch (error) {
        console.log('Error searching for pet', error)
        throw error
    }
}