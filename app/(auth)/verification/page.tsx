import { API } from "@/util/apiDir";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams:Promise<{ token?: string }>;
}) {

  const { token } = await searchParams;
  console.log(token)

  if (!token) {
    redirect("/login");
  }
console.log("Final URL:", `${API.BASE_URL}/api/v1/auth/verify`);
  try {
    const res = await fetch(`${API.BASE_URL}/api/v1/auth/verify?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
   
      cache: "no-store",
    });
    console.log(`This is the fetched value status ${res.status}`)

    if (!res.ok) {
      console.log("Verification failed:", res.status);
      redirect("/login");
    }

    redirect("/set-up");

  } catch (error) {
    redirect("/set-up");
  }

  return null;
}