import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

type ErrorAlertProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  errorMessage: string | null;
};

const ErrorPopUp = ({ open, setOpen, errorMessage }: ErrorAlertProps) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-dark-300 border-none text-white  pb-20 items-center p-10">
        <AlertDialogHeader className=" items-center">
          <AlertDialogTitle className="text-3xl text-center">
            {errorMessage}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="flex items-center justify-center">
          <Image
            src="/images/dino.png"
            height={500}
            width={500}
            alt="dino-img"
            className=" h-[60%] w-[60%]"
          />
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction className="w-full rounded-3xl p-6 text-xl   text-black font-semibold font-ibm-plex-sans">
            okay
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ErrorPopUp;
