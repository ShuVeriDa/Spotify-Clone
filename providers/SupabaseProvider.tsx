"use client"

import {FC, ReactNode, useState} from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface ISupabaseProviderProps {
  children: ReactNode
}

export const SupabaseProvider: FC<ISupabaseProviderProps> = ({children}) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};