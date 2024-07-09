"use client"
import { authSuccessSchema } from "@/schema/auth"
import { z } from "zod"
import { useUserStore } from './user.store';
import { Results, useResultsStore } from "./results.store"
import { ReactNode, useEffect } from "react";
import dataSample from "@/data.json"
import appointmentData from "@/appointments.json"
import { Appointments, useAppointmentsStore } from "./appoinments.store";
const resultsSample = dataSample as Results[]
const appointmentsSample = appointmentData as Appointments[]

export default function GlobalStore({ children, access }: { children: ReactNode; access?:string}) {
  const { setUser } = useUserStore();
  const { setFetching, setResults } = useResultsStore();
  const { setFetchingAppointments, setAppointments } = useAppointmentsStore()
  useEffect(() => {
    console.log(access)
    if (access) {
      //setUser(user);
      setResults(resultsSample); //with more than 5 elements
      setAppointments(appointmentsSample)
      //setResults(resultsSample.slice(0, 4)) //example with no more than 5 elements to test pagination

      // setFetching(true);
      // fetch("/api/results",{ cache: "no-store" }).then(response=>response.ok ? response.json(): false).then((data:any)=>{
      //   if(data){
      //     console.log(data)
      //     setResults(data as Results[])          
      //   }
      // }).finally(()=>{
      //   setFetching(false)
      // })
    }
  }, [])
  return children;
}