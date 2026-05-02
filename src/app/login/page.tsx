"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";

export default function LoginPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay navItems={[{name: "Home", id: "/"}, {name: "Login", id: "/login"}, {name: "Signup", id: "/signup"}]} brandName="GenEco Travel" />
      </div>
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
            useInvertedBackground={false}
            onSubmit={(data) => console.log("Login", data)}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}