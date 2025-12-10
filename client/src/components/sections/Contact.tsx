import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
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
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-heading">hello@example.com</span>
                </a>
                <div className="flex gap-4 mt-8">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                    <Twitter className="w-5 h-5" />
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
                          <Input placeholder="John Doe" {...field} className="bg-background border-white/10 focus:border-primary text-white" />
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
                          <Input placeholder="john@example.com" {...field} className="bg-background border-white/10 focus:border-primary text-white" />
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
                          <Textarea placeholder="Tell me about your project..." {...field} className="bg-background border-white/10 focus:border-primary text-white min-h-[120px]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-heading uppercase tracking-widest">
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
        <p>© 2024 Nexus Dev. Built with React & Three.js.</p>
      </div>
    </section>
  );
}