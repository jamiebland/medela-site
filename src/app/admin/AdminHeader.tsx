"use client";

import { usePathname, useRouter } from "next/navigation";

export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();

  // Don't show header on login page
  if (pathname === "/admin/login") return null;

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <a href="/admin" className="text-lg font-bold text-[#1e3a6e]">
        Medela Blog Admin
      </a>
      <div className="flex items-center gap-4">
        <a
          href="/blog"
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          View blog &rarr;
        </a>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
        >
          Log out
        </button>
      </div>
    </header>
  );
}
