"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
      } else {
        setUserEmail(data.user.email ?? null);
      }
    };

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-3xl p-8 mx-auto bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold">
          Welcome {userEmail}
        </h1>

        <p className="mt-4 text-gray-600">
          This is your dashboard. Your test performance,
          ranking, and analytics will appear here.
        </p>

        <button
          onClick={handleLogout}
          className="px-4 py-2 mt-6 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </main>
  );
}