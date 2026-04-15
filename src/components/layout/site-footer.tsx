export function SiteFooter() {
  return (
    <footer className="bg-[#041627] dark:bg-[#020B14] w-full mt-auto border-t border-[#0A1F33] hidden md:block">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-7xl mx-auto">
        <div className="text-lg font-bold text-[#D4A373] mb-4 md:mb-0">
          Civic Editorial
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0 text-sm font-medium">
          <a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#">Official Data Sources</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#">Contact</a>
        </div>
        <div className="text-[#F8F9FA] text-sm font-medium opacity-60">
          © 2024 Civic Editorial. Non-Partisan Information Service.
        </div>
      </div>
    </footer>
  );
}
