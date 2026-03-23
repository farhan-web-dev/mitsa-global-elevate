import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_nv2rzmf',
        'template_taav8fh',
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        'LGrbtf14T3OYdtiml'
      );
      
      toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({ 
        title: "Error", 
        description: "Failed to send message. Please try again later.",
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Contact Us</h2>
          <p className="text-muted-foreground text-lg">
            Ready to elevate your business? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: Phone, label: "Phone", value: "+971 58 810 2255", href: "tel:+971588102255" },
              { icon: Phone, label: "WhatsApp", value: "+971 52 387 2791", href: "https://wa.me/971523872791" },
              { icon: Mail, label: "Email", value: "mitsaglobal@gmail.com", href: "mailto:mitsaglobal@gmail.com" },
              { icon: MapPin, label: "Website", value: "www.mitsaglobal.com", href: "https://www.mitsaglobal.com" },
            ].map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <c.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card rounded-2xl p-8 shadow-sm border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
            <button type="submit" disabled={isSubmitting} className="btn-primary flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
              <Send className="w-4 h-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
