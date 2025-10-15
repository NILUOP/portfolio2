import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "Java", "C/C++", "JavaScript", "SQL", "HTML/CSS", "Shell Script"]
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      skills: ["VS Code", "Jupyter", "MySQL", "Logisim", "SolidWorks", "Git"]
    },
    {
      icon: Database,
      title: "Technologies",
      skills: ["Linux", "GitHub", "Embedded Systems", "Arduino", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-card group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all">
                  <category.icon className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
