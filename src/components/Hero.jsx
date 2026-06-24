export default function Hero({ children }) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center">
      <div className="w-full max-w-3xl">{children}</div>
    </section>
  );
}