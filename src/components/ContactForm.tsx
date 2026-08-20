import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { submitContactMessage } from "@/lib/contact.functions";

const empty: ContactFormValues = { name: "", email: "", message: "" };

export function ContactForm() {
  const send = useServerFn(submitContactMessage);
  const [values, setValues] = useState<ContactFormValues>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFormValues;
        next[key] ??= issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setPending(true);
    try {
      await send({ data: parsed.data });
      toast.success("Message sent — I'll get back to you soon.");
      setValues(empty);
    } catch {
      toast.error("Couldn't send your message. Please email me directly.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="label-mono">
          Name
        </label>
        <Input
          id="name"
          value={values.name}
          maxLength={100}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className="mt-2"
          placeholder="Your name"
        />
        {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="label-mono">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={values.email}
          maxLength={255}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className="mt-2"
          placeholder="you@company.com"
        />
        {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="label-mono">
          Message
        </label>
        <Textarea
          id="message"
          rows={6}
          value={values.message}
          maxLength={2000}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="mt-2"
          placeholder="What would you like to build together?"
        />
        {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message}</p> : null}
      </div>
      <Button type="submit" disabled={pending} className="font-mono text-xs uppercase tracking-[0.14em]">
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
