import { portfolio } from "@/data/portfolio";
import Portfolio from "./Portfolio";

// Function to generate static paths for dynamic routes
export function generateStaticParams() {
  return portfolio.map((item) => ({
    id: item.id.toString(), // Convert id to string, since dynamic params are always strings
  }));
}

export default function PortfolioPage() {
  return <Portfolio />
}
