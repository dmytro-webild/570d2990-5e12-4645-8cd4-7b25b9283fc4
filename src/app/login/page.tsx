"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";

export default function LoginPage() {
  return (
    <ThemeProvider>
      <NavbarLayoutFloatingOverlay navItems={[{name: "Home", id: "/"}, {name: "Login", id: "/login"}, {name: "Signup", id: "/signup"}]} brandName="GenEco Travel" />
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <ContactSplitForm 
            title="Login to GenEco"
            description="Welcome back, explorer!"
            inputs={[
                { name: "email", type: "email", placeholder: "Email", required: true },
                { name: "password", type: "password", placeholder: "Password", required: true }
            ]}
            buttonText="Log In"
            onSubmit={(data) => console.log("Login", data)}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}