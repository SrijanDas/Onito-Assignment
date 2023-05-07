import Backdrop from "@/components/shared/Backdrop";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/users");
  }, [router]);
  return (
    <div className="min-h-screen">
      <Backdrop />
    </div>
  );
}
