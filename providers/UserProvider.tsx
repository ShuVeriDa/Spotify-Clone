import {FC, ReactNode} from 'react';
import {MyUserContextProvider} from "@/hooks/useUser";

interface IUserProviderProps {
  children: ReactNode
}

export const UserProvider: FC<IUserProviderProps> = ({children}) => {
  return (
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
  );
};