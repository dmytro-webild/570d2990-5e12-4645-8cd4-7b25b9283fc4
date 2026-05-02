"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";

export default function SignupPage() {
  return (
    <ThemeProvider>
      <NavbarLayoutFloatingOverlay navItems={[{name: "Home", id: "/"}, {name: "Login", id: "/login"}, {name: "Signup", id: "/signup"}]} brandName="GenEco Travel" />
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <ContactSplitForm 
            title="Create an Account"
            description="Start your sustainable journey today."
            inputs={[
                { name: "name", type: "text", placeholder: "Full Name", required: true },
                { name: "email", type: "email", placeholder: "Email", required: true },
                { name: "password", type: "password", placeholder: "Password", required: true }
            ]}
            buttonText="Sign Up"
            onSubmit={(data) => console.log("Signup", data)}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}