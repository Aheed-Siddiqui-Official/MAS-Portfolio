import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const APP_NAME = "Muhammad Aheed Siddiqui";
const APP_DEFAULT_TITLE = "Muhammad Aheed Siddiqui | Portfolio";
const APP_TITLE_TEMPLATE = "%s - Muhammad Aheed Siddiqui";
const APP_DESCRIPTION = "Showcasing Aheed Siddiqui's skills, projects, and expertise in web development. Explore top-notch projects and innovative solutions.";
const APP_KEYWORDS = ["Muhammad Aheed Siddiqui", "Aheed Siddiqui Portfolio", "Portfolio", "Web Developer", "MERN Stack Developer", "React", "JavaScript", "Frontend", "Backend", "Projects", "Software Engineer"];

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
  manifest: "/manifest.json",
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}