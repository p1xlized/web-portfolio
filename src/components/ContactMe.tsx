import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, User, MessageSquare, ContactRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HyperText } from "./ui/hyper-text";
import SendButton from "./ui/send-button";

export default function ContactForm() {
  const [expanded, setExpanded] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      animate={{ scale: expanded ? 1.1 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="mx-auto mt-12 w-lg max-w-xl p-1 rounded-[2rem] shadow-lg bg-base"
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
    >
      {state.succeeded ? (
        <div className="p-6 text-center text-green-600 font-medium">
          ✅ Thanks for your message! I’ll get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-6 rounded-[1.5rem] bg-gradient-to-bl from-background to-muted backdrop-blur-md shadow-md"
        >
          <div className="flex flex-col gap-1 text-center">
            <div className="flex items-center justify-center">
              <ContactRound className="w-8 h-8 mb-2 mr-2" />
              <HyperText
                className="text-4xl font-bold text-foreground"
                text="Contact Me"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              I’ll get back to you as soon as I see your message.
            </p>
          </div>
          <Input className="w-full" placeholder="Name" name="name" />
          <Input
            className="w-full"
            placeholder="Email"
            name="email"
            type="email"
          />

          <div className="relative">
            <MessageSquare
              className={cn(
                "absolute left-3 top-3 text-muted-foreground transition-opacity",
                formValues.message ? "opacity-0" : "opacity-100",
              )}
              size={18}
            />
            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={6}
              value={formValues.message}
              onChange={handleChange}
              disabled={state.submitting}
              className="pl-10 h-32 resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <SendButton
            type="submit"
            label={state.submitting ? "Sending..." : "Send"}
          />
        </form>
      )}
    </motion.div>
  );
}
