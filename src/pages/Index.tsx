import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Clock, BadgeCheck, Code, BarChart3, Shield, Megaphone, Palette, ArrowRight } from "lucide-react";

const trustItems = [
  { icon: Users, label: "10,000+ Students Enrolled" },
  { icon: Award, label: "Expert-Led Courses" },
  { icon: Clock, label: "Lifetime Access" },
  { icon: BadgeCheck, label: "Certificate on Completion" },
];

const courseCategories = [
  { icon: Code, title: "Web Development", desc: "From your first line of HTML to deploying full-stack applications, our web development courses take you from the foundations all the way to job-ready competence. Covering HTML, CSS, JavaScript, React, Node.js, and beyond." },
  { icon: BarChart3, title: "Data & Analytics", desc: "Learn to work with data the way businesses actually need. Python, SQL, data visualisation, machine learning fundamentals, and business analytics — taught in a way that translates directly into workplace value." },
  { icon: Shield, title: "Cybersecurity", desc: "One of the fastest-growing areas of demand in the technology sector. Our cybersecurity courses cover networking fundamentals, ethical hacking, security operations, and certification preparation for CompTIA, CEH, and more." },
  { icon: Megaphone, title: "Digital Marketing", desc: "The skills that grow businesses online. SEO, paid advertising, content strategy, social media marketing, email automation, and analytics — practical and immediately applicable for freelancers, marketers, and business owners." },
  { icon: Palette, title: "UI/UX Design", desc: "Design thinking, user research, wireframing, prototyping, and design systems — everything you need to build digital products that people actually enjoy using. Tools covered include Figma, Adobe XD, and more." },
];

const pillars = [
  { title: "Taught by Industry Practitioners", desc: "Every Veltrano course is designed and delivered by professionals who are actively working in the field they teach. Not academics, not content creators — real practitioners who bring current, relevant knowledge to every lesson." },
  { title: "Built Around Outcomes, Not Hours", desc: "We measure our courses by what you can do when you finish them, not by how many hours they clock. Every programme is structured around concrete, demonstrable skills and real portfolio projects you can show to an employer or client." },
  { title: "Learn at Your Pace", desc: "Every Veltrano course is fully on-demand with lifetime access — so you can fit your education around your work, your family, and your life, and come back to it whenever you need." },
  { title: "Community and Support", desc: "Every course comes with access to the Veltrano learner community — a space for questions, feedback, accountability, and the kind of peer connection that makes difficult material feel manageable." },
  { title: "Certificates Worth Having", desc: "Our completion certificates are recognised across the industry and designed to add genuine weight to your professional profile. Pair them with portfolio projects and you have something meaningful to present." },
];

const steps = [
  { num: "01", title: "Choose Your Course", desc: "Browse our catalogue, read the curriculum in detail, and watch free preview lessons before you commit. Every course page gives you a full breakdown of what you will learn and what you will be able to do by the end." },
  { num: "02", title: "Enrol and Get Started Immediately", desc: "Once you enrol, your course is available instantly. No waiting for a start date — your learning begins the moment you are ready. Access everything from any device, at any time." },
  { num: "03", title: "Learn, Build, and Apply", desc: "Work through structured lessons, complete hands-on exercises, and build real projects as you go. Each module builds on the last, and practical assignments ensure the knowledge sticks." },
  { num: "04", title: "Complete, Certificate, and Move Forward", desc: "Finish your course, earn your Veltrano Technologies certificate, and take your new skills into the world. Whether that means a new job, a promotion, or a client — you will have the foundations to make it happen." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 grid-pattern hero-glow">
        <div className="container text-center max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            Learn the Skills That Power the Digital World<span className="text-primary">.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Veltrano Technologies offers professional digital courses designed for ambitious learners, career changers, and working professionals who are serious about building skills that matter. Real knowledge. Practical outcomes. Industry-relevant content taught by experts who have been there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/courses">Explore Our Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/courses">View Free Lessons</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-xs md:text-sm font-medium text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-gap">
        <div className="container max-w-3xl text-center">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Technology Education Built for the Real World.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Veltrano Technologies is a digital learning platform on a mission to close the gap between where you are and where the tech industry needs you to be. We build and deliver high-quality digital courses that go beyond surface-level introductions — structured, in-depth programmes that give you the confidence, portfolio, and practical knowledge to move forward in your career.
          </p>
          <Link to="/about" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
            Learn More About Us <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="section-gap border-t border-border/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>What We Teach</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Courses That Advance Careers. Skills That Open Doors.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our course catalogue covers the most in-demand areas of the digital economy — structured for learners at every level, from absolute beginners to working professionals looking to specialise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courseCategories.map((cat) => (
              <Link
                key={cat.title}
                to="/courses"
                className="glass-card rounded-lg p-6 hover:-translate-y-1 transition-all duration-200 group"
              >
                <cat.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">{cat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-gap border-t border-border/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>The Veltrano Difference</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not Just Another Online Learning Platform.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              There are a lot of places to find digital courses. Here is why learners choose Veltrano Technologies — and why they complete what they start.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className="glass-card rounded-lg p-6">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary text-sm font-bold mb-4">{i + 1}</div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-gap border-t border-border/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <SectionLabel>Your Learning Journey</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              From Enrolment to Career-Ready in Four Steps.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-4">
                <span className="font-display text-3xl font-extrabold text-primary/30 shrink-0">{s.num}</span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-gap border-t border-border/50 hero-glow">
        <div className="container text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Tech Industry Is Moving Fast. Let's Make Sure You Are Too.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            The best time to build a digital skill is always right now. Explore the Veltrano Technologies course catalogue and find the programme that will take you where you want to be. Your next career move starts with a single lesson.
          </p>
          <Button asChild size="lg" className="text-base px-8 mb-6">
            <Link to="/courses">Start Learning Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Have a question? Reach us at{" "}
            <a href="mailto:contact@veltranomtechnologies.com" className="text-primary hover:underline">
              contact@veltranomtechnologies.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
