import {API} from "@/util/apiDir"
export default async function Page({
 searchParams,
}:{searchParams:Promise<{token?: string}>}){
const params= await searchParams
const token = params?.token 

console.log(" this is the token" +token)
try{
  const res = await fetch(`${API.BASE_URL}/api/v1/auth/verify`,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({token}),
    cache:"no-cache" //Important for POST in server components
  });

  if (!res.ok){
    throw new Error("verification failed")
  }

  const data = await res.json();
  console.log(data)

}catch(error){

}
return<div>Token {token}</div>



}