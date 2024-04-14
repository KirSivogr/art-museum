import { useEffect, useState } from 'react';

import { getArtLists } from '@/api/api';
import { ArtByIdWithImage } from '@/types/interfaces';

interface UseFetchArtListProps {
  artList: ArtByIdWithImage[];
  totalPages: number;
  isLoading: boolean;
}

export function useGetArtList(
  query: string | undefined,
  pageNumber: number,
): UseFetchArtListProps {
  const [artList, setArtList] = useState<ArtByIdWithImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchArtList = async () => {
      setIsLoading(true);
      try {
        const [res, pagination] = await getArtLists(query, pageNumber);

        const artsWithImages = res.map(
          (data: ArtByIdWithImage) =>
            ({
              ...data,
              imageUrl: `https://www.artic.edu/iiif/2/${data.image_id}/full/387,/0/default.jpg`,
            } as ArtByIdWithImage),
        );

        setArtList(artsWithImages);
        setTotalPages(pagination.total_pages);
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtList();
  }, [query, pageNumber]);

  return { artList, isLoading, totalPages };
}
