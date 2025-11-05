"use client";

import { useMemo, useState } from 'react';

export function PromptBuilder() {
  const [objective, setObjective] = useState('Escreva um email convidando clientes para um webinar.');
  const [context, setContext] = useState('P?blico: clientes existentes de SaaS B2B. Tom: profissional e amig?vel.');
  const [constraints, setConstraints] = useState('M?x 120 palavras. Inclua CTA com link.');
  const [format, setFormat] = useState('Devolva em markdown com t?tulo, par?grafo e lista de 3 bullets.');
  const [examples, setExamples] = useState('Exemplo de CTA: "Reserve sua vaga".');

  const prompt = useMemo(() => {
    return (
`[Objetivo]\n${objective}\n\n[Contexto]\n${context}\n\n[Restri??es]\n${constraints}\n\n[Formato de sa?da]\n${format}\n\n[Exemplos]\n${examples}\n\n[Processo]\n1) Gere 2 varia??es diferentes\n2) Explique em 3 bullets por que cada uma funciona\n3) Cheque se atende ?s restri??es`
    );
  }, [objective, context, constraints, format, examples]);

  const [copied, setCopied] = useState(false);

  return (
    <section id="prompt-builder" className="container my-16">
      <h2 className="section-title mb-2">Construtor de prompt</h2>
      <p className="text-gray-600 mb-6">Monte prompts claros com objetivo, contexto e crit?rios.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="card">
            <label className="block text-sm font-medium mb-1">Objetivo</label>
            <textarea className="w-full resize-y rounded border border-gray-300 p-2" rows={3} value={objective} onChange={e => setObjective(e.target.value)} />
          </div>
          <div className="card">
            <label className="block text-sm font-medium mb-1">Contexto</label>
            <textarea className="w-full resize-y rounded border border-gray-300 p-2" rows={3} value={context} onChange={e => setContext(e.target.value)} />
          </div>
          <div className="card">
            <label className="block text-sm font-medium mb-1">Restri??es</label>
            <textarea className="w-full resize-y rounded border border-gray-300 p-2" rows={3} value={constraints} onChange={e => setConstraints(e.target.value)} />
          </div>
          <div className="card">
            <label className="block text-sm font-medium mb-1">Formato de sa?da</label>
            <textarea className="w-full resize-y rounded border border-gray-300 p-2" rows={3} value={format} onChange={e => setFormat(e.target.value)} />
          </div>
          <div className="card">
            <label className="block text-sm font-medium mb-1">Exemplos (opcional)</label>
            <textarea className="w-full resize-y rounded border border-gray-300 p-2" rows={3} value={examples} onChange={e => setExamples(e.target.value)} />
          </div>
        </div>
        <div className="card flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Prompt gerado</h3>
            <button
              onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
              className="text-sm rounded bg-brand-600 px-3 py-1 text-white hover:bg-brand-700"
            >{copied ? 'Copiado!' : 'Copiar'}</button>
          </div>
          <pre className="mt-3 whitespace-pre-wrap text-sm text-gray-800 bg-gray-50 rounded p-3 overflow-auto min-h-[200px]">
            {prompt}
          </pre>
          <p className="text-xs text-gray-500 mt-2">Dica: cole o prompt na sua IA preferida (ChatGPT, Claude, Copilot, etc.).</p>
        </div>
      </div>
    </section>
  );
}
