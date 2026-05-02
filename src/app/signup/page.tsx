"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";

export default function SignupPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay navItems={[{name: "Home", id: "/"}, {name: "Login", id: "/login"}, {name: "Signup", id: "/signup"}]} brandName="GenEco Travel" />
      </div>
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
            useInvertedBackground={false}
            onSubmit={(data) => console.log("Signup", data)}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}