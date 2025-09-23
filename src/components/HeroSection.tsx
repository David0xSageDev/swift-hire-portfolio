import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating tech icons */}
        <div className="absolute top-1/4 left-1/4 animate-float opacity-10">
          <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-2xl">⚛️</span>
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <div className="w-20 h-20 rounded-lg bg-secondary/20 flex items-center justify-center">
            <span className="text-2xl">🚀</span>
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float opacity-10" style={{ animationDelay: '4s' }}>
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-xl">💻</span>
          </div>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 -left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Status badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-success rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Available for hire</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Fullstack Developer</span>
            <span className="block gradient-text">Who Ships & Scales</span>
          </h1>

          {/* Animated subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            I craft modern web experiences with clean code, scalable architecture, 
            and a passion for turning complex problems into elegant solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground glow-effect group"
            >
              View My Work
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-card-border hover:border-primary hover:bg-primary/10"
            >
              Let's Connect
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 animate-slide-in-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:john@example.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;