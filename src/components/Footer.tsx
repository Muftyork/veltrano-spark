import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-display text-lg font-bold text-foreground mb-2">
            Veltrano<span className="text-primary">.</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Learn the Skills That Power the Digital World.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Courses", to: "/courses" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Course categories */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4">Courses</h4>
          <ul className="space-y-2.5">
            {["Web Development", "Data & Analytics", "Cybersecurity", "Digital Marketing", "UI/UX Design"].map((c) => (
              <li key={c}>
                <Link to="/courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Refund Policy", to: "/refund" },
              { label: "Terms and Conditions", to: "/terms" },
              { label: "Digital Delivery Policy", to: "/delivery" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Veltrano Technologies. All rights reserved.
        </p>
        <a
          href="mailto:contact@veltranomtechnologies.com"
          className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          contact@veltranomtechnologies.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
