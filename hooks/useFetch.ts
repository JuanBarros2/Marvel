import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatchPagination, usePage } from '../providers/PaginationProvider';
import { useQuery } from '../providers/QueryProvider';

export default function useFetch() {
    const { page = 1 } = usePage();
    const dispatch = useDispatchPagination();
    const [query = ""] = useQuery()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch(`/api/heroes?page=${page}&query=${query}`)
            const { results, pages } = await response.json()
            dispatch({ type: 'updatetotal', payload: pages })
            setData(results)
            setLoading(false)
        }
        fetchData()

    }, [page, query])

    useEffect(() => {
        dispatch({ type: "reset" })
    }, [query])

    useEffect(() => {
        const handleRouteChange = () => setLoading(true)
        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return {
        data,
        loading,
    }
}