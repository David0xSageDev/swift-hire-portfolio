import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Award, Calendar } from 'lucide-react';

const CertificationSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      level: "Associate",
      credentialId: "AWS-SA-2023-001",
      verifyLink: "https://aws.amazon.com/verification",
      logo: "🏗️",
      status: "Active"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      level: "Professional",
      credentialId: "GCP-PD-2023-078",
      verifyLink: "https://cloud.google.com/certification",
      logo: "☁️",
      status: "Active"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      level: "Professional",
      credentialId: "CKA-2022-456",
      verifyLink: "https://www.cncf.io/certification/cka/",
      logo: "⚙️",
      status: "Active"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      level: "Associate",
      credentialId: "MDB-DEV-2022-123",
      verifyLink: "https://university.mongodb.com/certification",
      logo: "🍃",
      status: "Active"
    },
    {
      title: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      date: "2021",
      level: "Professional",
      credentialId: "CSM-2021-789",
      verifyLink: "https://www.scrumalliance.org/get-certified",
      logo: "🔄",
      status: "Active"
    },
    {
      title: "Meta React Developer",
      issuer: "Meta (Coursera)",
      date: "2024",
      level: "Professional",
      credentialId: "META-REACT-2024-012",
      verifyLink: "https://www.coursera.org/professional-certificates/meta-react-developer",
      logo: "⚛️",
      status: "Active"
    }
  ];

  return (
    <section id="certifications" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Validated expertise and continuous learning in cutting-edge technologies
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in-up">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.credentialId}
              className="glass-card border-card-border hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cert.logo}</span>
                    <Badge 
                      variant={cert.status === 'Active' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="border-primary/30">
                    {cert.level}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>

                  <div className="pt-2 border-t border-card-border">
                    <p className="text-xs text-muted-foreground mb-2">
                      ID: {cert.credentialId}
                    </p>
                    
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Verify Credential
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 text-center animate-slide-in-up">
          <div className="glass-card p-8 rounded-lg border border-card-border inline-block">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">{certifications.length}</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Certifications</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <p className="text-sm text-muted-foreground">Cloud Platforms</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📚</span>
                  <span className="text-2xl font-bold text-primary">25+</span>
                </div>
                <p className="text-sm text-muted-foreground">Hours Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;