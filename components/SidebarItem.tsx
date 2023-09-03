import {FC} from 'react';
import {IconType} from "react-icons";
import Link from "next/link";
import {twMerge} from "tailwind-merge";

interface ISidebarItemProps {
  icon: IconType
  label: string
  active?: boolean
  href: string
}

export const SidebarItem: FC<ISidebarItemProps> = (
  {href, active, label, icon: Icon}
) => {
  return (
    <Link href={href}
          // style={{display: "flex"}}
    className={twMerge(`
      flex flex-row h-auto items-center w-full
      gap-x-4 text-md font-medium cursor-pointer 
      hover:text-white transition text-neutral-400 
      py-1`, active && 'text-white')}
    >
      <Icon size={26}/>
      <p className={'truncate w-full'}>{label}</p>
    </Link>
  );
};