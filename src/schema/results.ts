import { z } from 'zod';

const resultsLinksEntitySchema = z.object({
  url: z.string().nullable(),
  label: z.string().nullable(),
  active: z.boolean(),
});

const resultsDataEntitySchema = z.object({
  appointment_eventid: z.number(),
  id: z.number(),
  is_pending_order: z.number().nullable(),
  post_id: z.number(),
  appointment_status: z.number(),
  patient_user_id: z.number(),
  appointment_examtype: z.string().nullable(),
  exam_id: z.number(),
  appointment_labid: z.number().nullable(),
  appointment_title: z.string().nullable(),
  insurance_name: z.string().nullable(),
  insurance_id: z.string().nullable(),
  insurance_term_id: z.number().nullable(),
  insurance_card_link: z.string().nullable(),
  appointment_doctor_npi: z.number().nullable(),
  appointment_doctor: z.string().nullable(),
  appointment_doctor_phone: z.string().nullable(),
  physician_id: z.number().nullable(),
  appointment_date: z.number(),
  resultlink: z.string().nullable(),
  doctor_script: z.string().nullable(),
  labtype: z.string().nullable(),
  exam_contrast: z.string().nullable(),
  post_date: z.string().nullable(),
  result_date: z.string().nullable(),
  doctor_suffix: z.string().nullable(),
  patient_home_address: z.string().nullable(),
  title: z.string().nullable(),
  internal_message_status: z.number().nullable(),
  special_exam_type: z.number().nullable(),
  result_count: z.number().nullable(),
  user_email: z.string().nullable(),
  result_on_hold: z.number(),
  reason_for_cancellation: z.union([z.unknown(), z.string().nullable()]),
  created_by: z.number(),
  invitation_creator_id: z.number().nullable(),
  address: z.string().nullable(),
  street: z.string().nullable(),
  state_long: z.string().nullable(),
  state: z.string().nullable(),
  zipcode: z.string().nullable(),
  country: z.string().nullable(),
  lat: z.number().nullable(),
  wlong: z.number().nullable(),
  company_post_id: z.number(),
  is_national_registry: z.number().nullable(),
  company_registered: z.number(),
  company: z.string().nullable(),
  phone: z.string().nullable(),
  post_name: z.string().nullable(),
  app_date: z.string().nullable(),
  rating_review_flag: z.string().nullable(),
  app_time: z.string().nullable(),
  result_type: z.string().nullable(),
  read_status_count: z.string().nullable(),
  message_count: z.number(),
  is_click_to_book: z.number().nullable(),
  homekit_exam_linking: z.number(),
  appointment_type: z.number().nullable(),
  uber_link: z.string().nullable(),
  lab_logo: z.string().nullable(),
  is_highmodality_exam: z.boolean(),
  isMMexam: z.boolean(),
  homekit_exam: z.number(),
  video_seen: z.boolean(),
  date_lab_appointment: z.string().nullable(),
  location_image: z.string().nullable(),
  paid_amount: z.number(),
  patient_first_name: z.string().nullable(),
  patient_last_name: z.string().nullable(),
  patient_sex: z.string().nullable(),
  patient_name: z.string().nullable(),
  patient_phone_number: z.string().nullable(),
  patient_dob_month: z.string().nullable(),
  patient_dob_month_val: z.string().nullable(),
  patient_dob_day: z.string().nullable(),
  patientdob_year: z.string().nullable(),
  patient_dob: z.string().nullable(),
  patient_address: z.string().nullable(),
  patient_address_2: z.string().nullable(),
  patient_city: z.string().nullable(),
  patient_state: z.string().nullable(),
  patient_zip: z.string().nullable(),
  patient_email: z.string().nullable(),
  testkit_exam: z.boolean(),
  exam_price: z.number().nullable(),
});

const resultsDataSchema = z.object({
  booking_link: z.string().nullable(),
  single_company_post_id: z.number().nullable(),
  w_l_config_data: z.array(z.unknown()).nullable(),
  current_page: z.number().nullable(),
  data: z.array(resultsDataEntitySchema).nullable(),
  first_page_url: z.string().nullable(),
  from: z.number().nullable(),
  last_page: z.number().nullable(),
  last_page_url: z.string().nullable(),
  links: z.array(resultsLinksEntitySchema).nullable(),
  next_page_url: z.string().nullable(),
  path: z.string().nullable(),
  per_page: z.number().nullable(),
  prev_page_url: z.string().nullable(),
  to: z.number().nullable(),
  total: z.number().nullable(),
});

const responseResultsSchema = z.object({
  code: z.number().nullable(),
  data: resultsDataSchema,
});

const DocumentSchema = z.object({
  type: z.string(),
  src: z.string(),
  pdf_read_status: z.string(),
  user_type: z.string(),
  message: z.array(z.string()),
  avatar: z.string(),
  event_id: z.string(),
});

const responseDocumentSchema = z.object({
  code: z.number(),
  data: z.union([DocumentSchema , z.undefined()]),
});

const bodyParamsResultDetailSchema = z.object({
  type:z.string(), 
  result_count: z.number().nullable()
})
const bodyParamsResultShareSchema = z.object({
  patient_entered_email: z.string().email(),
  patient_share_post_id: z.string()
})

export type BasicResult = {
  id: number;
  company: string;
  appointment_examtype: string;
  appointment_date: Date;
  result_date: Date;
  order: string;
  type: string;
  result_count: number;
}
export {
  responseResultsSchema,
  resultsLinksEntitySchema,
  resultsDataEntitySchema,
  resultsDataSchema,
  responseDocumentSchema,
  DocumentSchema,
  bodyParamsResultDetailSchema,
  bodyParamsResultShareSchema
}

