import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Grain from "@/components/layout/Grain";
import Scanline from "@/components/layout/Scanline";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      <Grain />
      <Scanline />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

      <Card className="w-full max-w-md mx-4 bg-card/50 backdrop-blur-sm border-primary/20 relative z-10">
        <CardContent className="pt-12 pb-12 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
            <AlertCircle className="h-20 w-20 text-primary relative z-10 animate-bounce" />
          </div>
          
          <h1 className="text-6xl font-display font-bold text-white mb-2 glitch-text" data-text="404">
            404
          </h1>
          
          <h2 className="text-2xl font-heading text-primary mb-6 tracking-widest uppercase">
            System Failure
          </h2>

          <p className="text-muted-foreground mb-8 max-w-xs mx-auto font-mono text-sm leading-relaxed">
            The requested sector could not be located in the memory banks. 
            Please return to the main interface.
          </p>

          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 text-white font-heading uppercase tracking-widest gap-2 group">
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Return Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
