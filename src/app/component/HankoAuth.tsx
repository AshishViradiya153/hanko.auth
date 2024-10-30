"use client";

import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL as string;

export default function HankoAuth() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko | null>(null);

  // Initialize Hanko instance
  useEffect(() => {
    if (hankoApi) {
      setHanko(new Hanko(hankoApi));
    } else {
      console.error("Hanko API URL is not defined.");
    }
  }, []);

  // Redirect after successful login
  const redirectAfterLogin = useCallback(() => {
    router.replace("/dashboard");
  }, [router]);

  useEffect(() => {
    if (hanko) {
      const handleSessionCreated = () => {
        redirectAfterLogin();
      };

      hanko.onSessionCreated(handleSessionCreated);

      return () => {
        hanko.onSessionCreated(handleSessionCreated);
      };
    }
  }, [hanko, redirectAfterLogin]);

  // Register Hanko
  useEffect(() => {
    if (hanko) {
      register(hankoApi)
        .then(() => {
          console.log("Hanko registered successfully.");
        })
        .catch((error) => {
          console.error("Error registering Hanko:", error);
        });
    }
  }, [hanko]);

  return <hanko-auth />;
}
