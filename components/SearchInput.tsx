'use client'

import qs from 'query-string'
import {FC, useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import {Input} from "@/components/Input";

interface ISearchInputProps {
}

export const SearchInput: FC<ISearchInputProps> = () => {
  const router = useRouter()
  const [value, setValue] = useState<string>('')
  const debounceValue = useDebounce<string>(value, 500)

  useEffect(() => {
    const query = {
      title: debounceValue
    }

    const url = qs.stringifyUrl({
      url: '/search',
      query
    })

    router.push(url)
  }, [debounceValue, router])

  return (
    <Input placeholder={'What do you want to listen to ?'}
           value={value}
           onChange={(e) => setValue(e.currentTarget.value)}
    />
  );
};