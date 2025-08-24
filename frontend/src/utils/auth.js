import { useEffect } from "react";
import { useRouter } from "next/router";

export default function withAuth(Page) {
  return function Guard(props) {
    const router = useRouter();
    useEffect(() => {
      if (typeof window === "undefined") return;
      const token = localStorage.getItem("token");
      if (!token) router.replace("/login");
    }, [router]);
    return <Page {...props} />;
  };
  }
