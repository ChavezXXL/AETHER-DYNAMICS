export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-800/50 relative z-10 bg-black/50 backdrop-blur-md text-center">
      <p className="text-zinc-500 text-sm font-mono tracking-widest">
        &copy; {new Date().getFullYear()} AETHER DYNAMICS. ALL SYSTEMS NOMINAL.
      </p>
    </footer>
  );
}
