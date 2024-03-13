"use client";

import { Button } from "@repo/ui/button";
import { signIn } from "next-auth/react";

const Home = () => {
  const handleGithubLogin = async () => await signIn("github");

  return (
    <div>
      <Button onClick={handleGithubLogin}>Sign in with GitHub</Button>
    </div>
  );
};

export default Home;
