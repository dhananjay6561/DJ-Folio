import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, Twitter, Github, Link, Code, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        const data = await response.json();
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    }
  }

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-12 text-glow">
            <span className="text-primary">07.</span> GET IN TOUCH
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities.
                If you have a project that needs some creative magic, I'd love to hear about it.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:dhananjayaggarwal6561@gmail.com" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-heading">dhananjayaggarwal6561@gmail.com</span>
                </a>
                <a href="tel:+919541074747" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-heading">+91 95410 74747</span>
                </a>
                <div className="flex gap-4 mt-8 flex-wrap">
                  <a href="https://github.com/dhananjay6561" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/dhananjay6561/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://medium.com/@dhananjayaggarwal6561" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                    <span className="font-bold text-lg">M</span>
                  </a>
                  <a href="https://leetcode.com/u/dhananjay6561/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                    <Code className="w-5 h-5" />
                  </a>
                  <a href="https://linktr.ee/Dj6561" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                    <Link className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-white/5 p-6 rounded-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} className="bg-background border-white/10 focus:border-primary text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter you Email" {...field} className="bg-background border-white/10 focus:border-primary text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your message..." 
                            {...field} 
                            className="bg-background border-white/10 focus:border-primary text-white min-h-[120px]" 
                            maxLength={500}
                          />
                        </FormControl>
                        <div className="text-right text-xs text-muted-foreground mt-1">
                          {field.value?.length || 0} / 500 characters
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-heading uppercase tracking-widest cursor-pointer hover:scale-[1.02] transition-transform">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-white/5 mt-20 py-8 text-center text-muted-foreground text-sm font-mono">
        <p>© 2025 DJ Portfolio</p>
      </div>
    </section>
  );
}