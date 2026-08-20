import { createServerFn } from "@tanstack/react-start";

import { contactSchema } from "./contact-schema";
import { storeContactMessage } from "./contact.server";

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      const id = await storeContactMessage(data);
      return { ok: true as const, id };
    } catch (e) {
      console.error("contact submit failed", e);
      throw e;
    }
  });
