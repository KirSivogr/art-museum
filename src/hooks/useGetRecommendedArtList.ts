import {useEffect, useState} from "react";
import {ArtByIdWithImage} from "@/types/interfaces";
import {getRecommendedArts} from "@/api/api";

interface UseFetchArtListProps {
    recommendedArtList: ArtByIdWithImage[]
}

export function useGetRecommendedArtList () : UseFetchArtListProps {
    const [recommendedArtList, setRecommendedArtData] = useState<ArtByIdWithImage[]>([])

    useEffect(() => {
        const fetchRecommendedArtData = async () => {
            try {
                const res = await getRecommendedArts();
                const recommendedArtsWithImages = res.map(
                    (data) =>
                        ({
                            ...data,
                            imageUrl: `https://www.artic.edu/iiif/2/${data.image_id}/full/387,/0/default.jpg`,
                        }) as ArtByIdWithImage
                )
                setRecommendedArtData(recommendedArtsWithImages)
            } catch (err) {
                console.log(err);
            }
        }

        fetchRecommendedArtData()
    }, [])
    return { recommendedArtList }
}