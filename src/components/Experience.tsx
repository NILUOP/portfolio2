import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle" id="experience">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional and volunteer work
          </p>
        </div>

        <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-card">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Civic Services and Social Internship
                  </h3>
                  <p className="text-accent font-semibold">
                    Bhagini Samaj, Patan
                  </p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                  June 2024 - July 2024
                </span>
              </div>
              
              <p className="text-muted-foreground mb-1 text-sm">
                Patan, India
              </p>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▸</span>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Conflict Resolution:</span> Actively mediated disputes between couples, fostering constructive dialogue and guiding them toward amicable solutions for marital and domestic issues.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▸</span>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Case Management:</span> Assessed client needs and connected them with appropriate resources, such as legal aid and counseling services, ensuring comprehensive support and advocacy.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▸</span>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Recognition:</span> Received a Participation Certificate in recognition of active involvement and contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
