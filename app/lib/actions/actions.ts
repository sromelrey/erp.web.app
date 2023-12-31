"use server";
import { signIn } from "@/auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log("credentials", Object.fromEntries(formData));
    await signIn("credentials", Object.fromEntries(formData));
  } catch (error) {
    console.log({ errormessage: error });
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialSignin";
    }
    throw error;
  }
}
