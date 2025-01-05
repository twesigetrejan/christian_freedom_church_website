"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-[465px] border-none shadow-2xl sm:px-0 sm:w-full rounded-2xl">
      <CardHeader>
        <CardTitle className="text-primary ">
          <h3 className="text-h3">Contact us</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <p className="pb-1 text-p1">Name</p>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl text-dark border-dark text-p2"
            />
          </div>
          <div>
            <p className="pb-1 text-p1">Email</p>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl text-dark text-p2"
            />
          </div>
          <div className="pb-7">
            <p className="pb-1 text-p1">Message</p>
            <Textarea
              name="message"
              placeholder="provide your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full min-h-32 rounded-xl text-dark text-p2"
            />
          </div>

          {status.message && (
            <Alert
              variant={status.type === "error" ? "destructive" : "default"}
            >
              <AlertTitle>
                {status.type === "error" ? "Error" : "Success"}
              </AlertTitle>
              <AlertDescription>{status.message}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full text-white rounded-xl"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
