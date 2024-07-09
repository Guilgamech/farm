import { create } from "zustand";
import { resultsDataEntitySchema } from "@/schema/results";
import { z } from "zod";

export type Results = z.infer<typeof resultsDataEntitySchema>;

interface ResultsStoreState {
	results: Results[];
  fetching: boolean,
  setFetching: (payload:boolean) => void;
	setResults: (payload: Results[]) => void;
	addResults: (payload: Results[]) => void;
	removeResults: (payload: Results[]) => void;
}

export const useResultsStore = create<ResultsStoreState>((set) => ({
	results: [] as Results[],
  fetching: false,
  setFetching: (payload:boolean) => set({fetching:payload}),
	setResults: (payload: Results[]) => set({ results: [...payload] }),
	addResults: (payload: Results[]) => set((state) => ({ ...state, results: state.results.concat(payload) })),
	removeResults: (payload: Results[]) =>
		set((state) => {
			const removeIds = payload.map((el) => el.id);
			const filteredIds = state.results.filter((el) => !removeIds.includes(el.id));
			return { ...state, results: [...filteredIds] };
		}),
}));
