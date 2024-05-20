import React from "react";
import { NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { auth } from "@/auth";
import { NavAvatar } from "./avatar";

export default async function Navbar() {
  const session = !!(await auth());

  if (session) {
    return (
      <div className="border-b h-20 flex items-center justify-center">
        <div className="flex w-[75%]">
          <a href="/">
            <div className="flex items-center">
              <NotebookPen size={32} />
              <p className="ml-3 font-bold text-xl">Flashcards</p>
            </div>
          </a>

          <div className="flex items-center ml-auto space-x-5">
            <Button>
              <a href="/dashboard">Dashboard</a>
            </Button>

            <NavAvatar />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b h-20 flex items-center justify-center">
      <div className="flex w-[75%]">
        <a href="/">
          <div className="flex items-center">
            <NotebookPen size={32} />
            <p className="ml-3 font-bold text-xl">Flashcards</p>
          </div>
        </a>

        <div className="flex items-center ml-auto space-x-5">
          <Button>
            <a href="/auth/register">Sign Up</a>
          </Button>
          <Button variant={"secondary"}>
            <a href="/auth/login">Sign In</a>
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
