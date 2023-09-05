"use client"

import {FC} from 'react';
import {Toaster} from "react-hot-toast";

interface IToasterProviderProps {
}

export const ToasterProvider: FC<IToasterProviderProps> = () => {
  return (
    <Toaster toastOptions={{
      style: {
        background: '#333',
        color: '#fff'
      }
    }}
    />
  );
};