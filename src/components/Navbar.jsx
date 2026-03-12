export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b bg-white">
      <div className="flex items-center gap-2">
        <span className="text-blue-600 text-xl">🔧</span>

        <h1 className="text-xl font-bold">AutoFix Pro</h1>
      </div>

      <div className="space-x-6 text-gray-600">
        <a href="#">Home</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
