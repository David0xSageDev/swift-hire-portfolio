import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    frontend: {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 95, experience: '4+ years', color: 'text-blue-400' },
        { name: 'TypeScript', level: 90, experience: '3+ years', color: 'text-blue-600' },
        { name: 'Next.js', level: 85, experience: '2+ years', color: 'text-gray-300' },
        { name: 'Vue.js', level: 80, experience: '2+ years', color: 'text-green-500' },
        { name: 'Tailwind CSS', level: 95, experience: '3+ years', color: 'text-teal-400' },
        { name: 'SCSS/Sass', level: 85, experience: '4+ years', color: 'text-pink-400' }
      ]
    },
    backend: {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, experience: '4+ years', color: 'text-green-600' },
        { name: 'Python', level: 85, experience: '3+ years', color: 'text-yellow-500' },
        { name: 'Express.js', level: 90, experience: '4+ years', color: 'text-gray-400' },
        { name: 'FastAPI', level: 80, experience: '2+ years', color: 'text-emerald-500' },
        { name: 'GraphQL', level: 75, experience: '2+ years', color: 'text-pink-600' },
        { name: 'REST APIs', level: 95, experience: '5+ years', color: 'text-orange-500' }
      ]
    },
    devops: {
      name: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 85, experience: '3+ years', color: 'text-orange-400' },
        { name: 'Docker', level: 80, experience: '3+ years', color: 'text-blue-500' },
        { name: 'Kubernetes', level: 70, experience: '1+ years', color: 'text-blue-600' },
        { name: 'CI/CD', level: 85, experience: '3+ years', color: 'text-green-400' },
        { name: 'Terraform', level: 65, experience: '1+ years', color: 'text-purple-500' },
        { name: 'Nginx', level: 75, experience: '2+ years', color: 'text-green-500' }
      ]
    },
    databases: {
      name: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 90, experience: '4+ years', color: 'text-blue-700' },
        { name: 'MongoDB', level: 85, experience: '3+ years', color: 'text-green-600' },
        { name: 'Redis', level: 80, experience: '2+ years', color: 'text-red-500' },
        { name: 'MySQL', level: 75, experience: '3+ years', color: 'text-orange-600' },
        { name: 'Elasticsearch', level: 70, experience: '1+ years', color: 'text-yellow-600' }
      ]
    },
    tools: {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95, experience: '5+ years', color: 'text-red-600' },
        { name: 'Figma', level: 80, experience: '3+ years', color: 'text-purple-500' },
        { name: 'Jest', level: 85, experience: '3+ years', color: 'text-red-500' },
        { name: 'Webpack', level: 75, experience: '3+ years', color: 'text-blue-400' },
        { name: 'Vite', level: 85, experience: '2+ years', color: 'text-yellow-500' },
        { name: 'Linux', level: 80, experience: '4+ years', color: 'text-gray-300' }
      ]
    }
  };

  const getAllSkills = () => {
    return Object.values(skillCategories).flatMap(category => 
      category.skills.map(skill => ({ ...skill, categoryName: category.name }))
    );
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return getAllSkills();
    }
    return skillCategories[activeCategory as keyof typeof skillCategories]?.skills || [];
  };

  const categories = [
    { key: 'all', name: 'All Skills' },
    { key: 'frontend', name: 'Frontend' },
    { key: 'backend', name: 'Backend' },
    { key: 'devops', name: 'DevOps' },
    { key: 'databases', name: 'Databases' },
    { key: 'tools', name: 'Tools' }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's my arsenal of technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in-up">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              onClick={() => setActiveCategory(category.key)}
              className={activeCategory === category.key 
                ? "bg-primary hover:bg-primary-glow text-primary-foreground glow-effect" 
                : "border-card-border hover:border-primary hover:bg-primary/10"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {getFilteredSkills().map((skill, index) => (
              <Tooltip key={`${skill.name}-${index}`}>
                <TooltipTrigger asChild>
                  <div className="glass-card p-6 rounded-lg border border-card-border hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`text-2xl ${skill.color}`}>●</span>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                      {activeCategory === 'all' && 'categoryName' in skill && (
                        <Badge variant="secondary" className="text-xs">
                          {(skill as any).categoryName}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Progress bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-700 group-hover:animate-pulse-glow"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.experience}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        {/* Certifications or Additional Info */}
        <div className="mt-16 text-center animate-slide-in-up">
          <div className="glass-card p-8 rounded-lg border border-card-border inline-block">
            <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl">
              Currently exploring: <span className="text-primary font-medium">Rust, Web3, AI/ML Integration</span>
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="border-primary/30">AWS Certified</Badge>
              <Badge variant="outline" className="border-primary/30">Scrum Master</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;