export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-16 px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p>© 2026 AutoFix Pro. All rights reserved.</p>
          <p className="text-sm opacity-80">
            Fast roadside vehicle repair service
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>

          <a href="#" className="hover:underline">
            Terms of Service
          </a>

          <a href="#" className="hover:underline">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
