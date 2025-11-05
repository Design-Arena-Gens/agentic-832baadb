"use client";

import { useState } from 'react';

type QA = { q: string; a: string };

const ITEMS: QA[] = [
  {
    q: 'O que posso fazer com IA generativa?',
    a: 'Escrever textos, revisar emails, gerar ideias, resumir documentos, criar planos de estudo, explicar c?digos, criar testes, estruturar dados, e muito mais.'
  },
  {
    q: 'IA substitui pessoas?',
    a: 'N?o. IA potencializa o trabalho humano, automatizando tarefas repetitivas e acelerando etapas. O resultado ? melhor quando voc? guia a IA com contexto e crit?rios claros.'
  },
  {
    q: 'Como proteger meus dados?',
    a: 'Evite enviar informa??es sens?veis. Prefira exemplos fict?cios ou anonimizados. Leia a pol?tica de privacidade da ferramenta que voc? usa e ative op??es de n?o-treinamento quando dispon?veis.'
  },
  {
    q: 'Como melhorar minhas respostas?',
    a: 'D? contexto, objetivo, formato de sa?da e crit?rios de qualidade. Use passos (step-by-step), pe?a para mostrar racioc?nio em t?picos e valide com casos de teste.'
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container my-16">
      <h2 className="section-title mb-6">Perguntas frequentes</h2>
      <div className="space-y-3">
        {ITEMS.map((item, idx) => (
          <div key={idx} className="card">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full text-left flex items-center justify-between"
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-gray-400">{open === idx ? '?' : '+'}</span>
            </button>
            {open === idx && (
              <div className="mt-3 text-gray-700 leading-relaxed">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
