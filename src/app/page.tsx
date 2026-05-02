"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Solutions",
          id: "features",
        },
        {
          name: "Impact",
          id: "metrics",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="GenEco Travel"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="GenEco Travel"
      description="Redefining travel for Gen Z, Millennials, and Gen Alpha. Sustainable, carbon-tracked, and hyper-personalized trips powered by next-gen AI."
      buttons={[
        {
          text: "Plan Your Trip",
          href: "#features",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-looking-futuristic-weather-interface_23-2151968694.jpg?_wi=1"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "The Future of Sustainable Travel",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/green-plane-ecofriendly-environment_23-2151582344.jpg",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      features={[
        {
          title: "AI Trip Planner",
          description: "Hyper-personalized itineraries.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-businessman-doing-sport-with-stats_23-2150040521.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/tourist-couple-looking-phone-map_23-2148619900.jpg",
          buttonText: "Start",
        },
        {
          title: "Crowd Density Tracking",
          description: "Real-time crowd avoidance.",
          imageSrc: "http://img.b2bpic.net/free-photo/seaside-elements-helping-tablet_23-2148232522.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/air-ticket-flight-booking-concept_53876-133923.jpg",
          buttonText: "Check",
        },
        {
          title: "AR/VR Exploration",
          description: "Immersive 360 destination previews.",
          imageSrc: "http://img.b2bpic.net/free-photo/technology-integrated-everyday-life_23-2151887041.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/young-man-funny-expression_1194-3070.jpg",
          buttonText: "Explore",
        },
        {
          title: "Accessibility Mapping",
          description: "Ramps, loops, and inclusive travel.",
          imageSrc: "http://img.b2bpic.net/free-photo/disabled-person-wheelchair-street_23-2149190037.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-holding-smartphones_23-2149340995.jpg",
          buttonText: "View",
        },
        {
          title: "Carbon Footprint Tracking",
          description: "Live emission estimations.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-working-as-economist_23-2150062320.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/scoreboard_187299-47502.jpg",
          buttonText: "Calculate",
        },
        {
          title: "Universal Translation",
          description: "AR-powered real-time translation.",
          imageSrc: "http://img.b2bpic.net/free-photo/magnifying-glasses-mouse-keyboard-love-work-blocks-coffee-cup-gray-desk_23-2148052577.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/incoming-call-screen-from-sale-close-up_169016-41500.jpg",
          buttonText: "Translate",
        },
      ]}
      title="Smart Ecosystem Features"
      description="Our platform leverages cutting-edge technology for meaningful travel experiences."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "150k+",
          title: "Carbon Tons Reduced",
          description: "Global impact through greener routing.",
          imageSrc: "http://img.b2bpic.net/free-photo/earth-day-environment-eco-concept-isolated-white-background_185193-110630.jpg",
        },
        {
          id: "m2",
          value: "2.4k+",
          title: "SME Partners",
          description: "Local eco-businesses adopted.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-office-travel-agency_23-2150433365.jpg",
        },
        {
          id: "m3",
          value: "95%",
          title: "Accessible Venues",
          description: "Verified inclusive infrastructure.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-wheelchair-with-tablet_23-2148726960.jpg",
        },
      ]}
      title="Our Sustainable Impact"
      description="Tracking progress towards carbon-neutral global exploration."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "EcoCloud",
        "CarbonZero Labs",
        "Accessibility+",
        "GreenPath Tech",
        "Global Transit",
        "Urban Futures",
        "NatureGuard",
      ]}
      title="Global Partners in Sustainability"
      description="Industry leaders collaborating to bridge technology and travel impact."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How does AI trip planning work?",
          content: "Our AI analyzes your travel mood, past preferences, and carbon goals to build a bespoke itinerary.",
        },
        {
          id: "q2",
          title: "Can I track my actual carbon footprint?",
          content: "Yes, our real-time tracking estimates emission per activity using Climatiq API data.",
        },
        {
          id: "q3",
          title: "How do you ensure accessibility?",
          content: "We verify venue accessibility data including ramps, hearing loops, and signage options.",
        },
      ]}
      title="Common Questions"
      description="How GenEco Travel works for the modern traveler."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/man-looking-futuristic-weather-interface_23-2151968694.jpg?_wi=2"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alex R.",
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-woman-smiling-selfie_23-2148631389.jpg",
        },
        {
          id: "t2",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/tourist-with-map-nature_23-2147814284.jpg",
        },
        {
          id: "t3",
          name: "Marco P.",
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-portrait-fashionable-attractive-dark-skinned-man-with-afro-hairstyle-wearing-headphones-neck-talking-smartphone-drinking-coffee-while-strolling-city-with-backpack_176420-19828.jpg",
        },
        {
          id: "t4",
          name: "Chloe B.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-curly-haired-woman-camper-holds-wooden-stick-with-roasted-marshmallow-wears-headlamp-windbreaker-carries-rucksack-isolated-green-background-young-tourist-has-picnic-weekend_273609-61784.jpg",
        },
        {
          id: "t5",
          name: "Dax W.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-funny-expression_1194-3082.jpg",
        },
      ]}
      cardTitle="Travelers' Experiences"
      cardAnimation="slide-up"
      cardTag="Testimonials"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Join the Green Journey"
      description="Reach out to partner with us or get early access to our platform."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/green-plane-ecofriendly-environment_23-2151582344.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/light-blue-3d-abstract-wave-pattern_53876-95187.jpg"
      logoText="GenEco Travel"
      columns={[
        {
          title: "Platform",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Sustainability",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
        {
          title: "Contacts",
          items: [
            {
              label: "0708164875",
              href: "tel:0708164875",
            },
            {
              label: "genecotravel@gmail.com",
              href: "mailto:genecotravel@gmail.com",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
