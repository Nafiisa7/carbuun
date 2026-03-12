export default function ServiceCard({
  icon,
  title,
  description,
  children,
  color,
}) {
  return (
    <div className={`${color} text-white p-6 sm:p-8 rounded-xl shadow-lg`}>
      <div className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
        {icon}
      </div>

      <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>

      <p className="mb-4 text-sm sm:text-base">{description}</p>

      {children}
    </div>
  );
}
