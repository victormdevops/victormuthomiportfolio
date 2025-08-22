export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
      <p>© {new Date().getFullYear()} Victor Muthomi • DevOps Engineer</p>
      <div className="mt-2 space-x-4">
        <a href="#banner" className="text-green-400 hover:text-white">
          Top
        </a>
        <a href="#contact" className="text-green-400 hover:text-white">
          Contact
        </a>
      </div>
    </footer>
  );
}
