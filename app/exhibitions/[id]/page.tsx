"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Heart, Sparkles } from "lucide-react";

const exhibitionData: Record<string, any> = {
  "come-hell-or-high-water": {
    title: "Come Hell or High Water",
    artist: "SUPERFLEX",
    date: "7. maj 2026 – 3. jan 2027",
    intro: "Engang vil ARKEN ligge under vand.",
    description: "I soloudstillingen Come Hell or High Water tager den danske kunstnergruppe SUPERFLEX denne fremtid som afsæt, når de forvandler museet til en ark for alle arter. Museet iscenesættes som et sunket skib dybt under havets overflade. Blåt lys fylder rummet, og ved indgangen vidner sandsække og barrikader om forsøg på at holde vandet ude.\n\nI museets Kunstakse tårner transportkasser sig op. De rummer værker fra SUPERFLEX' mere end 30 år lange karriere: Fra kunstnergruppens tidligste værker fra 1993 til helt nye produktioner. Kasserne er både et arkiv over deres kunst og samtidig lasten på et skib – klar til at blive transporteret videre, åbnet eller efterladt.\n\nDe seneste mange år har SUPERFLEX udviklet værker, der ikke alene fungerer som kunst, men også som levesteder for fisk. Denne praksis kulminerer i udstillingens nye, langsigtede projekt The Ark Factory. Midt i udstillingen etableres en fungerende fabrik, hvor dele af en stor ark fremstilles med en ny teknik, som skaber levesteder for havets liv. Denne ark skal ikke flyde, men vil fungere som et kunstigt rev, der kan understøtte biodiversitet når havniveauet stiger. På sigt anbringes arkens dele på havets bund, spredt rundt om i hele verden. SUPERFLEX' ark bliver en platform for sameksistens på tværs af arter – et fartøj, der bærer liv ind i fremtiden, med eller uden mennesket ombord.\n\nCome Hell or High Water insisterer på handling midt i usikkerheden og udfolder sig som et rum for forberedelse, samarbejde og forestillingskraft.",
    images: [
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69fb4203bdb081cabf8bc535_Come%20Hell%20or%20High%20Water_SUPERFLEX.Foto_Anders%20Sune%20Berg_09.webp",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69fb44012f0c5bc483fd1837_Come%20Hell%20or%20High%20Water_SUPERFLEX.Foto_Anders%20Sune%20Berg_07.webp",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69fc5e55f43b533160c2a9a6_Come%20Hell%20or%20High%20Water_SUPERFLEX.Foto_Anders%20Sune%20Berg_05.webp",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69fc5eb48af259e53d02a64e_MEV08787.webp",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69fc5f2647060a95ed834a35_MEV08810.webp",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69947a4fa2774eef291ea5ac_SUPERFLEX_02.jpg"
    ]
  },
  "55-6deg-north": {
    title: "55.6° North",
    artist: "ARKENs samling",
    date: "5. feb 2026 – 30. aug 2026",
    intro: "55.6° nord er den breddegrad, som ARKEN ligger på midt på den københavnske Vestegn.",
    description: "Sætter man en nål her i en globus og drejer den, kommer man bl.a. forbi Baltikum, Hviderusland, Rusland, det nordlige Kina, Alaska, Canada og England, før man er tilbage ved Norden. Herfra stiller forårets store udstilling af nordisk samtidskunst i ARKENs samling spørgsmål om den verden og virkelighed, som vi lever i lige nu. Det er en tid, hvor geopolitiske forskydninger forandrer regionens forhold til USA og Rusland, og hvor meget er under forandring. Men hvad er det, der forandrer sig? Hvordan oplever vi det globale fællesskab? Og hvad søger vi i de nordiske traditioner, ideer og kulturer?\n\nUdstillingen er fuld af sprækker og åbninger, der lukker os ind og ud af det nordiske. Kunstnerne er alle fra den nordiske region eller knyttet til den. De har globalt udsyn. De lader os se deres egen kultur indefra. De står i nutiden, og de har historien med. Identitet og magt, velfærd og forbrug, natur og klima er noget af det, der optager dem.\n\nUdstillingens kunstnere kaster vidt forskellige blikke på det nordiske. Grønlandske Inuuteq Storch fotograferer sin hverdag i Grønland i en tid, hvor importen til Grønland af vestlig livsstil er stor. Det er til gengæld småt med eksporten af lokale fortællinger om den grønlandske hverdag, hvor traditioner møder nutidens sociale kampe og fejlslagne kolonialisme. Svenske Emilia Bergmark ser ud på Nordsøen som natur og frontlinje under pres, hvor vilde fugle og sorte jagerfly fylder himlen, mens fiskekuttere, olietankere og badeænder dominerer havet.\n\nPå 55.6° North udforsker samtidskunsten et bredt felt af kunstneriske udtryk og praksisser. Fra det rituelle og mytiske til det rå, kropslige og politiske. Udstillingen tegner et billede af en stærk og åben, nordisk kunstscene, der undersøger de fællesskaber, værdier og magtforhold, som er under drastisk forandring lige nu.",
    images: [
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/6981bff00860925997d71fd0_55.6%C2%B0%20North%20%E2%80%93%20Arken%E2%80%99s%20Collection%2C%20installation%20view-2.jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/6981bc5f62840663fdb01d43_Villiam%20Miklos%20Andersen%2C%20Flora%27s%20Wagons%20of%20Fools%2C%202024..jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/695e350d97f8dfc36389095c_Inuuteq%20Storch%2C%20What%20if%20you%20were%20my%20Sabine%2C%202019-2025.png",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/6981bdf51af8a5fc0d834c05_Nina%20Beier%2C%20Life%20Guardians%20-%20Guardians%2C%20Liv-vogtere%20-%20Vogtere%202023-2.jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/6981bf91c046cbe817ec32cb_Tore%20Hallas%2C%20Du%20er%20t%C3%A6ttere%20pa%CC%8A%20Gud%2C%20na%CC%8Ar%20du%20ikke%20giver%20efter%2C%202023.jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/6981be3719c97ffe8af3a0ef_Elmgreen%20%26%20Dragset%2C%20Strike-Powerless%20Structures%2C%20Fig.%2086%2C%202002.jpg"
    ]
  },
  "skulpturpark": {
    title: "Skulpturparken ved Havet",
    artist: "ARKENs samling",
    date: "Permanent udstilling",
    intro: "Rundt om museet ligger en skulpturpark, hvor du kan gå på opdagelse med familie og venner.",
    description: "En bænk zigzagger sig ind i landskabet. Et hus rejser sig midt ude på vandet med vandoverfladen som sit flydende gulv. En flok forhistoriske dolkhaler kravler op på land, og en dreng vinker til dig højt oppe fra sin bronzestøbte gyngehest. I det smukke strandlandskab er der et væld af skulpturer fra museets kunstsamling: Nogle får dig til at se på omgivelserne med nye øjne, andre byder dig op til leg. Her er skulpturer, som du kan kravle på eller hvile dig ved, bevæge dig ind i eller spejle dig i.\n\nAlene eller sammen med andre. Uanset om du er ude på en morgenløbetur, lufter hund eller har viet din dag til et museumsbesøg, er Skulpturparken et sted fuldt af overraskende kunst-oplevelser og nye muligheder for at udforske samtidskunsten i dit eget tempo. Midt i Strandparkens smukke natur uanset årstiden.",
    images: [
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/65771997c869eae0e05fdb33_Elmgreen-_-Dragset_-Powerless-Structures_-Fig.-101_-2012.webp",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/67234e54984cf9168f904465_Skulpturpark%20One%20two%20three%20swing!.jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/66b362ba0d99a6814c556425_Were%20do%20we%20go%20from%20here.jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/667543eb5292a80e2fd40662_foto-Tina-Agnew-_5_.webp",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/66753d4181de1a9f6faddcc4_IMG_6514.webp"
    ]
  },
  "the-garbage-man": {
    title: "The Garbage Man",
    artist: "Thomas Dambo",
    date: "24. maj 2026 – 29. nov 2026",
    intro: "I foråret 2026 åbner ARKEN dørene til en spektakulær udstilling skabt af Thomas Dambo.",
    description: "Thomas Dambo er verdenskendt for at forvandle affald til kunst. I løbet af det seneste årti har han skabt mere end 100 troldeskulpturer, placeret rundt omkring i hele verden. Skulpturerne fejrer mødet mellem kunst, natur, fantasi og genbrug af det, andre har kasseret. De inspirerer til refleksion og forundring gennem fysisk leg og fælles oplevelser.\n\nEfter en ungdom præget af hiphop, graffiti og street art begyndte Dambo at eksperimentere med storskalainstallationer skabt af genbrugsmaterialer. Som en livslang fortaler for upcycling og publikumsinddragelse udfordrer Thomas Dambo konstant grænserne mellem kunst, eventyr og aktivisme. Hans værker har forvandlet landskaber og lokalsamfund og tiltrækker publikum fra hele verden til en legende, men også presserende samtale om affald, forundring og vores forhold til planeten.\n\nI 2016 skabte Thomas Dambo De Seks Glemte Kæmper, en serie af gigantiske troldeskulpturer placeret i naturområder omkring Københavns Vestegn. Siden er flere kommet til rundt omkring i Danmark, og hans “Troll Hunt” blev en viral succes og er fortsat en populær udflugt for familier. Den internationale pendant, “Troll Hunt” i USA, gav hans praksis global anerkendelse. De seks store skulpturer, skjult i landskabet, slog besøgsrekorder og tiltrak mere end 1,24 millioner gæster det første år.\n\nARKEN Museum for Samtidskunst har nu ambitionen om at blive det første museum i verden, der bringer Dambo indenfor på ARKEN i Ishøj, hvor en af hans trolde allerede findes i naturområdet omkring museet. ARKEN har inviteret Dambo til at skabe en udstilling, hvor genbrug er guld, og som med et glimt i øjet giver os et nyt perspektiv på, hvad affald egentlig er, hvordan vi forbruger, og hvordan vi kan gentænke vores fælles ansvar.\n\nUdstillingen vil være rig på fortælling og udforskning. Besøgende kan gå på opdagelse i udstillingen og derefter prøve kræfter med at bygge en trold i det dedikerede troldeværksted. Her kan gæster skabe deres egne trolde ved hjælp af ARKENs tidligere butiksgulv og foyergulv, som nylig er blevet fjernet. De trolde, som publikum skaber, vil vise, hvordan vi gennem enkle handlinger kan forvandle vores affald til noget, der spreder latter og glæde – og hjælper os med at se muligheder i det, der er blevet kasseret, især når vi skaber sammen.",
    images: [
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/690cb255641ce476fe5f0548_Thomas%20Dambo%20in%20his%20barn.jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/690cb2d3a9e64ca042419fa2_Mrs%20Skipper%20-%20Rhode%20Island%20-%20USA.jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/690cb2fd1df4c285761614b7_Lille%20Tilde%20-%20Copenhagen%20-%20Denmark.jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/6994452c3d9de807ab9f1c86_Thomas%20Dambo_01.jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/6994458850fca754c31086e1_Thomas%20Dambo_02.jpg",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/699445ba50fca754c31097e6_Thomas%20Dambo_03.jpg"
    ]
  },
  "ups": {
    title: "UPS – Kørners Kunstkonkurrence",
    artist: "Unge Talenter",
    date: "28. maj 2026 – 28. jun 2026",
    intro: "Fra hverdagens ‘ups’ til livets ‘ups’: Værkerne i årets Kørners Kunstkonkurrence udfolder humor, alvor og eksistentielle spørgsmål.",
    description: "‘Ups’ kan være en fejl, der åbner nye muligheder i den kreative proces. Som tema fungerer ‘ups’ som en guide frem for en forhindring og peger på, at det uventede og fejlen er en naturlig del af at være menneske og at skabe.\n\nNår noget går i stykker eller ikke fungerer som planlagt, kan det åbne for nye æstetiske muligheder og uventede udtryk. At arbejde med det ukontrollerede og det ubevidste giver plads til spontane beslutninger, hvor fejl bliver en integreret del af værket. Samtidig kan ups fungere også som tema og spejle de fejl og brud, vi oplever i livet.\n\nUdstillingen præsenterer udvalgte værker af billedkunst- og designelever fra ungdomsuddannelser over hele landet. De har arbejdet med temaet ‘ups’ på vidt forskellige måder og skabt værker, der både rummer personlige fortællinger og et udtryk for den tid, vi lever i, hvor det uperfekte omfavnes og hyldes som noget almenmenneskeligt.\n\nKørners Kunstkonkurrence 2026 er udviklet i samarbejde med Børne- og Undervisningsministeriet, Billedkunst- og Designlærerforeningen og Vendsyssel Kunstmuseum. Bag initiativet står billedkunstner John Kørner. Med konkurrencen vil han inspirere unge og give dem mod på at udtrykke sig kreativt og kunstnerisk.",
    images: [
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69f8a3aa5e73d9a0dd0a049f_Jeppe%20Emil%20Therslund%2C%20Farver%20i%20Fald.webp",
      "https://cdn.prod.website-files.com/649025fd8b383baeda56283d/69f8a493708d21e16e0a1632_Lars%20Corneliussen%2C%20Tyngdekraft%20.webp"
    ]
  }
};

export default function ExhibitionDetail() {
  const params = useParams();
  const id = params?.id as string;
  const data = exhibitionData[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div className="space-y-4">
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Udstillingen blev ikke fundet</p>
          <Link href="/exhibitions" className="text-accent font-black underline">Gå tilbage til oversigten</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-20">
      <header className="p-6 flex items-center justify-between">
        <Link 
          href="/exhibitions" 
          className="inline-flex items-center gap-2 text-accent font-black uppercase text-[10px] tracking-[0.3em] bg-white px-4 py-2 rounded-full shadow-sm border border-accent/10"
        >
          <ArrowLeft size={14} /> Oversigt
        </Link>
        <div className="text-right">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Udstilling</p>
          <p className="text-xs font-bold text-accent-dark uppercase italic">ARKEN 2026</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-12">
        <section className="px-4">
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
            {data.images.map((img: string, i: number) => (
              <div key={i} className="flex-none w-[85vw] sm:w-[500px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white snap-center paper-texture">
                <img src={img} className="w-full h-full object-cover" alt={`Slide ${i}`} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 opacity-30">
            {data.images.map((_: any, i: number) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent-dark" />
            ))}
          </div>
        </section>

        <section className="px-8 space-y-8">
          <div className="space-y-2">
            <h1 className="text-5xl font-serif italic font-black text-black leading-tight tracking-tighter text-center">
              {data.title}
            </h1>
            <p className="text-accent-dark text-sm font-black uppercase tracking-widest text-center">{data.artist}</p>
          </div>

          <div className="space-y-6 pt-4">
             <div className="flex items-center gap-3 text-gray-400 justify-center pb-4">
                <Calendar size={18} className="text-accent" />
                <p className="text-xs font-bold">{data.date}</p>
             </div>
             
             <p className="text-2xl font-serif italic font-black text-black leading-snug text-center">
               "{data.intro}"
             </p>
             
             <div className="space-y-6 max-w-2xl mx-auto">
               {data.description.split('\n\n').map((para: string, i: number) => (
                 <p key={i} className="text-gray-600 leading-relaxed font-medium text-lg">
                   {para}
                 </p>
               ))}
             </div>
          </div>
        </section>
      </main>

      <div className="grain-overlay" />
    </div>
  );
}
