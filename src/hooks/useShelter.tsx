import { UseQueryOptions, useQuery, UseQueryResult } from '@tanstack/react-query'
import { getShelter } from '../service/shelter/getShelter'
import { IShelter } from '../interfaces/shelter'

export {getShelter} from '../service/shelter/getShelter'

export function useShelter
(options?: Partial<UseQueryOptions<IShelter, Error>>
    
): UseQueryResult<IShelter, Error> {
    const result = useQuery({
        staleTime: Infinity,
        ...options,
        queryKey: ['get-shelter'],
        queryFn: () => getShelter(),
    })

    return result
}