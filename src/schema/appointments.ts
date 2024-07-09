import { z } from "zod";

const LinksEntity = z.object({
	url: z.string().nullable(),
	label: z.string(),
	active: z.boolean(),
});

export type StatusAppointment = {
	[key in number]: {
		text: string;
		className: string;
	};
};

export const statusAppointment: StatusAppointment = {
	0: {
		text: "Confirmed",
		className: "gradient-orange",
	},
	1: {
		text: "Confirmed",
		className: "gradient-green",
	},
	2: {
		text: "Results Pending",
		className: "gradient-orange",
	},
	3: {
		text: "Results Uploaded",
		className: "gradient-green",
	},
	4: {
		text: "Request Canceled",
		className: "gradient-orange",
	},
};

export type BasicAppointment = {
	id: number;
	appointment_examtype: string;
	company: string;
	appointment_date: string;
	address: string;
	insurance_name: string;
	result_type: string;
	exam_price: number;
	appointment_status: number;
	lab_logo: string;
	order: string;
	dateOrder: number;
  result_count: number;
};

const DataEntityAppointmentResponseSchema = z.object({
	appointment_eventid: z.number(),
	id: z.number(),
	is_pending_order: z.number(),
	post_id: z.number(),
	appointment_status: z.number(),
	patient_user_id: z.number(),
	appointment_examtype: z.string(),
	exam_id: z.number(),
	appointment_labid: z.number(),
	appointment_title: z.string(),
	insurance_name: z.string(),
	insurance_id: z.string(),
	insurance_term_id: z.number(),
	insurance_card_link: z.string(),
	appointment_doctor_npi: z.number(),
	appointment_doctor: z.string().nullable(),
	appointment_doctor_phone: z.string(),
	physician_id: z.number(),
	appointment_date: z.number(),
	resultlink: z.string(),
	doctor_script: z.string(),
	labtype: z.string(),
	exam_contrast: z.string().nullable(),
	post_date: z.string(),
	result_date: z.string().nullable(),
	doctor_suffix: z.string(),
	patient_home_address: z.string(),
	title: z.string(),
	internal_message_status: z.number(),
	special_exam_type: z.number(),
	result_count: z.number(),
	user_email: z.string(),
	result_on_hold: z.number(),
	reason_for_cancellation: z.string().nullable(),
	created_by: z.number(),
	invitation_creator_id: z.number(),
	address: z.string(),
	street: z.string(),
	state_long: z.string(),
	state: z.string(),
	zipcode: z.string(),
	country: z.string(),
	lat: z.number(),
	wlong: z.number(),
	company_post_id: z.number(),
	is_national_registry: z.number(),
	company_registered: z.number(),
	company: z.string(),
	phone: z.string(),
	post_name: z.string(),
	app_date: z.string(),
	rating_review_flag: z.string(),
	app_time: z.string(),
	result_type: z.string(),
	read_status_count: z.unknown().nullable(),
	message_count: z.number(),
	is_click_to_book: z.number(),
	homekit_exam_linking: z.number(),
	appointment_type: z.number(),
	uber_link: z.string(),
	lab_logo: z.string(),
	is_highmodality_exam: z.boolean(),
	isMMexam: z.boolean(),
	homekit_exam: z.number(),
	video_seen: z.boolean(),
	date_lab_appointment: z.string(),
	location_image: z.string(),
	paid_amount: z.number(),
	patient_first_name: z.string(),
	patient_last_name: z.string(),
	patient_sex: z.string(),
	patient_name: z.string(),
	patient_phone_number: z.string(),
	patient_dob_month: z.string(),
	patient_dob_month_val: z.union([z.number(), z.string()]),
	patient_dob_day: z.string(),
	patientdob_year: z.string(),
	patient_dob: z.string(),
	patient_address: z.string(),
	patient_address_2: z.string(),
	patient_city: z.string(),
	patient_state: z.string(),
	patient_zip: z.string(),
	patient_email: z.string(),
	testkit_exam: z.boolean(),
	exam_price: z.number(),
});

const DataAppointmentResponseSchema = z.object({
	booking_link: z.string(),
	single_company_post_id: z.unknown().nullable(),
	w_l_config_data: z.array(z.unknown().nullable()).nullable(),
	current_page: z.number(),
	data: z.array(DataEntityAppointmentResponseSchema),
	first_page_url: z.string(),
	from: z.number(),
	last_page: z.number(),
	last_page_url: z.string(),
	links: z.array(LinksEntity).nullable(),
	next_page_url: z.string(),
	path: z.string(),
	per_page: z.number(),
	prev_page_url: z.unknown().nullable(),
	to: z.number(),
	total: z.number(),
});

const AppointmentResponseSchema = z.object({
	code: z.number(),
	data: DataAppointmentResponseSchema,
});

export { AppointmentResponseSchema, DataAppointmentResponseSchema, DataEntityAppointmentResponseSchema };
