import React from "react";
import { getData, postData } from
 '@/utils/api';
export default function Billing(){
  const openPortal = async ()=>{
    const { data } = await api.post("/stripe/create-portal-session", {});
    window.location.href = data.url;
  };
  return (
    <div>
      <h2>Billing</h2>
      <button onClick={openPortal}>Open Billing Portal</button>
    </div>
  );
}
