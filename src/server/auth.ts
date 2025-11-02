// SERVER ACTIONS TO HANDLE AUTHENTICATION

"use server";

import { auth } from "@/lib/auth";
import { AuthResponse } from "@/types";
import { headers } from "next/headers";
import { attempt, attemptWithValue } from "@/lib/utils";

export async function signIn(
  email: string,
  password: string
): Promise<AuthResponse> {
  return attempt(
    () =>
      auth.api.signInEmail({
        body: {
          email,
          password,
        },
        asResponse: false,
      }),
    "Signed in successfully",
    "Failed to sign in"
  );
}

export async function signUp(name: string, email: string, password: string) {
  return attempt(
    () =>
      auth.api.signUpEmail({
        body: {
          name,
          email,
          password,
        },
        asResponse: false,
      }),
    "Signed up successfully",
    "Failed to sign up"
  );
}

export async function forgotPassword(email: string) {
  return attempt(
    () =>
      auth.api.forgetPassword({
        body: {
          email,
        },
        asResponse: false,
      }),
    "Password reset email sent",
    "Failed to forgot password"
  );
}

export async function signOut() {
  return attempt(
    async () => {
      await auth.api.signOut({
        headers: await headers(),
      });
    },
    "Signed out successfully",
    "Failed to sign out"
  );
}

export async function getSession() {
  return attemptWithValue(async () => {
    return await auth.api.getSession({
      headers: await headers(),
    });
  }, "Failed to get session");
}
