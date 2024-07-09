export interface OrderResponse {
  code: number;
  data: OrderData;
}

export interface PaymentData {
  source_id: string;
  customer_id: string;
  last4: string;
  brand: string;
  exp_month: number;
  exp_year: number;
  user_email: string;
}


export interface InsuranceData {
  term_id: number;
  name: string;
  slug: string;
  image?: string;
  is_poc_disabled: number;
}
export interface QuestionFeedbackDataEntity {
  question: string;
  option_text?: string;
}
export interface DoctorScriptEntity {
  image_data: string;
  file_url: string;
  image_base64: string;
  file_extension: string;
  blobid: string;
}
export interface BridgeData {
  id: number;
  bridge_user_id: string;
  bridge_data: string;
}

export interface WLConfigData {
  exam_ids: string;
  default_exam_id: string;
  is_minor_allow: string;
  disable_exam: string;
  insurance_ids: string;
  disable_insurance: string;
  default_insurance_id: string;
  default_zip_code: string;
  order_fax_hide: string;
  order_insurance_hide: string;
  order_billing_hide: string;
  order_doctor_hide: string;
  order_show_message: string;
  booking_insurance_hide: string;
  paradigm_lab: string;
  booking_link: string;
  minor_reg: string;
  static_dob: string;
  click_to_book_ids: string;
  redirection_url: RedirectionUrl;
}
export type RedirectionUrl = {[key in string]:string}

export interface CompanyConfigData{
  quality_flow?: string;
  enable_upload_dr_script_flow: string;
  reason_for_test: string;
  insurance_required?: string;
  insurance_member_id_required?: string;
  relationship_to_policy_holder?: string;
  show_upload_insurance_card: string;
  driver_license_required: string;
  company_aoe_questionnaire_required?: string;
  company_questionnaire_required?: string;
  pre_test_question?: string;
  // QUESTION
  // what more fields like has some variations in different responses
}

export interface OrderData {
  company_post_id: number;
  lab_data_state: string;
  success_order_text: string;
  order_id: string;
  pec_event_id: string;
  client_account_id: string;
  header_footer_added: boolean;
  main_mesage: string;
  paid_message: string;
  sub_message: string;
  national_registry_app_message: string;
  lab_logo_url: string;
  lab_title: string;
  lab_address: string;
  lab_data_is_national_registry: number;
  appointment_time: string;
  appointment_date: string;
  display_barcode: boolean;
  barcode_type: string;
  barcode_number: string;
  barcode_image: string;
  exam_name: string;
  exam_panel: string;
  exam_panel_data?: string[];
  patient_name: string;
  invitation_creator_id: number;
  patient_id: string;
  string_dob: string;
  gender: string;
  phone: string;
  email: string;
  homeaddress: string;
  is_color: boolean;
  reasons: string;  
  doctor_comments: string;
  most_recent_visit: string;  
  is_paid_amount: string;
  insurance_name: string;
  insurance_data: InsuranceData;
  insurance_id: string;
  display_billing_type: boolean;
  appointment_status: number;
  question_feedback_data?: QuestionFeedbackDataEntity[];
  reason_for_cancellation: string;
  is_poc_app: boolean;
  e_reqs: string;
  doctor_name: string;
  doctor_suffix: string;
  doctor_npi_number: number;
  doctor_phone: string;
  physician_address: string;
  created_by: number;
  pending_order_id: number;
  is_super_admin: boolean;
  appointment_creator: string;
  poc_provider_label: string;
  date_time_zone: string;
  created_on: string;
  lab_parent_company_id: number;
  is_doc_script_upload: number;
  doctor_script?: DoctorScriptEntity[];
  is_labcorp_doctor_scripts: boolean;
  current_date: string;
  past_date: string;
  special_exam_type: number;
  order_another_po_id: number;
  is_doctor_success_page: boolean;
  is_patient_success: boolean;
  appointment_timestamp: number;
  order_right_text_head: string;
  pre_guidelines: string;
  isAuthRequird: boolean;
  appointment_type: number;
  is_click_to_book: number;
  is_minor: string;
  minor_of: string;
  minor_of_parent_email: string;
  minor_of_parent_phone: string;
  test_compendium_ids: string;
  bridge_data: BridgeData;
  is_ohsu: number;  
  is_lab_auto_confirm: number;
  new_success_head_text: string;
  order_view: string;
  new_success_head_sub_text: string;
  is_homesleep_test: boolean;
  is_homekit_exam: string;
  is_observe_testing: boolean;
  is_testkit_exam: boolean;
  total_paid_amount: number;  
  custom_mm_price: string;
  exam_fees: number;
  labfinder_order_amount: number;
  lab_type: string;
  w_l_config_data?: WLConfigData[] | WLConfigData;
  physician_transaction_id: string;
  is_coronavirus_test: boolean;
  location: number;
  is_MinuteMed: boolean;
  payment_data?: PaymentData | PaymentData[];
  lab_data_zipcode: string;
  company_name: string;
  exam_category?: string[];
  location_image: string;
  mm_enabled_for_state?: string[];
  lf_mm_exclude_locatios?: string[];
  lab_exam_price: number;
  bioreference_order_update: boolean;  
  company_config_data?: CompanyConfigData | CompanyConfigData[];
  // QUESTION
  bridge_patient_data?: (unknown)[]; // not have data
  exam_reason_list?: (string | unknown)[]; // ["R03.0",[]], have this in some response whats means is a compose array like string an array of what?
  add_bioreference_exam_name?: unknown[]; // dont know the data
  additional_charge_data?: unknown[]; // dont know the data
  success_page_message?: string | string[]; // can be string array cause in some examples appear as array?
}


import { z } from 'zod';

const PaymentData = z.object({
  source_id: z.string(),
  customer_id: z.string(),
  last4: z.string(),
  brand: z.string(),
  exp_month: z.number(),
  exp_year: z.number(),
  user_email: z.string(),
});

const InsuranceData = z.object({
  term_id: z.number(),
  name: z.string(),
  slug: z.string(),
  image: z.string().optional(),
  is_poc_disabled: z.number(),
});

const QuestionFeedbackDataEntity = z.object({
  question: z.string(),
  option_text: z.string().optional(),
});

const DoctorScriptEntity = z.object({
  image_data: z.string(),
  file_url: z.string(),
  image_base64: z.string(),
  file_extension: z.string(),
  blobid: z.string(),
});

const BridgeData = z.object({
  id: z.number(),
  bridge_user_id: z.string(),
  bridge_data: z.string(),
});

const RedirectionUrl = z.record(z.string());



const CompanyConfigData = z.object({
  quality_flow: z.string().optional(),
  enable_upload_dr_script_flow: z.string(),
  reason_for_test: z.string(),
  insurance_required: z.string().optional(),
  insurance_member_id_required: z.string().optional(),
  relationship_to_policy_holder: z.string().optional(),
  show_upload_insurance_card: z.string(),
  driver_license_required: z.string(),
  company_aoe_questionnaire_required: z.string().optional(),
  company_questionnaire_required: z.string().optional(),
  pre_test_question: z.string().optional(),
});


const WLConfigData = z.object({
  exam_ids: z.string(),
  default_exam_id: z.string(),
  is_minor_allow: z.string(),
  disable_exam: z.string(),
  insurance_ids: z.string(),
  disable_insurance: z.string(),
  default_insurance_id: z.string(),
  default_zip_code: z.string(),
  order_fax_hide: z.string(),
  order_insurance_hide: z.string(),
  order_billing_hide: z.string(),
  order_doctor_hide: z.string(),
  order_show_message: z.string(),
  booking_insurance_hide: z.string(),
  paradigm_lab: z.string(),
  booking_link: z.string(),
  minor_reg: z.string(),
  static_dob: z.string(),
  click_to_book_ids: z.string(),
  redirection_url: RedirectionUrl,
});


const OrderData = z.object({
  company_post_id: z.number(),
  lab_data_state: z.string(),
  success_order_text: z.string(),
  order_id: z.string(),
  pec_event_id: z.string(),
  client_account_id: z.string(),
  header_footer_added: z.boolean(),
  main_mesage: z.string(),
  paid_message: z.string(),
  sub_message: z.string(),
  national_registry_app_message: z.string(),
  lab_logo_url: z.string(),
  lab_title: z.string(),
  lab_address: z.string(),
  lab_data_is_national_registry: z.number(),
  appointment_time: z.string(),
  appointment_date: z.string(),
  display_barcode: z.boolean(),
  barcode_type: z.string(),
  barcode_number: z.string(),
  barcode_image: z.string(),
  exam_name: z.string(),
  exam_panel: z.string(),
  exam_panel_data: z.array(z.string()).optional(),
  patient_name: z.string(),
  invitation_creator_id: z.number(),
  patient_id: z.string(),
  string_dob: z.string(),
  gender: z.string(),
  phone: z.string(),
  email: z.string(),
  homeaddress: z.string(),
  is_color: z.boolean(),
  reasons: z.string(),
  doctor_comments: z.string(),
  most_recent_visit: z.string(),
  is_paid_amount: z.string(),
  insurance_name: z.string(),
  insurance_data: InsuranceData,
  insurance_id: z.string(),
  display_billing_type: z.boolean(),
  appointment_status: z.number(),
  question_feedback_data: z.array(QuestionFeedbackDataEntity).optional(),
  reason_for_cancellation: z.string(),
  is_poc_app: z.boolean(),
  e_reqs: z.string(),
  doctor_name: z.string(),
  doctor_suffix: z.string(),
  doctor_npi_number: z.number(),
  doctor_phone: z.string(),
  physician_address: z.string(),
  created_by: z.number(),
  pending_order_id: z.number(),
  is_super_admin: z.boolean(),
  appointment_creator: z.string(),
  poc_provider_label: z.string(),
  date_time_zone: z.string(),
  created_on: z.string(),
  lab_parent_company_id: z.number(),
  is_doc_script_upload: z.number(),
  doctor_script: z.array(DoctorScriptEntity).optional(),
  is_labcorp_doctor_scripts: z.boolean(),
  current_date: z.string(),
  past_date: z.string(),
  special_exam_type: z.number(),
  order_another_po_id: z.number(),
  is_doctor_success_page: z.boolean(),
  is_patient_success: z.boolean(),
  appointment_timestamp: z.number(),
  order_right_text_head: z.string(),
  pre_guidelines: z.string(),
  isAuthRequird: z.boolean(),
  appointment_type: z.number(),
  is_click_to_book: z.number(),
  is_minor: z.string(),
  minor_of: z.string(),
  minor_of_parent_email: z.string(),
  minor_of_parent_phone: z.string(),
  test_compendium_ids: z.string(),
  bridge_data: BridgeData,
  is_ohsu: z.number(),
  is_lab_auto_confirm: z.number(),
  new_success_head_text: z.string(),
  order_view: z.string(),
  new_success_head_sub_text: z.string(),
  is_homesleep_test: z.boolean(),
  is_homekit_exam: z.string(),
  is_observe_testing: z.boolean(),
  is_testkit_exam: z.boolean(),
  total_paid_amount: z.number(),
  custom_mm_price: z.string(),
  exam_fees: z.number(),
  labfinder_order_amount: z.number(),
  lab_type: z.string(),
  w_l_config_data: z.array(WLConfigData).or(WLConfigData).optional(),
  physician_transaction_id: z.string(),
  is_coronavirus_test: z.boolean(),
  location: z.number(),
  is_MinuteMed: z.boolean(),
  payment_data: z.array(PaymentData).or(PaymentData).optional(),
  lab_data_zipcode: z.string(),
  company_name: z.string(),
  exam_category: z.array(z.string()).optional(),
  location_image: z.string(),
  mm_enabled_for_state: z.array(z.string()).optional(),
  lf_mm_exclude_locatios: z.array(z.string()).optional(),
  lab_exam_price: z.number(),
  bioreference_order_update: z.boolean(),
  company_config_data: z.array(CompanyConfigData).or(CompanyConfigData).optional(),
  bridge_patient_data: z.array(z.unknown()).optional(),
  exam_reason_list: z.array(z.union([z.string(), z.unknown()])).optional(),
  add_bioreference_exam_name: z.array(z.unknown()).optional(),
  additional_charge_data: z.array(z.unknown()).optional(),
  success_page_message: z.array(z.string()).or(z.string()).optional(),
});

const OrderResponse = z.object({
  code: z.number(),
  data: OrderData,
});



