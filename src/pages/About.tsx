import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";

const values = [
  { title: "Outcomes Above All", desc: "We measure success in careers changed, skills demonstrated, and projects shipped — not hours watched. Every design decision on the Veltrano platform serves one question: does this help learners finish and succeed?" },
  { title: "Practitioner Knowledge Only", desc: "Every course we offer is grounded in the real practices, real tools, and real challenges of the industry it serves. Our instructors are practitioners first and educators second — and that distinction shows." },
  { title: "Rigour Without Gatekeeping", desc: "We are serious about quality and uncompromising about standards. We are also committed to making our courses accessible regardless of prior experience. Rigorous education and open access are both requirements at Veltrano." },
  { title: "Continuous Improvement", desc: "The technology industry does not stand still, and neither do we. Every course is reviewed and updated on a regular cycle to reflect current tools, current practices, and current industry expectations." },
  { title: "Community and Connection", desc: "Learning is more effective when it is social. We build community into every Veltrano course — not as an afterthought, but as a core part of the learning experience." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 grid-pattern hero-glow">
      <div className="container text-center max-w-4xl">
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
          We Are Veltrano Technologies<span className="text-primary">.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Built to Get You Where the Industry Needs You. A digital education company built by technology professionals for the learners who want to become them.
        </p>
      </div>
    </section>

    {/* About */}
    <section className="section-gap">
      <div className="container max-w-3xl">
        <SectionLabel>About Us</SectionLabel>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">About Veltrano Technologies</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Veltrano Technologies is a professional digital learning platform offering career-focused courses across web development, data analytics, cybersecurity, digital marketing, and UI/UX design. We exist to make high-quality technology education accessible, practical, and genuinely effective for learners at every stage of their journey.</p>
          <p>Our courses are not designed to give you a certificate and move on. They are designed to produce a measurable change in what you know and what you can do — structured programmes built around real projects, real tools, and real-world application. Every course is the result of close collaboration between our curriculum team and active industry professionals who understand exactly what employers and clients are looking for.</p>
          <p>From a first-time learner exploring the world of coding to an experienced professional adding a specialism to their profile, Veltrano Technologies is built to serve learners who are serious about making progress.</p>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="section-gap border-t border-border/50">
      <div className="container max-w-3xl">
        <SectionLabel>Our Purpose</SectionLabel>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          To make the skills that drive the digital economy accessible to anyone with the ambition to learn them. We believe that where you start should never determine where you end up — and that the right education, delivered the right way, can fundamentally change a career. Every course we build is a step toward a world where technical skills are a possibility for everyone prepared to work for them.
        </p>
      </div>
    </section>

    {/* Vision */}
    <section className="section-gap border-t border-border/50">
      <div className="container max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Our Vision</h2>
        <p className="text-muted-foreground leading-relaxed">
          A digital skills landscape where the gap between determined learners and meaningful technology careers is measured in months, not years. Where the quality of your education is not determined by your geography, your background, or your budget. Veltrano Technologies is building toward a future where every learner who completes one of our programmes steps into the industry with the confidence, the portfolio, and the capability to contribute from day one.
        </p>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-gap border-t border-border/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>What Drives Us</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className="glass-card rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary text-sm font-bold mb-4">{i + 1}</div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="section-gap border-t border-border/50">
      <div className="container max-w-3xl">
        <SectionLabel>Our Story</SectionLabel>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">How Veltrano Technologies Began</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Veltrano Technologies was founded by a group of technology professionals who had spent years watching talented, motivated people struggle to break into the industry — not because they lacked ability, but because the available education was not giving them what they actually needed. Too theoretical. Too outdated. Too disconnected from the realities of working in a technology team.</p>
          <p>We started Veltrano to build what we wished had existed when we were learning. Courses structured around how real projects actually work. Curricula built in collaboration with the hiring managers and team leads who know what a strong candidate looks like. A learning environment designed to support completion, not just access.</p>
          <p>We launched with a small set of web development courses and the conviction that quality would do the work. Learners responded. They completed courses. They got jobs. They referred their friends. Today, Veltrano Technologies has helped more than ten thousand learners advance their careers — and is still run by the same principles that drove us on day one.</p>
        </div>
      </div>
    </section>

    {/* Why We Exist */}
    <section className="section-gap border-t border-border/50">
      <div className="container max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Why Veltrano Technologies Exists</h2>
        <p className="text-muted-foreground leading-relaxed">
          Because the technology industry is one of the most powerful engines for economic mobility that exists today — and too many people are locked out of it not by lack of talent, but by lack of access to the right education. We exist to change that equation. To give every determined learner a credible, practical, affordable pathway into the digital economy.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Every time a Veltrano learner lands their first tech role, completes their first freelance project, or applies a new skill to a problem their organisation could not solve before — that is exactly why we built this.
        </p>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
