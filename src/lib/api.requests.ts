import { Results } from "@/context/results.store";
import { User } from "@/context/user.store";
import { responseResultsSchema, responseDocumentSchema, DocumentSchema, bodyParamsResultShareSchema } from "@/schema/results";
import settings from "@/settings";
import { z } from "zod";
import { waitTime } from "./utils";
import { AppointmentResponseSchema, DataEntityAppointmentResponseSchema } from "@/schema/appointments";

export const getAllResultsForUser = async (user:User)=>{
  const firstPage = await getPageResults({page:1, user})
  let data:Results[] = []
  if(firstPage && firstPage.data){
    data = data.concat(firstPage.data)
    let cantPages = firstPage.last_page ?? 1;
    while (cantPages > 1) {
      await waitTime(500);
      let nextPage = await getPageResults({page:cantPages, user})      
      if(nextPage && nextPage.data){
        data = data.concat(nextPage.data)
      }
      cantPages --;
    }
  }
  return data
}

const getPageResults = async ({page=1, user}: {page:number, user:User})=>{
  let results;
  try {
    results = await fetch(`${settings.API_URL}/appointment/getappointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify({ 
        status: "is_result",
        result_type : "appointment_result",
        selected_lab_type : "all",
        user_id : user.user_id,
        page
      }),
      cache: "no-store"
    })    
  } catch (error) {
    console.log(error)
  }
  if(results && results.ok){
    const data = await results.json() as z.infer<typeof responseResultsSchema>;
    if(data.code === 200){
      return data.data
    }    
    return false;
  }
  return false
}

export const getAllDocuments = async ({token, pec_event_id, type, result_count}:{
  token:string, 
  pec_event_id: number,
  type: "uploaded_result" | "appointment_result",
  result_count: number})=>{
  let patient_report_index = 0
  let documents = [] as z.infer<typeof DocumentSchema>[]
  console.log({token, pec_event_id, type, result_count})
  while (patient_report_index < result_count){
    const documentResult = await getDocument({token, patient_report_index, type, pec_event_id})
    if(documentResult && documentResult === "unauthorized"){
      return "unauthorized"
    }
    else if(documentResult){
      documents.push(documentResult)
    }
    else{
      return false
    }
    patient_report_index ++;
  }
  return documents
}

const getDocument = async ({patient_report_index=0, token, type, pec_event_id}: {patient_report_index:number; token:string; type: "uploaded_result" | "appointment_result"; pec_event_id: number})=>{
  let resultDocument;
  try {
    resultDocument = await fetch(`${settings.API_URL}/patient/viewResult`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ 
        patient_report_index,
        type,
        pec_event_id
      }),
      cache: "no-store"
    })    
  } catch (error) {
    console.log(error)
  }
  if(resultDocument){
    const data = await resultDocument.json() as z.infer<typeof responseDocumentSchema>;
    if(data.code === 200){
      return data.data as z.infer<typeof DocumentSchema>
    }
    if(data.code === 401){
      return "unauthorized"
    }
    return false;
  }
  return false
}

export const shareResult = async ({token, user_id, patient_entered_email, patient_share_post_id}:{
  token:string; user_id:string; patient_entered_email:string; patient_share_post_id:string;
})=>{
  return new Promise<boolean>(resolve=>{
    fetch(`${settings.API_URL}/patient/patientHistoryShare`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        uid_share:user_id, patient_entered_email, share_type:"pec_events", patient_share_post_id
      }),
      cache: "no-store"
    }).then(()=>resolve(true)).catch(()=>resolve(false))
  })
}

export const getAllAppintmentsForUser = async (user:User)=>{
  const firstPage = await getPageAppointment({page:1, user})
  let data:z.infer<typeof DataEntityAppointmentResponseSchema>[] = []
  if(firstPage && firstPage.data){
    data = data.concat(firstPage.data)
    let cantPages = firstPage.last_page ?? 1;
    while (cantPages > 1) {
      await waitTime(500);
      let nextPage = await getPageAppointment({page:cantPages, user})      
      if(nextPage && nextPage.data){
        data = data.concat(nextPage.data)
      }
      cantPages --;
    }
  }
  return data
}

const getPageAppointment = async ({page=1, user}: {page:number, user:User})=>{
  let results;
  try {
    results = await fetch(`${settings.API_URL}/appointment/getappointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify({
        status: "is_appointment",
        action: "get_appointment_data",
        selected_lab_type : "all",
        user_id : user.user_id,
        page
      }),
      cache: "no-store"
    })    
  } catch (error) {
    console.log(error)
  }
  if(results && results.ok){
    const response = await results.json() as z.infer<typeof AppointmentResponseSchema>;
    if(response.code === 200){
      return response.data 
    }    
    return false;
  }
  return false
}

export const getOrderInfo = async ({token, id}:{token:string, id:string}) =>{
  let results;
  try {
    results = await fetch(`${settings.API_URL}/appointment/getappointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        appointment_eventid: id
      }),
      cache: "no-store"
    })
  } catch (error) {
    console.log(error)
  }
  if(results && results.ok){
    const response = await results.json() as {code:number, data:any}
    if(response.code === 200){
      return response.data 
    }    
    return false;
  }
  return false
}
