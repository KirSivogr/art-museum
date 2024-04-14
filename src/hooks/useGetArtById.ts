import { useEffect, useState } from 'react'
import { getArtById } from '@/api/api'
import { ArtByIdWithImage } from '@/types/interfaces'

export const useGetArtById = (id: string | undefined) => {
    const [artData, setArtData] = useState<ArtByIdWithImage | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchArtData = async (id: number) => {
            setIsLoading(true)
            try {
                const data = await getArtById(id)
                const artWithImage: ArtByIdWithImage = {
                    ...data,
                    imageUrl: `https://www.artic.edu/iiif/2/${data.image_id}/full/387,/0/default.jpg`,
                }

                setArtData(artWithImage)
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }

        id && fetchArtData(+id)
    }, [id])
    return { artData, isLoading }
}