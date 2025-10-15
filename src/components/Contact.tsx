import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nisargkumar2005@gmail.com",
      href: "mailto:nisargkumar2005@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9978279696",
      href: "tel:+919978279696"
    },
    {
      icon: Github,
      label: "GitHub",
<<<<<<< HEAD
      value: "nisargkumar2005",
      href: "https://github.com/niluop"
=======
      value: "niluop",
      href: "https://github.com/niluop"
>>>>>>> a0e3dd454d92dd3a48f3ff33acb9dc152e7163d9
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
<<<<<<< HEAD
      value: "nisargkumar2005",
      href: "https://linkedin.com/in/nisarg-chaudhary"
=======
      value: "nisarg-chaudhary",
      href: "https://linkedin.com/in/nisarg-chaudhary2/"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "nisarg96968899",
      href: "https://instagram.com/nisarg96968899/"
>>>>>>> a0e3dd454d92dd3a48f3ff33acb9dc152e7163d9
    }
  ];

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and discuss opportunities
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="text-center mb-8">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm currently looking for new opportunities and collaborations. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground font-medium truncate">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all"
              asChild
            >
              <a href="mailto:nisargkumar2005@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
          </div>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground">
          <p>© 2024 Nisarg Chaudhary. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
