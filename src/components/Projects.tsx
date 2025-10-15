import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, FileSpreadsheet, Sun } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Mic,
      title: "Personal Voice Assistant",
      date: "June 2025",
      description: "Python-based voice assistant capable of performing tasks like opening applications, browsing websites, providing weather updates, and internet searches through voice commands.",
      tech: ["Python", "Speech Recognition", "pyttsx3", "PyAutoGUI", "APIs"],
      highlights: [
        "Integrated multiple APIs for voice recognition and text-to-speech",
        "Implemented system automation features",
        "Created intuitive voice command interface"
      ]
    },
    {
      icon: FileSpreadsheet,
      title: "Low Attendance Student Sorter",
      date: "August 2024",
      description: "Command-line application in C to read, parse, and analyze student data from CSV files, automating the identification of students with low attendance.",
      tech: ["C/C++", "File I/O", "Data Processing", "Algorithms"],
      highlights: [
        "Efficient CSV parsing and data manipulation",
        "Custom sorting algorithm implementation",
        "Automated solution for academic administration"
      ]
    },
    {
      icon: Sun,
      title: "Automatic Solar Panel Cleaner",
      date: "November 2024",
      description: "Arduino-based robotic system designed to automatically clean solar panels, improving efficiency by removing dust and debris.",
      tech: ["Arduino", "C/C++", "Embedded Systems", "Robotics", "Sensors"],
      highlights: [
        "Real-world problem-solving application",
        "Integration of microcontrollers and sensors",
        "Automated cleaning mechanism design"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions I've built
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-card group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all">
                    <project.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground mb-2 md:mb-0">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {project.date}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
