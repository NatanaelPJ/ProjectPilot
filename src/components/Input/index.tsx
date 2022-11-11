import {ChangeEvent, useState} from 'react'
import { MdSearch } from 'react-icons/md'
import { ContainerInputSearch, Input } from './styles'

export function InputSearch(props : any){
  const [query, setQuery] = useState('')
  const {addFilter} = props
  const handleInputChange = (e : ChangeEvent<HTMLInputElement> ) => {
    const currentValue = e.target.value
    setQuery(currentValue)
    addFilter(currentValue)
  }


  return(
    <>
      <ContainerInputSearch>
        <MdSearch width={24} height={24}/>
        <Input value={query} onChange={handleInputChange} placeholder='Pesquise aqui!'/>
      </ContainerInputSearch>
    </>
  )
}