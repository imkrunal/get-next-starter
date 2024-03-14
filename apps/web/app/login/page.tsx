"use client";

import { Button } from "@repo/ui";
import { signIn } from "next-auth/react";

const Login = () => {
  const handleGithubLogin = async () => await signIn("github");

  return (
    <div>
      <Button onClick={handleGithubLogin}>Sign in with GitHub</Button>
    </div>
  );
};

export default Login;
