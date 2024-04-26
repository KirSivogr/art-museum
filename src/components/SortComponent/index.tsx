import {
    SelectContainer,
    SelectWrapper,
    StyledSelect,
    ArrowDown
} from './styled'
import {ChangeEvent, Dispatch, memo, SetStateAction, useState} from 'react'

import { ArtByIdWithImage, SortType } from '@/types/interfaces'
import { sortCards } from 'src/utils/sortCards'

interface SortComponentProps {
    data: ArtByIdWithImage[]
    setData: Dispatch<SetStateAction<ArtByIdWithImage[]>>
}

export const SortComponent = memo(({ data, setData }: SortComponentProps) => {
    const [sortType, setSortType] = useState<SortType>('')

    const handleSort = (type: SortType) => {
        const sortedData = sortCards(data, type);
        setData(sortedData);
        setSortType(type);
    }

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        handleSort(event.target.value as SortType);
    }

    return (
        <SelectContainer>
            <SelectWrapper>
                <StyledSelect value={sortType} onChange={handleSelectChange}>
                    <option value="">Sorting by</option>
                    <option value="A-Z">Title by A-Z</option>
                    <option value="Z-A">Title by Z-A</option>
                </StyledSelect>
            </SelectWrapper>
            <ArrowDown />
        </SelectContainer>
    )
})