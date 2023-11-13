import { atom } from "recoil";

type AuthModalState = {
  isOpen: boolean;
  type: "login" | "register" | "forgetpassword";
};

const initialAUthModalState: AuthModalState = {
  isOpen: false,
  type: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: initialAUthModalState,
});
