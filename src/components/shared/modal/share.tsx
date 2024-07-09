"use client"
import { ReactNode } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import { ShareForm } from "../forms";


export function ShareModal({ children }: { children: ReactNode }) {
  return <Dialog>
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] p-0">
      <DialogHeader className="w-full pt-6 px-6">
        <DialogTitle className="pb-2 md:pb-3 border-b border-black text-xl md:text-2xl font-roboto text-start">Share Result</DialogTitle>
      </DialogHeader>
      <div className="w-full px-6 pb-6">
        <ShareForm />
      </div>
    </DialogContent>
  </Dialog>
}