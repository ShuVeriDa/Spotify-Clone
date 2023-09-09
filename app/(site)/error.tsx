"use client"

import {NextPage} from "next";
import {Box} from "@/components/Box";

interface IErrorProps {
}

const Error: NextPage<IErrorProps> = () => {
  return (
    <Box className={"h-full flex items-center justify-center"}>
      <div className={"text-neutral-400"}>
        Something went wrong
      </div>
    </Box>
  );
};
export default Error