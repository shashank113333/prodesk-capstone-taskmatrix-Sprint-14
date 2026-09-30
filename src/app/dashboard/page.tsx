"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import {
  LayoutDashboard,
  LogOut,
  User,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  Kanban,
  Search,
  Filter,
  Plus
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, logout, hydrateAuth } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    hydrateAuth();
    setLoading(false);
  }, [hydrateAuth]);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [loading, isAuthenticated, router]);

  if (loading || !isAuthenticated) {
    return (
      <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-3 text-slate-400">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" role="status" aria-label="Loading authentication status"></div>
        <p className="text-sm font-medium">Verifying Auth State & Route Protection...</p>
      </main>
    );
  }

  const columns = [
    { id: "todo", title: "To Do", count: 3, color: "border-slate-700 bg-slate-900/50" },
    { id: "in_progress", title: "In Progress", count: 2, color: "border-blue-500/30 bg-blue-950/20" },
    { id: "in_review", title: "In Review", count: 1, color: "border-amber-500/30 bg-amber-950/20" },
    { id: "done", title: "Done", count: 4, color: "border-emerald-500/30 bg-emerald-950/20" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-600/30">
              <Kanban className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                TaskMatrix
              </h1>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block">
                Agile Project Management
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
              <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center font-bold text-xs" aria-hidden="true">
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold text-white leading-tight">
                  {user?.name || "Shashank"}
                </p>
                <p className="text-[10px] text-slate-400 leading-tight">
                  {user?.email || "developer@prodesk.io"}
                </p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                {user?.role || "Developer"}
              </span>
            </div>

            <button
              onClick={() => {
                logout();
                router.push("/login");
              }}
              aria-label="Logout of current session"
              className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl text-xs font-semibold transition"
              title="Sign Out of Session"
            >
              <LogOut className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        <section aria-label="Task Management Toolbar" className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/40 p-4 rounded-2xl border border-slate-800">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" aria-hidden="true" />
            <input
              id="search-tasks"
              name="search"
              type="text"
              aria-label="Search sprint backlog tasks"
              placeholder="Search sprint backlog tasks..."
              className="w-full bg-slate-950 border border-slate-800 pl-9 pr-4 py-2 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button aria-label="Filter Tasks" className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium border border-slate-700 transition">
              <Filter className="w-3.5 h-3.5" aria-hidden="true" />
              Filter Tasks
            </button>
            <button aria-label="Create New Task" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-600/20 transition">
              <Plus className="w-4 h-4" aria-hidden="true" />
              New Task
            </button>
          </div>
        </section>

        <section aria-label="Agile Kanban Board Columns" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map((col) => (
            <div
              key={col.id}
              className={`rounded-2xl border p-4 flex flex-col gap-4 ${col.color}`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="font-semibold text-xs text-slate-200 tracking-wide uppercase">
                  {col.title}
                </span>
                <span className="text-xs bg-slate-800 text-slate-300 font-mono px-2 py-0.5 rounded-full border border-slate-700">
                  {col.count}
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2 hover:border-slate-700 transition cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      TSK-101
                    </span>
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                      High
                    </span>
                  </div>
                  <h3 className="text-xs font-medium text-slate-200">
                    Architect App Router Auth Route Guards
                  </h3>
                  <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800/50">
                    <span>Sprint 14 MVP</span>
                    <span className="text-slate-500">Assignee: {user?.name || "Shashank"}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </section>
      </main>
    </div>
  );
}