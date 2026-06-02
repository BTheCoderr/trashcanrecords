import { bookingInquiry, contactInquiry } from "@/config/site";
import { InquiryForm, type InquiryField } from "./InquiryForm";

function InquiryCard({
  id,
  eyebrow,
  title,
  subtitle,
  email,
  emailLabel,
  formName,
  fields,
  submitLabel,
  successMessage,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  email: string;
  emailLabel: string;
  formName: string;
  fields: InquiryField[];
  submitLabel: string;
  successMessage: string;
}) {
  return (
    <article
      id={id}
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-smoke/50 p-6 md:p-8"
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/[0.03] blur-3xl" />
      <header className="relative mb-6 text-center md:text-left">
        <p className="mb-2 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-chrome/50">
          {eyebrow}
        </p>
        <h3 className="font-display text-xl tracking-wide text-pearl md:text-2xl">{title}</h3>
        <p className="mt-2 text-sm text-chrome/65">{subtitle}</p>
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs text-chrome/50 transition-colors hover:text-pearl"
        >
          {emailLabel}: {email}
        </a>
      </header>
      <InquiryForm
        formName={formName}
        fields={fields}
        submitLabel={submitLabel}
        successMessage={successMessage}
      />
    </article>
  );
}

export function ContactBooking() {
  return (
    <section className="relative px-4 py-16 md:py-20" aria-labelledby="contact-booking-heading">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 text-center">
          <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-chrome/50">
            Get in touch
          </p>
          <h2
            id="contact-booking-heading"
            className="font-display text-2xl font-medium tracking-wide text-pearl md:text-3xl"
          >
            Contact & Booking
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-chrome/70">
            General inquiries and live booking requests for BTheSound & Trash Can Records.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <InquiryCard
            id="contact"
            eyebrow={contactInquiry.eyebrow}
            title={contactInquiry.title}
            subtitle={contactInquiry.subheading}
            email={contactInquiry.email}
            emailLabel={contactInquiry.emailLabel}
            formName={contactInquiry.formName}
            fields={contactInquiry.fields}
            submitLabel={contactInquiry.submitLabel}
            successMessage={contactInquiry.successMessage}
          />
          <InquiryCard
            id="booking"
            eyebrow={bookingInquiry.eyebrow}
            title={bookingInquiry.title}
            subtitle={bookingInquiry.subheading}
            email={bookingInquiry.email}
            emailLabel={bookingInquiry.emailLabel}
            formName={bookingInquiry.formName}
            fields={bookingInquiry.fields}
            submitLabel={bookingInquiry.submitLabel}
            successMessage={bookingInquiry.successMessage}
          />
        </div>
      </div>
    </section>
  );
}
