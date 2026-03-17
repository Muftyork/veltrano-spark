import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LegalLayoutProps {
  title: string;
  effectiveDate?: string;
  children: ReactNode;
}

const LegalLayout = ({ title, effectiveDate, children }: LegalLayoutProps) => (
  <div className="min-h-screen legal-theme bg-background">
    <Navbar />
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container max-w-3xl">
        <Link to="/" className="text-sm text-primary hover:underline mb-6 inline-block">← Back to Home</Link>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h1>
        {effectiveDate && (
          <p className="text-sm text-muted-foreground mb-8">
            Effective Date: {effectiveDate} | Last Updated: {effectiveDate}
          </p>
        )}
        <div className="prose prose-sm max-w-none text-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-primary [&_a]:hover:underline">
          {children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default LegalLayout;
