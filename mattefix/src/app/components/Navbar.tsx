export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E3A5F] text-white px-6 py-4 flex items-center justify-between">
            <span className="text-xl font-bold tracking-tight">MatteFix</span>
            <a href="#book" className="bg-[#2E6DB4] hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-full transition-colors text-sm">
                Book en time
            </a>
        </nav>
    );
}