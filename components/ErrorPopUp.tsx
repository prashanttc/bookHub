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

type ErrorAlertProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  errorMessage: string | null;
};

const ErrorPopUp = ({ open, setOpen, errorMessage }: ErrorAlertProps) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-dark-300 border-none text-white h-[444px] items-center " >
        <AlertDialogHeader className=" items-center">
          <AlertDialogTitle className="text-2xl">{errorMessage}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="w-full">confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ErrorPopUp;
