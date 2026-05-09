import Link from "next/link";
import { ArrowLeft, Sparkles, Calendar } from "lucide-react";

export default function Exhibitions() {
  const currentExhibitions = [
    {
      id: "come-hell-or-high-water",
      title: "Come Hell or High Water – SUPERFLEX",
      date: "7. maj 2026 – 3. jan 2027",
      image: "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69fb4203bdb081cabf8bc535_Come%20Hell%20or%20High%20Water_SUPERFLEX.Foto_Anders%20Sune%20Berg_09.webp",
    },
    {
      id: "55-6deg-north",
      title: "55.6° North – ARKENs samling",
      date: "5. feb 2026 – 30. aug 2026",
      image: "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/6981bc5f62840663fdb01d43_Villiam%20Miklos%20Andersen%2C%20Flora%27s%20Wagons%20of%20Fools%2C%202024..jpg",
    },
    {
      id: "skulpturpark",
      title: "Skulpturparken",
      date: "Permanent udstilling",
      image: "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69426af4a2a898dcefb8b7af_one%20two%20three%20swing!33.jpg",
    }
  ];

  const futureExhibitions = [
    {
      id: "the-garbage-man",
      title: "Thomas Dambo – The Garbage Man",
      date: "24. maj 2026 – 29. nov 2026",
      image: "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/690cb255641ce476fe5f0548_Thomas%20Dambo%20in%20his%20barn.jpg",
    },
    {
      id: "ups",
      title: "UPS – Kørners Kunstkonkurrence",
      date: "28. maj 2026 – 28. jun 2026",
      image: "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69f8a3aa5e73d9a0dd0a049f_Jeppe%20Emil%20Therslund%2C%20Farver%20i%20Fald.webp",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-20">
      <header className="pt-12 pb-8 px-6 flex flex-col items-center text-center">
        <Link 
          href="/?revealed=true" 
          className="mb-8 inline-flex items-center gap-2 text-accent font-black uppercase text-[10px] tracking-[0.3em] bg-white px-6 py-3 rounded-full shadow-md border border-accent/10"
        >
          <ArrowLeft size={14} /> Tilbage til gaven
        </Link>
        <h1 className="text-6xl font-serif italic font-black tracking-tighter text-black leading-none uppercase">ARKEN</h1>
        <p className="text-accent-dark font-black uppercase tracking-[0.4em] text-[10px] mt-2">Udstillingsprogram 2026</p>
      </header>

      <main className="max-w-4xl mx-auto px-4 space-y-16">
        
        {/* Nutid Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-accent justify-center">
            <Sparkles size={18} />
            <h2 className="text-xl font-serif font-black italic">Aktuelle Udstillinger</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {currentExhibitions.map((ex) => (
              <ExhibitionCard key={ex.id} ex={ex} />
            ))}
          </div>
        </section>

        {/* Fremtid Section */}
        <section className="space-y-8 pt-8">
          <div className="flex items-center gap-2 text-gray-400 justify-center">
            <Calendar size={18} />
            <h2 className="text-xl font-serif font-black italic">Kommende</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {futureExhibitions.map((ex) => (
              <ExhibitionCard key={ex.id} ex={ex} />
            ))}
          </div>
        </section>

      </main>

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E')]" />
    </div>
  );
}

function ExhibitionCard({ ex }: { ex: any }) {
  return (
    <Link 
      href={`/exhibitions/${ex.id}`} 
      className="group relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white transition-all active:scale-95"
    >
      <img 
        src={ex.image} 
        alt={ex.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 sm:p-12">
        <div className="space-y-2">
           <div className="bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg w-fit">
              {ex.date}
           </div>
           <h3 className="text-white text-2xl sm:text-4xl font-serif italic font-black leading-tight tracking-tighter drop-shadow-lg">
             {ex.title}
           </h3>
        </div>
      </div>
      <div className="absolute inset-4 border border-white/20 rounded-[1.8rem] pointer-events-none group-hover:inset-6 transition-all duration-500" />
    </Link>
  );
}
