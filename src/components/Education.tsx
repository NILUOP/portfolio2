import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const coursework = [
    "Data Structures & Algorithms",
    "Computer Networks",
    "Theory of Computation",
    "Digital Electronics",
    "Operating Systems",
    "Database Management System",
    "Object-Oriented Programming",
    "Computer Organization & Architecture"
  ];

  return (
    <section className="py-20 px-4" id="education">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Bachelor of Technology
                </h3>
                <p className="text-accent font-semibold mb-1">
                  Computer Science Engineering
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  Pandit Deendayal Energy University
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                  <span className="text-muted-foreground">July 2023 - Present</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-4 py-2">
                  <span className="text-muted-foreground text-sm">CGPA:</span>
                  <span className="text-2xl font-bold text-primary">8.84</span>
                  <span className="text-muted-foreground text-sm">/10</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground relative z-10">
              Gandhinagar, India
            </p>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Relevant Coursework
                </h3>
                <p className="text-muted-foreground text-sm">
                  Core computer science subjects
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {coursework.map((course, index) => (
                <div 
                  key={index}
                  className="flex items-center text-sm text-muted-foreground"
                >
                  <span className="text-accent mr-2">▸</span>
                  {course}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
