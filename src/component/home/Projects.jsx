const steps = [
  { title: "Discover", desc: "Understand goals & challenges" },
  { title: "Plan", desc: "Create data-driven strategy" },
  { title: "Execute", desc: "Implement & optimize" },
  { title: "Scale", desc: "Measure, improve, grow" },
];

const Process = () => {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">How We Work</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
