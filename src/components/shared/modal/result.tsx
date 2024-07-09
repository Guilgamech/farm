"use client"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import { Documents, useResultsDetailStore } from "@/context/result-detail.store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { DocumentSchema } from "@/schema/results";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {ShareModal} from "./share";
import { ImageViewer, PdfViewer } from "../view";

export function ResultModal({ children, type, pec_event_id, result_count }: {
  children: ReactNode,
  type: "uploaded_result" | "appointment_result"
  pec_event_id: number,
  result_count: number
}) {
  const { setSelected } = useResultsDetailStore();
  const [fetching, setFetching] = useState(true);
  const [documents, setDocuments] = useState<Documents[]>([])
  const [error, setError] = useState<string>("")
  const [indexDocument, setIndexDocument] = useState<number>(0)
  const getResultDocuments = async () => {
    let response;
    try {
      response = await fetch(`/api/results/${pec_event_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          pec_event_id,
          result_count
        }),
        cache: "no-store"
      })
    } catch (error) {
      console.log(error)
    }
    if (response && response.ok) {
      const responseJson = await response.json()
      if (responseJson && responseJson.data) {
        return responseJson.data as z.infer<typeof DocumentSchema>[]
      }
    }
    if (response && !response.ok) {
      if (response.status === 400) {
        return false
      }
    }
    return "unauthorized"
  }
  return <Dialog onOpenChange={(open) => {
    if (open) {
      setSelected({pec_event_id, type, result_count})
      if (documents.length > 0) {
        setIndexDocument(0)
        setFetching(false)
      } else {
        getResultDocuments().then((result) => {
          setFetching(false)
          if (result && result !== "unauthorized") {
            setDocuments(result)
          } else {
            setError("unauthorized")
          }
        }).finally(() => {
          setFetching(false)
        })
      }

    } else {
      setFetching(true)
      setIndexDocument(0)
      setSelected(null)
    }
  }}>
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
    <DialogContent className="w-full lg:rounded-md max-w-[100vw] h-[100dvh] lg:h-[600px] lg:max-w-[800px] flex flex-col items-start p-0 overflow-y-auto">
      <DialogHeader className="w-full pt-6 px-6">
        <DialogTitle className="pb-2 md:pb-3 border-b border-black text-xl md:text-2xl font-roboto text-start">View Result</DialogTitle>
        <p className="lg:px-4 text-start lg:text-center font-medium">Test results are posted as soon as they are ready. You may see results before you care team has reviewed them. The results will be discussed with you at your follow-up visit.</p>
      </DialogHeader>
      {fetching ? (
        <div className="w-full flex flex-col pb-6 px-6 gap-4">
          {type === "appointment_result" && (<>
            <div className="w-full flex lg:hidden justify-start">
              <Skeleton className="h-6 w-[100px] rounded-sm" />
            </div>
            <div className="w-full flex lg:hidden justify-start">
              <Skeleton className="h-[200px] w-full rounded-sm" />
            </div>
          </>)}

          <div className="w-full flex lg:hidden justify-between">
            <Skeleton className="h-6 w-6 rounded-sm" />
            <Skeleton className="h-6 w-[100px] rounded-sm" />
            <Skeleton className="h-6 w-6 rounded-sm" />
          </div>
          <div className="w-full hidden lg:flex justify-between">
            <Skeleton className="h-6 w-6 rounded-sm" />
            <Skeleton className="h-6 w-[100px] rounded-sm" />
            <Skeleton className="h-6 w-6 rounded-sm" />
          </div>
          <div className="w-full flex justify-center">
            <Skeleton className="h-[300px] lg:h-[340px] w-full rounded-sm" />
          </div>
          <div className="w-full flex justify-end">
            <Skeleton className="h-8 w-[130px] rounded-sm" />
          </div>

        </div>
      ) : (
        <>
          {error === "unauthorized" ? (
            <div className="w-full p-6">
              <p className="text-lg font-medium text-center">Please Login again or contact support.</p>
            </div>
          ) : <>
            {documents.length > 0 && indexDocument !== null && <div className="w-full px-6 h-full">
              <div className="w-full flex flex-col md:flex-row gap-4 lg:max-h-[440px]">
                {type === "appointment_result" && <div className="w-full lg:max-w-[230px]">
                  <h3 className="font-medium text-[18px] py-1 mb-2">{documents[indexDocument].avatar}</h3>
                  <div className="w-full min-h-[200px] lg:min-h-[340px] max-h-[340px] bg-gray-100 shadow rounded-md flex flex-col gap-2 items-end p-2 overflow-y-auto">
                    {documents[indexDocument].message.length > 0 ? (
                      documents[indexDocument].message.map((message, index) => (
                        <p key={`dr-message-${index}`} className="max-w-[80%] flex flex-wrap py-2 px-4 bg-primary text-white rounded-md shadow">{message}</p>
                      ))) : (<p className="w-full text-center font-medium py-2">No Message</p>)}
                  </div>
                </div>}
                <div className="w-full">
                  <div className="w-full flex justify-between items-center mb-2">
                    <button className="rounded-sm border-0 p-1 w-fit h-fit disabled:opacity-50 hover:bg-primary hover:text-white" disabled={indexDocument === 0} onClick={() => setIndexDocument(indexDocument - 1)}><ChevronLeft className="w-6 h-6" /></button>
                    <span className="font-medium text-[18px]">Result {indexDocument + 1} of {result_count} </span>
                    <button className="rounded-sm border-0 p-1 w-fit h-fit disabled:opacity-50 hover:bg-primary hover:text-white" disabled={indexDocument === result_count - 1} onClick={() => setIndexDocument(indexDocument + 1)}><ChevronRight className="w-6 h-6" /></button>
                  </div>
                  {documents[indexDocument].src && documents[indexDocument].type === "pdf" && <PdfViewer url={`https://api.labfinder.com/storage${documents[indexDocument].src}`} />}
                  {documents[indexDocument].src && documents[indexDocument].type !== "pdf" && <ImageViewer src={`https://api.labfinder.com/storage${documents[indexDocument].src}`} />}
                </div>

              </div>
              <div className="w-full flex justify-end pt-[18px] pb-6 sm:pb-0">
                <ShareModal>
                  <Button variant="default" className="px-6 rounded-md">Share Result</Button>
                </ShareModal>
              </div>
            </div>}
          </>}
        </>
      )}
    </DialogContent>
  </Dialog>
}
