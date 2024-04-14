import { useParams } from 'react-router-dom'
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { GlobalStyles } from "@/pages/styled";
import {Loader} from "@components/Loader";
import { useFetchArtById } from '@/hooks/useFetchArtById'
import {InfoPageContent} from "@components/InfoPageContent";

export const InfoPage = () => {
    const { id } = useParams()
    const { artData, isLoading } = useFetchArtById(id);

    return (
        <>
            <GlobalStyles />
            <Header />
            {artData
                ?
                <InfoPageContent artData={artData} />
                :
                <h2>
                    {isLoading ? <Loader /> : 'Something went wrong! Please try again later!'}
                </h2>
            }
            <Footer />
        </>

    )
}