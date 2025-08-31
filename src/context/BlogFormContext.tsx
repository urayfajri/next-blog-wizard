"use client";
import React, { createContext, useContext, useReducer } from "react";
import { DraftPost } from "@/lib/types";

type Errors = Partial<Record<keyof DraftPost, string>>;

type FormState = DraftPost & { step: number; errors: Errors };

type Action =
  | { type: "SET_FIELD"; field: keyof DraftPost; value: string }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "RESET" }
  | { type: "SET_ERROR"; field: keyof DraftPost; message: string }
  | { type: "CLEAR_ERROR"; field: keyof DraftPost }
  | { type: "SET_ERRORS"; errors: Errors };

const initial: FormState = {
  title: "",
  author: "",
  summary: "",
  category: "",
  content: "",
  step: 0,
  errors: {},
};

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: "" }, // clear error on change
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.message },
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: "" },
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: { ...state.errors, ...action.errors },
      };
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

  const setError = (field: keyof DraftPost, message: string) =>
    dispatch({ type: "SET_ERROR", field, message });

  const setErrors = (errors: Errors) =>
    dispatch({ type: "SET_ERRORS", errors });

  const clearError = (field: keyof DraftPost) =>
    dispatch({ type: "CLEAR_ERROR", field });

  return (
    <Ctx.Provider
      value={{ state, dispatch, set, setError, clearError, setErrors }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useFormCtx() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useFormCtx must be used within BlogFormProvider");
  return ctx;
}
