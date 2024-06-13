"use client";

import { Appbar } from "@repo/ui/appbar";
import { Session } from "inspector";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page(): JSX.Element {
  const session = useSession();
  console.log("Bal Kishan");
  console.log(session);
  return (
    <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
  );
}
