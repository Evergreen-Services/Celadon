export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-primary-contrast)] px-6 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mt-3 opacity-90 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
