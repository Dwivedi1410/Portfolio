export const Header = () => {
  return <div className="flex justify-center items-center relative top-3">
    <nav className="flex gap-1 p-0.5 border fixed top-3 z-10 border-white/15 rounded-full bg-white/10 backdrop-blur-sm">
      <a href="#Home" className="nav-item">Home</a>
      <a href="#Projects" className="nav-item">Project</a>
      <a href="#Experiences" className="nav-item">Experience</a>
      <a href="#Contact" className="nav-item bg-[#D96F32] text-white">Contact</a>
    </nav>
  </div>;
};
