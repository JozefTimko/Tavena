// app/privacy/page.tsx
import React from "react";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function PrivacyPolicyPage() {
  const effectiveDate = "January 3, 2026"; // update whenever you change this policy

  return (
    <div className={`${sans.className} min-h-screen bg-[#F3F0EA] text-[#0B1E36]`}>
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:pt-14">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full bg-black/5 px-4 py-2 text-xs font-semibold hover:bg-black/10"
          >
            ← Back
          </Link>
        </div>

        <h1 className={`${serif.className} mt-8 text-4xl font-bold tracking-tight sm:text-5xl`}>
          Privacy Policy
        </h1>

        <p className="mt-3 text-sm text-[#0B1E36]/70">
          Effective date: <span className="font-semibold text-[#0B1E36]">{effectiveDate}</span>
        </p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-[#0B1E36]/80">
          <section className="space-y-3">
            <h2 className={`${serif.className} text-2xl font-bold text-[#0B1E36]`}>
              1. Who we are
            </h2>
            <p>
              This Privacy Policy explains how <span className="font-semibold text-[#0B1E36]">Tavena</span>{" "}
              (“we”, “us”, “our”) collects and uses personal information when you submit our contact form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`${serif.className} text-2xl font-bold text-[#0B1E36]`}>
              2. What information we collect
            </h2>
            <p>
              When you submit our form, we collect the information you choose to provide:
            </p>
            <ul className="list-disc pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Instagram handle</li>
              <li>Message content</li>
            </ul>
            <p>
              We do not intentionally collect sensitive personal data through this form. Please avoid sharing
              sensitive information in your message.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`${serif.className} text-2xl font-bold text-[#0B1E36]`}>
              3. How we use your information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5">
              <li>Respond to your enquiry and communicate with you</li>
              <li>Evaluate a potential partnership or service engagement</li>
              <li>Maintain basic records of enquiries for operational purposes</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className={`${serif.className} text-2xl font-bold text-[#0B1E36]`}>
              4. Legal basis (UK GDPR)
            </h2>
            <p>
              If you are in the UK/EU, our legal bases for processing are:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-semibold text-[#0B1E36]">Legitimate interests</span> — responding to enquiries
                and running our business communications
              </li>
              <li>
                <span className="font-semibold text-[#0B1E36]">Consent</span> — where you choose to submit your
                details via the form
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className={`${serif.className} text-2xl font-bold text-[#0B1E36]`}>
              5. How your information is processed (Formspree)
            </h2>
            <p>
              Our contact form is processed by <span className="font-semibold text-[#0B1E36]">Formspree</span>, which
              receives your submission and forwards it to us. Formspree acts as a service provider for handling
              form submissions.
            </p>
            <p>
              Please note that Formspree may process information on our behalf in accordance with their own
              policies and terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`${serif.className} text-2xl font-bold text-[#0B1E36]`}>
              6. Sharing your information
            </h2>
            <p>
              We do not sell your personal information. We only share it:
            </p>
            <ul className="list-disc pl-5">
              <li>With Formspree to receive and deliver your form submission</li>
              <li>If required to comply with legal obligations</li>
              <li>To protect our rights, safety, and security (e.g., preventing abuse/spam)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className={`${serif.className} text-2xl font-bold text-[#0B1E36]`}>
              7. Data retention
            </h2>
            <p>
              We retain form submissions only for as long as needed to respond to your enquiry and maintain
              reasonable business records. If you want us to delete your message, contact us using the details below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={`${serif.className} text-2xl font-bold text-[#0B1E36]`}>
              8. Your rights
            </h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or object to our processing
              of your personal information. You can request this by contacting us.
            </p>
          </section>
          <section className="space-y-3">
          </section>
        </div>
      </main>
    </div>
  );
}
