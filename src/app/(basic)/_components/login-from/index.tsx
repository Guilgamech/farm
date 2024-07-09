import { authSchema } from "@/schema/auth";
import ClientLoginForm from "./client";
import { loginAction } from "@/services/authService";


export default function LoginForm() {
  const onFormAction = loginAction;
  return (
    <ClientLoginForm
      onFormAction={onFormAction}
    />
  );
}