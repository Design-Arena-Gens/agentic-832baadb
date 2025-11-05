import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guia Pr?tico: Como usar IAs modernas',
  description: 'Aprenda a usar IA generativa com seguran?a, efici?ncia e bons prompts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="border-b border-gray-200 bg-white">
          <div className="container flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-brand-600" />
              <span className="text-lg font-semibold">Guia de IA</span>
            </div>
            <nav className="text-sm text-gray-600 flex items-center gap-4">
              <a href="#como-comecar" className="hover:text-gray-900">Come?ar</a>
              <a href="#prompt-builder" className="hover:text-gray-900">Prompts</a>
              <a href="#faq" className="hover:text-gray-900">FAQ</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-gray-200 mt-16">
          <div className="container py-8 text-sm text-gray-500">
            Feito com Next.js e Tailwind. Sem dados enviados para servidores.
          </div>
        </footer>
      </body>
    </html>
  );
}
