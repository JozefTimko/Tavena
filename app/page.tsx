// app/page.tsx
import React from "react";
import Image from "next/image";
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

export default function Page() {
  return (
    <div className={`${sans.className} min-h-screen bg-[#F3F0EA] text-[#0B1E36]`}>
      {/* Top pill header */}
      <header className="mx-auto max-w-6xl px-4 pt-8 sm:pt-10">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full bg-black/5 px-6 py-3 sm:px-8 sm:py-4">
          <div className="flex items-center gap-3">
            <div className={`${serif.className} text-xl font-semibold tracking-tight`}>
              Tavena
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0B5FFF] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Let&apos;s talk →
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        {/* HERO (Ratio-like size) */}
        <section className="mx-auto max-w-6xl pb-10 pt-12 text-center sm:pb-14 sm:pt-16">
          <div className="mx-auto max-w-6xl">
            <h1
              className={`${serif.className} text-[64px] leading-[1.1] tracking-[-0.01em] text-[#0B1E36] sm:text-[96px] sm:leading-[1.1] md:text-[120px]`}
            >
              We help creators build services audiences pay for.
            </h1>

            <p className="mx-auto mt-10 max-w-3xl text-pretty text-lg leading-relaxed text-[#0B1E36]/70 sm:text-xl">
              We create a predictable, profitable, and scalable service offer for your
              audience, allowing you to{" "}
              <span className="font-semibold text-[#0B1E36]">
                generate sales at the press of a button.
              </span>
            </p>

            <div className="mt-30 flex items-center justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0B5FFF] px-8 py-4 text-base font-semibold text-white shadow-sm hover:opacity-95"
              >
                Let&apos;s Talk →
              </a>
            </div>
          </div>
        </section>

        {/* HOW WE WORK (Ratio-style list + diagram) */}
        <section id="how" className="mx-auto max-w-5xl pb-12 sm:pb-14">
          <div className="text-center">
            <h2 className={`${serif.className} text-4xl font-bold tracking-tight sm:text-5xl`}>
              This Is How We Work:
            </h2>
            <div className="mx-auto mt-6 h-[2px] w-full max-w-4xl bg-[#0B1E36]/75" />
          </div>

          {/* Row 01 */}
          <div className="mx-auto mt-8 flex w-full max-w-4xl items-center gap-6">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#0B1E36]">
              <span
                className={`${serif.className} relative top-[-5px] text-[40px] font-black leading-none text-[#F3F0EA]`}
              >
                01
              </span>
            </div>
            <p className={`${serif.className} text-2xl font-black leading-[1.05] sm:text-3xl`}>
              We help you create a service worth paying for
            </p>
          </div>

          {/* Diagram image */}
          <div className="mx-auto mt-8 w-full max-w-xl overflow-hidden rounded-[36px] bg-white/60 shadow-sm ring-1 ring-black/5">
            <Image
              src="/serviceimage1.png"
              alt="Service creation and messaging process"
              width={800}
              height={800}
              className="w-full"
            />
          </div>

          {/* Divider */}
          <div className="mx-auto mt-6 h-[2px] w-full max-w-4xl bg-[#0B1E36]/75" />

          {/* Row 02 */}
          <div className="mx-auto flex w-full max-w-4xl items-center gap-6 py-6">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#0B1E36]">
              <span
                className={`${serif.className} relative top-[-5px] text-[40px] font-black leading-none text-[#F3F0EA]`}
              >
                02
              </span>
            </div>
            <p className={`${serif.className} text-2xl font-black leading-[1.05] sm:text-3xl`}>
              We help you convert your audience into customers
            </p>
          </div>

          {/* Divider */}
          <div className="mx-auto h-[2px] w-full max-w-4xl bg-[#0B1E36]/75" />

          {/* Row 03 */}
          <div className="mx-auto flex w-full max-w-4xl items-center gap-6 py-6">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#0B1E36]">
              <span
                className={`${serif.className} relative top-[-5px] text-[40px] font-black leading-none text-[#F3F0EA]`}
              >
                03
              </span>
            </div>
            <p className={`${serif.className} text-2xl font-black leading-[1.05] sm:text-3xl`}>
              We help you fulfil your service and deliver it to your audience
            </p>
          </div>

          {/* Bottom Divider */}
          <div className="mx-auto h-[2px] w-full max-w-4xl bg-[#0B1E36]/75" />
        </section>

        {/* RESULTS */}
        <section className="mx-auto max-w-4xl pb-10 sm:pb-14">
          <SectionTitle title="Some of Our Recent Results" />

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Stat value="$9.5k" label="Monthly revenue generated for an Instagram creator" />
            <Stat value="5 days" label="Average time to first sale" />
            <Stat value="Repeat clients" label="Generated" />
          </div>
        </section>

        {/* BOOK A CALL */}
        <section id="contact" className="mx-auto max-w-4xl pb-16 sm:pb-20">
          <div className="rounded-[36px] bg-white/60 p-6 shadow-sm ring-1 ring-black/5 sm:p-10">
            <h3 className={`${serif.className} text-4xl font-bold tracking-tight sm:text-5xl`}>
              Get in touch today
            </h3>

            {/* Removed the grey placeholder column and centered form */}
            <div id="contactForm" className="mt-10">
              <form
                className="rounded-3xl bg-white/80 p-5 ring-1 ring-black/10"
                action="https://formspree.io/f/xykzdbby"
                method="POST"
              >
                {/* Formspree helpers */}
                <input type="hidden" name="_subject" value="New Tavena callback request" />
                <input type="text" name="_gotcha" className="hidden" />
                {/* Optional: create /thanks page and then uncomment */}
                {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thanks" /> */}

                <div className="text-sm font-semibold">Contact us</div>
                <p className="mt-1 text-xs text-[#0B1E36]/60">
                  We&apos;ll reply by email within 24 hours.
                </p>

                <div className="mt-4 grid gap-3">
                  <Field label="Name" name="name" placeholder="Your name" required />
                  <Field
                    label="Email"
                    name="email"
                    placeholder="you@domain.com"
                    type="email"
                    required
                  />
                  <Field label="Instagram" name="instagram" placeholder="@yourhandle" />
                  <TextArea
                    label="Message"
                    name="message"
                    placeholder="What do you post about? What service do you want to sell?"
                  />

                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-[#0B5FFF] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                  >
                    Let&apos;s Talk →
                  </button>

                  <p className="text-[11px] text-[#0B1E36]/55">
                    By submitting, you agree to be contacted about a potential partnership.
                  </p>
                </div>
              </form>
            </div>

            <div className="mt-12">
              <h4 className={`${serif.className} text-3xl font-bold tracking-tight sm:text-4xl`}>
                Frequently Asked Questions
              </h4>

              <div className="mt-6 space-y-3">
                <FAQItem
                  q="What is Tavena and who is it for?"
                  a="Tavena helps creators build a sellable service offer and scale it with a fulfilment system so revenue is predictable."
                />
                <FAQItem
                  q="What kinds of services can I sell?"
                  a="We would help you create repeatable, productized services with packaged implementations tailored to your niche."
                />
                <FAQItem
                  q="How do you deliver the service?"
                  a="We work alongside you to deliver the service, while you remain the face and voice of the brand."
                />
                <FAQItem
                  q="How do we get paid?"
                  a="Usually revenue share but may depend on the service. A structure would be composed."
                />
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#0B1E36]/55">
                <a href="/privacy" className="hover:text-[#0B1E36]/80">
                  Privacy Policy
                </a>
                <span>© {new Date().getFullYear()} Tavena — All Rights Reserved.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------- Small components ---------- */

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className={`${serif.className} text-center text-4xl font-bold tracking-tight sm:text-5xl`}>
      {title}
    </h2>
  );
}

function LogoCard() {
  return (
    <div className="grid h-14 place-items-center rounded-2xl bg-white/60 text-xs font-semibold text-[#0B1E36]/55 shadow-sm ring-1 ring-black/5">
      Logo
    </div>
  );
}

function MiniStep({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="rounded-3xl bg-white/70 p-4 ring-1 ring-black/5">
      <div className="text-xs font-semibold text-[#0B1E36]/55">STEP {n}</div>
      <div className="mt-2 text-sm font-semibold">{t}</div>
      <div className="mt-1 text-sm leading-relaxed text-[#0B1E36]/70">{d}</div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[28px] bg-white/60 p-5 text-center shadow-sm ring-1 ring-black/5">
      <div className={`${serif.className} text-3xl font-bold tracking-tight sm:text-4xl`}>
        {value}
      </div>
      <div className="mt-2 text-sm font-semibold text-[#0B1E36]/65">{label}</div>
    </div>
  );
}

function TeamCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded-3xl bg-white/70 p-5 ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-black/10 ring-1 ring-black/5" />
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-[#0B1E36]/60">{role}</div>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#0B1E36]/70">Placeholder bio — swap later.</p>
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-[#0B5FFF]" />
      <span>{children}</span>
    </li>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="text-xs font-medium text-[#0B1E36]/70">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-[#0B1E36] outline-none focus:border-black/20"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <label className="text-xs font-medium text-[#0B1E36]/70">
      {label}
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-[#0B1E36] outline-none focus:border-black/20"
      />
    </label>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-3xl bg-white/60 px-5 py-4 shadow-sm ring-1 ring-black/5">
      <summary className="cursor-pointer list-none text-sm font-semibold">
        <div className="flex items-center justify-between gap-4">
          <span>{q}</span>
          <span className="text-[#0B1E36]/50 transition group-open:rotate-45">+</span>
        </div>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-[#0B1E36]/70">{a}</p>
    </details>
  );
}
