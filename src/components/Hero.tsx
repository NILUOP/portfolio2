import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="text-accent font-semibold text-lg">Hello, I'm</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Nisarg Chaudhary
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Computer Science Engineering Student | Full Stack Developer | Problem Solver
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Passionate about building innovative solutions with Python, C++, Java, and modern web technologies. 
            Currently pursuing CSE at Pandit Deendayal Energy University with 8.84 CGPA.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
              View Projects
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center mt-12">
            <a 
              href="https://github.com/niluop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/nisarg-chaudhary2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://instagram.com/nisarg96968899/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="mailto:nisargkumar2005@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
