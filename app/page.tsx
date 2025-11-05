import { HowToStart } from './components/HowToStart';
import { FAQ } from './components/FAQ';
import { PromptBuilder } from './components/PromptBuilder';

export default function Page() {
  return (
    <>
      <section className="container mt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Como usar as novas IAs</h1>
            <p className="mt-4 text-gray-600 text-lg">Guia pr?tico para come?ar hoje: conceitos, prompts, exemplos e boas pr?ticas em portugu?s.</p>
            <div className="mt-6 flex gap-3">
              <a href="#prompt-builder" className="rounded bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">Abrir construtor de prompt</a>
              <a href="#faq" className="rounded border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50">Ler perguntas frequentes</a>
            </div>
          </div>
          <div className="card">
            <ul className="list-disc pl-5 text-gray-700">
              <li><span className="font-medium">Texto:</span> emails, resumos, ideias, roteiros</li>
              <li><span className="font-medium">C?digo:</span> explicar trechos, gerar testes, revisar PRs</li>
              <li><span className="font-medium">Dados:</span> estruturar, tabelar, criar planos e checklists</li>
              <li><span className="font-medium">Aprendizado:</span> tutoria guiada, exemplos passo-a-passo</li>
            </ul>
          </div>
        </div>
      </section>

      <HowToStart />
      <PromptBuilder />
      <FAQ />
    </>
  );
}
