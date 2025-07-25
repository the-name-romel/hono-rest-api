import * as React from "react";

type EmailVerifyProps = {
  firstName: string;
  url: string;
};

export const EmailVerify = ({ firstName, url }: EmailVerifyProps) => {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>Please verify your email address by clicking the link below:</p>
      <a href={url}>Verify Email</a>
    </div>
  );
};
