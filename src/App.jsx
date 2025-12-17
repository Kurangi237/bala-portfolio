import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Menu, 
  X,
  Code,
  Database,
  Server,
  Briefcase,
  GraduationCap,
  Award,
  User,
  ChevronDown,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import icons and profile image
import pythonIcon from './assets/icons/python.png';
import cIcon from './assets/icons/c.png';
import sqlIcon from './assets/icons/sql.png';
import springBootIcon from './assets/icons/spring-boot.png';
import gitIcon from './assets/icons/git.png';
import githubIcon from './assets/icons/github.png';
import linkedinIcon from './assets/icons/linkedin.png';
import leetcodeIcon from './assets/icons/leetcode.png';
import geeksforgeeksIcon from './assets/icons/geeksforgeeks.png';
import profileImage from './assets/profile.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  // Skills data with enhanced levels
  const skills = {
    'Programming Languages': [
      { name: 'Java', level: 90, icon: '☕', color: '#f89820' },
      { name: 'Python', level: 80, icon: pythonIcon, color: '#3776ab' },
      { name: 'C', level: 75, icon: cIcon, color: '#00599c' },
      { name: 'SQL', level: 70, icon: sqlIcon, color: '#336791' }
    ],
    'Frameworks & Tools': [
      { name: 'Spring Boot', level: 75, icon: springBootIcon, color: '#6db33f' },
      { name: 'Hibernate', level: 60, icon: '🔧', color: '#59666c' },
      { name: 'JDBC', level: 70, icon: '🔗', color: '#ed8b00' },
      { name: 'Git', level: 85, icon: gitIcon, color: '#f05032' },
      { name: 'Maven', level: 70, icon: '📦', color: '#c71a36' }
    ],
    'Databases': [
      { name: 'MySQL', level: 75, icon: '🗄️', color: '#4479a1' }
    ],
    'Concepts': [
      { name: 'OOP', level: 85, icon: '🏗️', color: '#3b82f6' },
      { name: 'REST APIs', level: 80, icon: '🌐', color: '#06b6d4' },
      { name: 'SDLC', level: 75, icon: '🔄', color: '#8b5cf6' },
      { name: 'Agile', level: 70, icon: '⚡', color: '#f59e0b' }
    ]
  };

  // Enhanced projects data
  const projects = [
    {
      title: 'Autonomous Object Recognition for Visually Impaired',
      description: 'Developed an object detection system using ESP32-CAM, integrating image acquisition, preprocessing, segmentation, and classification to enable real-time detection with voice output and web-based visualization.',
      technologies: ['ESP32-CAM', 'Computer Vision', 'IoT', 'Real-time Processing'],
      features: [
        'Real-time object detection',
        'Voice output functionality',
        'Web-based visualization',
        'ESP32-CAM integration'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '👁️'
    },
    {
      title: 'Electric Vehicle Dashboard Integration System',
      description: 'Designed a real-time dashboard using ESP32 and CAN Bus protocols. Integrated battery monitoring, mobile app interface, and OTA updates with Java backend.',
      technologies: ['ESP32', 'CAN Bus', 'Java', 'Mobile App', 'OTA Updates'],
      features: [
        'Real-time battery monitoring',
        'Mobile app interface',
        'OTA update capability',
        'Java backend integration'
      ],
      gradient: 'from-green-500 to-emerald-500',
      icon: '🚗'
    },
    {
      title: 'Gesture-Based Light Control System',
      description: 'Built an interactive hand-gesture system to control lighting using sensors and backend logic written in Java. Integrated hardware and software for real-time automation.',
      technologies: ['Java', 'Sensors', 'Hardware Integration', 'Real-time Systems'],
      features: [
        'Hand gesture recognition',
        'Real-time light control',
        'Hardware-software integration',
        'Java backend logic'
      ],
      gradient: 'from-purple-500 to-pink-500',
      icon: '👋'
    },
    {
      title: 'Cystic Fibrosis Detection Using Machine Learning',
      description: 'Utilized Python and scikit-learn to train models for early diagnosis of cystic fibrosis. Handled medical datasets and created predictive analysis reports.',
      technologies: ['Python', 'scikit-learn', 'Machine Learning', 'Data Analysis'],
      features: [
        'Medical dataset processing',
        'Predictive model training',
        'Early diagnosis capability',
        'Analysis report generation'
      ],
      gradient: 'from-orange-500 to-red-500',
      icon: '🧬'
    }
  ];

  // Achievements data
  const achievements = [
    { text: '1st Runner-up, IBM Ice Day Poster Presentation (Silver Medal)', icon: '🥈' },
    { text: '1st Runner-up, SDGATHON Project Expo, KPR Institute of Technology', icon: '🏆' },
    { text: 'Codechef Certified – DBMS (SQL), DAA (JAVA)', icon: '💻' },
    { text: 'Cisco Python Essentials – 1', icon: '🐍' },
    { text: 'Participant – DISFRUTAR 2K24 Hackathon (ACM Club)', icon: '⚡' },
    { text: 'Postman API Fundamentals Student Expert', icon: '📡' },
    { text: 'Geeks for Geeks Certified – MongoDB Developer', icon: '🍃' }
  ];

  // Floating particles component
  const FloatingParticles = () => {
    return (
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`
            }}
          />
        ))}
      </div>
    );
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <motion.h1 
                className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="inline-block w-5 h-5 mr-2" />
                Bala Venkatarao
              </motion.h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link text-sm font-medium ${
                      activeSection === item.id ? 'text-accent active' : 'text-foreground hover:text-accent'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="inline-block w-4 h-4 mr-1" />
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-accent p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-card border-t border-primary/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left rounded-lg ${
                      activeSection === item.id ? 'text-accent bg-primary/10' : 'text-foreground hover:text-accent hover:bg-primary/5'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="inline-block w-4 h-4 mr-2" />
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center justify-center text-white relative">
        <FloatingParticles />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Profile Image */}
            <motion.div 
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            >
              <div className="profile-image inline-block">
                <img 
                  src={profileImage} 
                  alt="Kurangi Bala Venkatarao" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white/20 shadow-2xl object-cover"
                />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Kurangi Bala Venkatarao
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl mb-6 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="typing-animation">Java Developer & AI Enthusiast</span>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Passionate Computer Science student specializing in Java development, artificial intelligence, 
              and building innovative solutions that make a real-world impact.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg" 
                className="btn-primary bg-white text-primary hover:bg-gray-100"
              >
                <Zap className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="section-padding bg-background relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                Professional Journey
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a driven and curious Computer Science undergraduate with a passion for software development, 
                artificial intelligence, and building real-world solutions. Currently pursuing my B.Tech in Computer 
                Science (AI & ML) at Kalasalingam Academy of Research and Education, I specialize in Java development, 
                Python programming, and modern web technologies.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My expertise lies in backend development using Java and Spring Boot, creating RESTful APIs, 
                and working with databases. I'm passionate about writing clean, efficient code and collaborating 
                in agile environments to deliver scalable applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center">
                <Star className="w-6 h-6 mr-2" />
                Beyond Coding
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beyond coding, I'm a traveler at heart — always seeking new perspectives, cultures, and experiences. 
                Traveling has taught me adaptability, open-mindedness, and the ability to navigate ambiguity — 
                traits that I bring into my professional life as well.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm also an active NSS volunteer and a natural team leader, with a deep appreciation for 
                collaboration, learning, and making a positive impact through technology and service. 
                I believe in using technology not just to solve problems, but to create meaningful 
                solutions that improve people's lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="section-padding bg-muted/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="skill-card h-full">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {skillList.map((skill, index) => (
                        <motion.div 
                          key={skill.name} 
                          className="space-y-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {typeof skill.icon === 'string' && skill.icon.startsWith('/') ? (
                                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                              ) : typeof skill.icon === 'string' ? (
                                <span className="text-xl">{skill.icon}</span>
                              ) : (
                                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                              )}
                              <span className="font-medium text-foreground">{skill.name}</span>
                            </div>
                            <span className="text-sm text-accent font-semibold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                              viewport={{ once: true }}
                              className="skill-progress h-3 rounded-full"
                              style={{ backgroundColor: skill.color || '#3b82f6' }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="section-padding bg-background relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="project-card h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-2xl`}>
                        {project.icon}
                      </div>
                      <CardTitle className="text-primary">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="section-padding bg-muted/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Experience & Leadership
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Team Leadership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Successfully led teams in academic projects, hackathons, and college initiatives. 
                    Coordinated task delegation, ensured collaboration among members, and maintained 
                    timelines to achieve shared goals.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Led teams of 4+ peers in academic software projects',
                      'Ensured timely delivery through collaborative tools',
                      'Conducted weekly reviews and progress tracking',
                      'Demonstrated problem-solving and decision-making under pressure'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="text-accent flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    NSS Volunteer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Actively served as a National Service Scheme (NSS) volunteer, participating in 
                    community outreach programs and making a positive impact in rural development.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Participated in community outreach programs',
                      'Organized cleanliness drives and awareness campaigns',
                      'Coordinated blood donation camps',
                      'Improved local community engagement by 20%',
                      'Developed strong sense of social responsibility'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="section-padding bg-background relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Education & Achievements
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div 
                    className="border-l-4 border-accent pl-6 relative"
                    whileHover={{ x: 5 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                    <h3 className="font-semibold text-lg text-foreground">B.Tech in Computer Science (AI & ML)</h3>
                    <p className="text-muted-foreground">Kalasalingam Academy of Research and Education, Tamil Nadu</p>
                    <p className="text-sm text-muted-foreground">Sept 2022 – May 2026</p>
                    <p className="text-accent font-medium">GPA: 7.71</p>
                  </motion.div>
                  <motion.div 
                    className="border-l-4 border-primary/50 pl-6 relative"
                    whileHover={{ x: 5 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary/50 rounded-full"></div>
                    <h3 className="font-semibold text-foreground">Intermediate (M.P.C)</h3>
                    <p className="text-muted-foreground">Geethanjali Junior College, Darsi, Prakasam, Andhra Pradesh</p>
                    <p className="text-sm text-muted-foreground">Apr 2020 – Apr 2022</p>
                    <p className="text-accent font-medium">Percentage: 68.7%</p>
                  </motion.div>
                  <motion.div 
                    className="border-l-4 border-primary/30 pl-6 relative"
                    whileHover={{ x: 5 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary/30 rounded-full"></div>
                    <h3 className="font-semibold text-foreground">Secondary School</h3>
                    <p className="text-muted-foreground">Government High School, Darsi, Prakasam, Andhra Pradesh</p>
                    <p className="text-sm text-muted-foreground">Jun 2015 – Apr 2020</p>
                    <p className="text-accent font-medium">Percentage: 93%</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-accent flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Achievements & Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-xl flex-shrink-0">{achievement.icon}</span>
                        <p className="text-muted-foreground leading-relaxed">{achievement.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="section-padding bg-muted/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <div className="section-divider"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
              Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'balavenkataraokurangi@54.com', href: 'mailto:balavenkataraokurangi@54.com' },
                    { icon: Phone, label: 'Phone', value: '+91 9177773730', href: 'tel:+919177773730' },
                    { icon: MapPin, label: 'Location', value: 'Ongole, Andhra Pradesh, India', href: null }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-muted-foreground hover:text-accent transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-accent mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {[
                    { href: 'https://www.linkedin.com/in/kurangi-bala-venkatarao-a3a81b249/', icon: Linkedin, bg: 'bg-blue-600 hover:bg-blue-700' },
                    { href: 'https://github.com/Kurangi237', icon: Github, bg: 'bg-gray-800 hover:bg-gray-900' },
                    { href: 'https://leetcode.com/u/balavenkataraokurangi/', icon: leetcodeIcon, bg: 'bg-orange-500 hover:bg-orange-600', isImage: true },
                    { href: 'https://www.geeksforgeeks.org/user/balavenkataraokurangi/', icon: geeksforgeeksIcon, bg: 'bg-green-600 hover:bg-green-700', isImage: true }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon w-12 h-12 ${social.bg} rounded-lg flex items-center justify-center transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.isImage ? (
                        <img src={social.icon} alt="Social" className="w-6 h-6" />
                      ) : (
                        <social.icon className="w-6 h-6 text-white" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="contact-form">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Name</label>
                        <Input id="name" placeholder="Your name" className="bg-background/50" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email</label>
                        <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background/50" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                      <Input id="subject" placeholder="What's this about?" className="bg-background/50" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message..." 
                        rows={5}
                        className="bg-background/50"
                      />
                    </div>
                    <Button type="submit" className="w-full btn-primary bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="footer-gradient text-white py-12 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center">
                <Sparkles className="w-6 h-6 mr-2" />
                Kurangi Bala Venkatarao
              </h3>
              <p className="text-primary-foreground/80 mb-6">Java Developer & AI Enthusiast</p>
              <div className="flex justify-center space-x-6 mb-6">
                {[
                  { href: 'https://www.linkedin.com/in/kurangi-bala-venkatarao-a3a81b249/', icon: Linkedin },
                  { href: 'https://github.com/Kurangi237', icon: Github },
                  { href: 'https://leetcode.com/u/balavenkataraokurangi/', icon: Code },
                  { href: 'https://www.geeksforgeeks.org/user/balavenkataraokurangi/', icon: Database },
                  { href: 'mailto:balavenkataraokurangi@54.com', icon: Mail }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.2, y: -3 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
              <div className="section-divider opacity-50"></div>
              <p className="text-primary-foreground/60 text-sm mt-6">
                © 2025 Kurangi Bala Venkatarao. All rights reserved. Built with ❤️ and React.
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

