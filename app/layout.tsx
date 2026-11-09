import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Manage your dashboard here",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {

    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <body className="min-h-full">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* <SidebarProvider defaultOpen={defaultOpen}>
                        <AppSideBar />
                        <main className="w-full">
                            <NavBar />
                            <div className="px-4">{children}</div>
                        </main>
                    </SidebarProvider> */}
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
