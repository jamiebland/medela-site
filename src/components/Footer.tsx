import Link from "next/link";
import { CALENDLY_URL, LOGO_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-text pt-15 pb-7 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-9 md:gap-13 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-[15px] font-bold text-white mb-2.5 flex items-center gap-2 tracking-tight">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_URL}
              alt="Medela Learning"
              className="h-[30px] w-auto object-contain brightness-0 invert shrink-0"
            />
            Medela Learning Support
          </div>
          <p className="text-[13px] text-white/[.38] leading-7 max-w-[250px] mb-3.5">
            Educational therapy and learning support for children in Lisbon and across Portugal. Founded by Rebecca and Jamille.
          </p>
        </div>

        {/* Medela */}
        <div>
          <h4 className="text-[11px] tracking-[.1em] uppercase font-bold text-white/[.28] mb-3">Medela</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/about" className="text-sm text-white/[.46] hover:text-white transition-colors">About us</Link></li>
            <li><Link href="/learning-resources" className="text-sm text-white/[.46] hover:text-white transition-colors">Resources</Link></li>
            <li><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white/[.46] hover:text-white transition-colors">Book a session</a></li>
            <li><Link href="/contact" className="text-sm text-white/[.46] hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Aldeia */}
        <div>
          <h4 className="text-[11px] tracking-[.1em] uppercase font-bold text-white/[.28] mb-3">Aldeia</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/aldeia" className="text-sm text-white/[.46] hover:text-white transition-colors">Community</Link></li>
            <li><Link href="/aldeia#workshops" className="text-sm text-white/[.46] hover:text-white transition-colors">Workshops</Link></li>
            <li><Link href="/blog" className="text-sm text-white/[.46] hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-[11px] tracking-[.1em] uppercase font-bold text-white/[.28] mb-3">Resources</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/learning-resources" className="text-sm text-white/[.46] hover:text-white transition-colors">Grade 1</Link></li>
            <li><Link href="/learning-resources" className="text-sm text-white/[.46] hover:text-white transition-colors">Grade 2</Link></li>
            <li><Link href="/learning-resources" className="text-sm text-white/[.46] hover:text-white transition-colors">Grade 3</Link></li>
            <li><Link href="/learning-resources" className="text-sm text-white/[.46] hover:text-white transition-colors">Grade 4</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto pt-4 border-t border-white/[.07] flex justify-between items-center flex-wrap gap-2">
        <p className="text-xs text-white/[.2]">&copy; 2026 Medela Learning Support. All rights reserved.</p>
        <p className="text-xs text-white/[.18]">
          An <Link href="/aldeia" className="text-purple/[.45] hover:text-purple/[.7] transition-colors">Aldeia</Link> initiative
        </p>
      </div>
    </footer>
  );
}
