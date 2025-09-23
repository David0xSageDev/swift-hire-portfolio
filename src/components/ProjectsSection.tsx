import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects, getProjectsByCategory } from '@/data/projects';
import type { Project } from '@/data/projects';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = [
    { key: 'all', name: 'All Projects', count: projects.length },
    { key: 'saas', name: 'SaaS', count: projects.filter(p => p.category === 'saas').length },
    { key: 'web-app', name: 'Web Apps', count: projects.filter(p => p.category === 'web-app').length },
    { key: 'api', name: 'APIs', count: projects.filter(p => p.category === 'api').length },
    { key: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'tool', name: 'Tools', count: projects.filter(p => p.category === 'tool').length }
  ];

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setFilteredProjects(getProjectsByCategory(category));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'saas': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'web-app': 'bg-green-500/10 text-green-400 border-green-500/20',
      'api': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'mobile': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'tool': 'bg-pink-500/10 text-pink-400 border-pink-500/20'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work across different technologies and domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in-up">
          <div className="flex items-center gap-2 mr-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeFilter === category.key ? "default" : "outline"}
              onClick={() => handleFilterChange(category.key)}
              className={activeFilter === category.key 
                ? "bg-primary hover:bg-primary-glow text-primary-foreground glow-effect" 
                : "border-card-border hover:border-primary hover:bg-primary/10"
              }
            >
              {category.name}
              <Badge 
                variant="secondary" 
                className="ml-2 text-xs"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass-card border-card-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge 
                      variant="outline" 
                      className={`${getCategoryColor(project.category)} text-xs`}
                    >
                      {project.category.replace('-', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  {project.featured && (
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-muted transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                {project.liveUrl && (
                  <Button 
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary-glow text-primary-foreground flex-1"
                  >
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm"
                    className="border-card-border hover:border-primary hover:bg-primary/10 flex-1"
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16 animate-slide-in-up">
          <div className="glass-card p-8 rounded-lg border border-card-border inline-block">
            <h3 className="text-xl font-semibold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Check out my GitHub for more projects, open source contributions, and code samples.
            </p>
            <Button 
              asChild
              className="bg-primary hover:bg-primary-glow text-primary-foreground glow-effect"
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;