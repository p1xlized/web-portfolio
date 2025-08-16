import { type ToasterRef } from "@/components/ui/toast";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ContactFormProps {
  toasterRef: React.RefObject<ToasterRef>;
}

export default function ContactForm({ toasterRef }: ContactFormProps) {
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const showToast = (
    title: string,
    message: string,
    variant: "default" | "success" | "error" | "warning" = "default",
  ) => {
    toasterRef.current?.show({
      title,
      message,
      variant,
      position: "bottom-center", // now it appears at the bottom
      duration: 3000,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    showToast(
      "Sending...",
      "Please wait while we send your message.",
      "default",
    );

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      showToast(
        "Message Sent",
        "Your message has been sent successfully!",
        "success",
      );

      setName("");
      setEmail("");
      setMessage("");
    } catch {
      showToast(
        "Error",
        "Failed to send your message. Please try again.",
        "error",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      animate={{ scale: expanded ? 1.1 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="mx-auto mt-12 w-lg max-w-xl p-1 rounded-[2rem] shadow-lg bg-base"
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 rounded-[1.5rem] bg-gradient-to-bl from-background to-muted backdrop-blur-md shadow-md w-full max-w-lg"
      >
        {" "}
        <div className="flex flex-col gap-1 text-center">
          {" "}
          <div className="flex items-center justify-center mb-2">
            {" "}
            <MessageSquare className="w-8 h-8 mr-2" />{" "}
            <h2 className="text-4xl font-bold text-foreground">
              Contact Me
            </h2>{" "}
          </div>{" "}
          <p className="text-sm text-muted-foreground">
            {" "}
            I’ll get back to you as soon as I see your message.{" "}
          </p>{" "}
        </div>{" "}
        <Input
          className="w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />{" "}
        <Input
          className="w-full"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <div className="relative">
          {" "}
          <MessageSquare
            className={cn(
              "absolute left-3 top-3 text-muted-foreground transition-opacity",
              message ? "opacity-0" : "opacity-100",
            )}
            size={18}
          />{" "}
          <Textarea
            placeholder="Message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pl-10 h-32 resize-none"
            required
          />{" "}
        </div>{" "}
        <Button type="submit" disabled={loading} className="w-full">
          {" "}
          {loading ? "Sending..." : "Send"}{" "}
        </Button>{" "}
      </form>{" "}
    </motion.div>
  );
}
