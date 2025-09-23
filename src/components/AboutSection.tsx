import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Coffee } from 'lucide-react';

const AboutSection = () => {
  const experiences = [
    {
      company: 'TechCorp Inc.',
      role: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA'
    },
    {
      company: 'StartupXYZ',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'Austin, TX'
    },
    {
      company: 'DevAgency',
      role: 'Frontend Developer',
      period: '2018 - 2020',
      location: 'Remote'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate about <span className="gradient-text">building</span> the future
              </h2>
              
              {/* Elevator pitch */}
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a fullstack developer with 5+ years of experience building scalable web applications 
                  that serve millions of users. I specialize in React, Node.js, and cloud architecture.
                </p>
                <p>
                  My passion lies in creating seamless user experiences backed by robust, performant systems. 
                  I believe great software should be both beautiful and functionally excellent.
                </p>
                <p>
                  I thrive in collaborative environments where I can mentor junior developers while 
                  continuously learning new technologies and best practices.
                </p>
              </div>

              {/* Personality touch */}
              <div className="flex items-center gap-2 mt-6 p-4 glass-card rounded-lg border border-card-border">
                <Coffee className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  When I'm not coding → Rock climbing and exploring new coffee shops ☕
                </span>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6 animate-slide-in-up">
            <h3 className="text-2xl font-semibold mb-8">Experience</h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-lg border border-card-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h4>
                    <Badge variant="secondary" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <div className="text-primary font-medium mb-2">
                    {exp.company}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-6 rounded-lg border border-card-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card p-6 rounded-lg border border-card-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects Shipped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;