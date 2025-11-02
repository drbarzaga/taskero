import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AuthResponse } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Wraps an async function with try/catch error handling
 * Returns an AuthResponse with success status and message
 */
export async function attempt<T>(
  fn: () => Promise<T>,
  successMessage: string,
  errorMessage?: string
): Promise<AuthResponse> {
  try {
    await fn();
    return {
      success: true,
      message: successMessage,
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || errorMessage || "Operation failed",
    };
  }
}

/**
 * Wraps an async function with try/catch error handling
 * Returns the value on success, or an error response on failure
 */
export async function attemptWithValue<T>(
  fn: () => Promise<T>,
  errorMessage?: string
): Promise<T | AuthResponse> {
  try {
    return await fn();
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || errorMessage || "Operation failed",
    };
  }
}
