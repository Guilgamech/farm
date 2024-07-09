import { create } from "zustand";
import { z } from "zod";

export interface Documents{
  type: string;
  src: string;
  pdf_read_status: string;
  user_type: string;
  message: string[];
  avatar: string;
  event_id: string;
}

export interface ResultDetail {
  pec_event_id: number,
  type: "uploaded_result" | "appointment_result",
  result_count: number,
};

interface ResultsDetailStoreState {
	selected: ResultDetail | null;
  setSelected: (payload:ResultDetail | null ) => void;
}

const initialState = {
  selected:null,
  documents: [] as Documents[],
  fetching: true,
}

export const useResultsDetailStore = create<ResultsDetailStoreState>((set) => ({
	selected: null,  
	setSelected: (payload) => set({selected:payload}),
}));
