"use client";
import React, { createContext, useContext, useReducer } from "react";
import { DraftPost } from "@/lib/types";

type FormState = DraftPost & { step: number };

type Action =
  | { type: "SET_FIELD"; field: keyof DraftPost; value: string }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "RESET" };

const initial: FormState = {
  title: "",
  author: "",
  summary: "",
  category: "",
  content: "",
  step: 0,
};

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value } as FormState;
    case "NEXT":
      return { ...state, step: Math.min(state.step + 1, 3) };
    case "BACK":
      return { ...state, step: Math.max(state.step - 1, 0) };
    case "RESET":
      return initial;
    default:
      return state;
  }
}

const Ctx = createContext<any>(null);

export function BlogFormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const set = (field: keyof DraftPost) => (value: string) =>
    dispatch({ type: "SET_FIELD", field, value });
  return (
    <Ctx.Provider value={{ state, dispatch, set }}>{children}</Ctx.Provider>
  );
}

export function useFormCtx() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useFormCtx must be used within BlogFormProvider");
  return ctx;
}
