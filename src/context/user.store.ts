import { create } from 'zustand';
import { authSuccessSchema } from "@/schema/auth"
import { z } from "zod"


export type User = z.infer<typeof authSuccessSchema>

interface UserStoreState {
  user: User;
  setUser: (payload: User) => void;
  removeUser: () => void;
}

const initialState: User = {
  token: "",
  user_id: -1,
  user_name: "",
  user_type: "",
  first_name: "",
  middle_name: "",
  last_name: "",
  remember_me: "",
  insurance_provider_slug: "",
  insurance_id: -1,
  insurance_provider_id: "",
  zip_code: "",
  npi_number: -1,
  referral_doctors: -1,
  login_count: "",
  lfrole: "",
  is_poc_provider: "",
  rpr_i_am_a: "",
  ellkay_subscriber_key: "",
  ellkay_site_service_key: "",
  physician_office: "",
  rpr_status: "",
  user_capabilities: "",
  company_name: "",
  user_role_id: "",
  role: "",
  user_role_type: "",
};

export const useUserStore = create<UserStoreState>((set) => ({
  user: initialState,
  setUser: (payload: User) => set((state) => ({ ...state, user: payload })),
  removeUser: () => set({ user: initialState }),
}));