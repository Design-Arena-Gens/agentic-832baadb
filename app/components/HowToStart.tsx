export function HowToStart() {
  return (
    <section id="como-comecar" className="container my-12">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-2">1) Defina o objetivo</h3>
          <p className="text-gray-700">O que voc? quer alcan?ar? Ex.: resumir um PDF, criar um roteiro, revisar um c?digo.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">2) D? contexto</h3>
          <p className="text-gray-700">Explique p?blico, tom, restri??es, formato de sa?da e exemplos do que ? bom.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">3) Itere e valide</h3>
          <p className="text-gray-700">Pe?a 2-3 varia??es, compare, ajuste crit?rios, valide com casos de teste.</p>
        </div>
      </div>
    </section>
  );
}
