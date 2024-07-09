import { create } from "zustand";
import { DataEntityAppointmentResponseSchema } from "@/schema/appointments";
import { z } from "zod";

export type Appointments = z.infer<typeof DataEntityAppointmentResponseSchema>;

interface AppointmentsStoreState {
	appointments: Appointments[];
	fetchingAppointments: boolean;
	selected: "upcomming" | "pass";
	setSelected: (payload: "upcomming" | "pass") => void;
	setFetchingAppointments: (payload: boolean) => void;
	setAppointments: (payload: Appointments[]) => void;
	addAppointments: (payload: Appointments[]) => void;
	removeAppointments: (payload: Appointments[]) => void;
}

export const useAppointmentsStore = create<AppointmentsStoreState>((set) => ({
	appointments: [] as Appointments[],
	fetchingAppointments: false,
	selected: "upcomming",
	setSelected: (payload: "upcomming" | "pass") => set({ selected: payload }),
	setFetchingAppointments: (payload: boolean) => set({ fetchingAppointments: payload }),
	setAppointments: (payload: Appointments[]) => set({ appointments: [...payload] }),
	addAppointments: (payload: Appointments[]) => set((state) => ({ ...state, Appointments: state.appointments.concat(payload) })),
	removeAppointments: (payload: Appointments[]) =>
		set((state) => {
			const removeIds = payload.map((el) => el.id);
			const filteredIds = state.appointments.filter((el) => !removeIds.includes(el.id));
			return { ...state, Appointments: [...filteredIds] };
		}),
}));
