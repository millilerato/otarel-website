export default function PageContainer({ children }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {children}
    </div>
  );
}