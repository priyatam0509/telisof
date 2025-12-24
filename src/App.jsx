import React, { useState, useEffect } from 'react';
import { Sparkles, Code, Brain, Zap, ArrowRight, Menu, X } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Agentic AI",
      description: "Autonomous AI agents that reason, plan, and execute complex tasks with minimal human intervention."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Generative AI",
      description: "Cutting-edge Gen AI solutions for content creation, data synthesis, and intelligent automation."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, scalable web applications built with the latest frameworks and best practices."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "IT Solutions",
      description: "Comprehensive IT development services tailored to your business needs and goals."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-cyan-500/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-display font-bold text-3xl tracking-tight">
              <span className="text-cyan-400">Teli</span>
              <span className="text-purple-400">Sof</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-slate-300 hover:text-cyan-400">
                  {item}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {['Services', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-mesh grid-pattern">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="text-center space-y-8 animate-slide-up">
            <div className="inline-block px-4 py-2 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
              Next-Generation IT Solutions
            </div>
            
            <h1 className="font-display font-extrabold text-6xl md:text-8xl leading-tight">
              Building the Future
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 glow-text">
                with Intelligence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              TeliSof delivers cutting-edge AI solutions, agentic systems, and modern web development 
              to transform your business and unlock new possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a href="#services" className="btn-primary px-8 py-4 rounded-full font-semibold text-white flex items-center gap-2 group">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full font-semibold border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Our <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cutting-edge solutions powered by artificial intelligence and modern technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-400">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-slate-100">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-5xl md:text-6xl mb-8">
                Innovation Meets
                <br />
                <span className="text-purple-400">Excellence</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  At TeliSof, we're pioneering the next generation of intelligent systems. 
                  Our team specializes in building autonomous AI agents, generative AI applications, 
                  and scalable web solutions that drive real business value.
                </p>
                <p>
                  From concept to deployment, we partner with organizations to harness the power 
                  of artificial intelligence and modern development practices, creating solutions 
                  that are not just functional, but transformative.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="font-display font-bold text-4xl text-cyan-400 mb-2">50+</div>
                  <div className="text-slate-400">Projects Delivered</div>
                </div>
                <div>
                  <div className="font-display font-bold text-4xl text-purple-400 mb-2">100%</div>
                  <div className="text-slate-400">Client Satisfaction</div>
                </div>
                <div>
                  <div className="font-display font-bold text-4xl text-cyan-400 mb-2">24/7</div>
                  <div className="text-slate-400">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Brain className="w-32 h-32 text-cyan-400 mx-auto animate-float" />
                    <div className="font-display font-bold text-2xl text-slate-100">AI-Powered Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Let's discuss how TeliSof can help you leverage AI and modern technology 
            to achieve your goals and stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@telisof.com" className="btn-primary px-10 py-5 rounded-full font-semibold text-white text-lg">
              Start a Conversation
            </a>
            <a href="tel:+1234567890" className="px-10 py-5 rounded-full font-semibold border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all text-lg">
              Call Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-display font-bold text-2xl">
              <span className="text-cyan-400">Teli</span>
              <span className="text-purple-400">Sof</span>
            </div>
            
            <div className="text-slate-400 text-center md:text-left">
              © 2024 TeliSof. Empowering businesses with intelligent solutions.
            </div>
            
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
