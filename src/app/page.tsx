"use client";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const user = useUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div>
          {!user.isSignedIn && (
            <>
              <SignInButton />
            </>
          )}
          {!!user.isSignedIn && (
            <>
              <SignOutButton />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
