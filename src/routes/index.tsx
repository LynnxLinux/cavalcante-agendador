import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Star,
  Instagram,
  Clock,
  Navigation,
  Scissors,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";

import heroImg from "@/assets/hero-barbearia.jpg";
import retratoImg from "@/assets/barbeiro-retrato.jpg";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";
import galeria4 from "@/assets/galeria-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Barbearia Cavalcante | Barbearia em Itu - São Camilo" },
      {
        name: "description",
        content:
          "Corte, barba e acabamento premium na Barbearia Cavalcante, em Itu (São Camilo). Agende seu horário pelo WhatsApp em poucos segundos.",
      },
      { property: "og:title", content: "Barbearia Cavalcante | Itu - São Camilo" },
      {
        property: "og:description",
        content:
          "Barbearia em Itu, bairro São Camilo. Corte, barba e cuidados masculinos com acabamento impecável. Agende pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

// ⚠️ SUBSTITUIR: dados do negócio
const WHATSAPP_NUMERO = "[NUMERO]"; // ex.: 5511999999999
const MENSAGEM = encodeURIComponent(
  "Olá! Vi o site de vocês e gostaria de agendar um horário.",
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMERO}?text=${MENSAGEM}`;
const INSTAGRAM_LINK = "https://instagram.com/barbeariacavalcante_itu";
const ENDERECO = "[ENDEREÇO]";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Barbearia Cavalcante Itu São Camilo",
)}`;

const servicos = [
  { nome: "[SERVIÇO 1]", desc: "[Breve descrição do serviço]", preco: "[PREÇO]" },
  { nome: "[SERVIÇO 2]", desc: "[Breve descrição do serviço]", preco: "[PREÇO]" },
  { nome: "[SERVIÇO 3]", desc: "[Breve descrição do serviço]", preco: "[PREÇO]" },
  { nome: "[SERVIÇO 4]", desc: "[Breve descrição do serviço]", preco: "[PREÇO]" },
  { nome: "[SERVIÇO 5]", desc: "[Breve descrição do serviço]", preco: "[PREÇO]" },
];

const diferenciais = [
  { icon: Scissors, titulo: "[DIFERENCIAL 1]", texto: "[Descrição curta do diferencial]" },
  { icon: ShieldCheck, titulo: "[DIFERENCIAL 2]", texto: "[Descrição curta do diferencial]" },
  { icon: Sparkles, titulo: "[DIFERENCIAL 3]", texto: "[Descrição curta do diferencial]" },
];

const depoimentos = [
  { nome: "[NOME DO CLIENTE]", nota: 5, texto: "[Cole aqui uma avaliação real do Google ou Instagram]" },
  { nome: "[NOME DO CLIENTE]", nota: 5, texto: "[Cole aqui uma avaliação real do Google ou Instagram]" },
  { nome: "[NOME DO CLIENTE]", nota: 5, texto: "[Cole aqui uma avaliação real do Google ou Instagram]" },
];

const galeria = [
  { src: galeria1, alt: "Corte masculino degradê feito na Barbearia Cavalcante em Itu" },
  { src: galeria2, alt: "Alinhamento de barba com navalha na Barbearia Cavalcante" },
  { src: galeria3, alt: "Ferramentas profissionais de barbearia" },
  { src: galeria4, alt: "Cliente satisfeito após corte na barbearia em São Camilo, Itu" },
];

function WhatsAppButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm bg-whatsapp px-7 py-4 text-sm font-semibold tracking-wide text-whatsapp-foreground uppercase transition-opacity hover:opacity-90 ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      {children}
    </a>
  );
}

function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${nota} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < nota ? "fill-gold text-gold" : "text-border"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <header className="relative min-h-[100svh] overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImg}
          alt="Interior da Barbearia Cavalcante em Itu, São Camilo"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-5 py-7 sm:px-8">
          <nav className="flex items-center justify-between">
            <span className="font-display text-lg tracking-[0.18em] uppercase">
              Cavalcante
            </span>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-foreground/70 transition-colors hover:text-gold"
              aria-label="Instagram da Barbearia Cavalcante"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </nav>

          <div className="flex flex-1 flex-col justify-center py-10">
            <p className="flex items-center gap-2 text-xs tracking-[0.22em] text-gold uppercase">
              <MapPin className="h-3.5 w-3.5" aria-hidden /> Itu · São Camilo
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Seu corte no ponto certo,
              <span className="block text-gold">toda vez que você senta na cadeira.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-ink-foreground/75 sm:text-lg">
              Barbearia Cavalcante: corte, barba e acabamento feitos com técnica,
              atenção ao detalhe e horário respeitado.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton className="w-full sm:w-auto">
                Agendar pelo WhatsApp
              </WhatsAppButton>
              <a
                href="#servicos"
                className="inline-flex w-full items-center justify-center rounded-sm border border-ink-foreground/25 px-7 py-4 text-sm font-semibold tracking-wide uppercase transition-colors hover:border-gold hover:text-gold sm:w-auto"
              >
                Ver serviços
              </a>
            </div>
            <p className="mt-6 text-xs text-ink-foreground/55">
              Atendimento com hora marcada · [HORÁRIOS]
            </p>
          </div>
        </div>
      </header>

      {/* PROVA SOCIAL */}
      <section className="border-b border-border px-5 py-20 sm:px-8" aria-labelledby="avaliacoes">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">Quem já sentou na cadeira</p>
          <h2 id="avaliacoes" className="mt-3 max-w-lg text-3xl sm:text-4xl">
            A confiança de quem volta sempre
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <figure key={i} className="border border-border bg-card p-7">
                <Estrelas nota={d.nota} />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold">{d.nome}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            ⚠️ Substituir pelos depoimentos reais recebidos no Google/Instagram.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-secondary px-5 py-20 sm:px-8" aria-labelledby="servicos-titulo">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">Serviços</p>
          <h2 id="servicos-titulo" className="mt-3 max-w-lg text-3xl sm:text-4xl">
            O que fazemos na Barbearia Cavalcante
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s, i) => (
              <article key={i} className="flex flex-col bg-card p-7">
                <h3 className="text-2xl">{s.nome}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <p className="mt-5 font-display text-lg text-accent-foreground">{s.preco}</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-semibold tracking-[0.16em] uppercase underline decoration-gold underline-offset-8 transition-colors hover:text-gold"
                >
                  Agendar este serviço
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="px-5 py-20 sm:px-8" aria-labelledby="galeria-titulo">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">Galeria</p>
          <h2 id="galeria-titulo" className="mt-3 text-3xl sm:text-4xl">
            Resultados que falam por nós
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {galeria.map((g, i) => (
              <img
                key={i}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={900}
                height={1100}
                className={`h-full w-full object-cover ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
              />
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            ⚠️ Substituir pelas fotos reais dos cortes do salão.
          </p>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-ink px-5 py-20 text-ink-foreground sm:px-8" aria-labelledby="dif-titulo">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">Por que a Cavalcante</p>
          <h2 id="dif-titulo" className="mt-3 max-w-lg text-3xl sm:text-4xl">
            Detalhes que você percebe no espelho
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {diferenciais.map((d, i) => (
              <div key={i}>
                <d.icon className="h-6 w-6 text-gold" aria-hidden />
                <h3 className="mt-4 text-xl">{d.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="px-5 py-20 sm:px-8" aria-labelledby="sobre-titulo">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <img
            src={retratoImg}
            alt="Profissional responsável pela Barbearia Cavalcante"
            loading="lazy"
            width={1000}
            height={1250}
            className="aspect-[4/5] w-full object-cover"
          />
          <div>
            <p className="section-label">Sobre</p>
            <h2 id="sobre-titulo" className="mt-3 text-3xl sm:text-4xl">
              A cadeira, a tesoura e o cuidado de sempre
            </h2>
            <div className="hairline mt-6" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              [Conte aqui a história do profissional responsável: há quanto tempo
              trabalha com barbearia, o que o motivou a abrir a Barbearia Cavalcante
              no São Camilo e o que ele mais gosta em atender os clientes do bairro.]
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              [Segundo parágrafo opcional: estilo de atendimento, produtos usados,
              formação ou cursos.]
            </p>
            <WhatsAppButton className="mt-8">Falar com o barbeiro</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-secondary px-5 py-20 text-center sm:px-8" aria-labelledby="insta-titulo">
        <div className="mx-auto max-w-2xl">
          <Instagram className="mx-auto h-7 w-7 text-gold" aria-hidden />
          <h2 id="insta-titulo" className="mt-5 text-3xl sm:text-4xl">
            @barbeariacavalcante_itu
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Cortes novos toda semana, bastidores e horários disponíveis.
          </p>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-7 py-4 text-sm font-semibold tracking-wide text-ink-foreground uppercase transition-opacity hover:opacity-90"
          >
            Conheça nosso Instagram
          </a>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="px-5 py-20 sm:px-8" aria-labelledby="local-titulo">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="section-label">Localização</p>
            <h2 id="local-titulo" className="mt-3 text-3xl sm:text-4xl">
              Barbearia em Itu, bairro São Camilo
            </h2>
            <div className="mt-8 space-y-6 text-sm">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                <span>
                  <span className="block font-semibold">Endereço</span>
                  <span className="text-muted-foreground">{ENDERECO} — São Camilo, Itu/SP</span>
                </span>
              </p>
              <p className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                <span>
                  <span className="block font-semibold">Horário de funcionamento</span>
                  <span className="text-muted-foreground">[HORÁRIOS]</span>
                </span>
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/20 px-6 py-4 text-sm font-semibold tracking-wide uppercase transition-colors hover:border-gold hover:text-gold"
              >
                <Navigation className="h-4 w-4" aria-hidden /> Abrir rota
              </a>
              <WhatsAppButton>Agendar horário</WhatsAppButton>
            </div>
          </div>
          <div className="min-h-[300px] overflow-hidden border border-border">
            <iframe
              title="Mapa da Barbearia Cavalcante em Itu, São Camilo"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                "Barbearia Cavalcante Itu São Camilo",
              )}&output=embed`}
              loading="lazy"
              className="h-full min-h-[300px] w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-ink px-5 py-24 text-center text-ink-foreground sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-5xl">
            Pronto para renovar o visual?
          </h2>
          <p className="mt-4 text-ink-foreground/70">
            Chame no WhatsApp e garanta seu horário na Barbearia Cavalcante.
          </p>
          <WhatsAppButton className="mt-8 w-full px-10 py-5 text-base sm:w-auto">
            Agendar meu horário
          </WhatsAppButton>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-[0.18em] uppercase">Cavalcante</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Barbearia em Itu/SP — São Camilo
            </p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>{ENDERECO}</p>
            <p>[HORÁRIOS]</p>
            <p>WhatsApp: [WHATSAPP]</p>
          </div>
          <nav className="space-y-2 text-sm">
            <a href="#servicos" className="block transition-colors hover:text-gold">Serviços</a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-gold">Instagram</a>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-gold">Como chegar</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-gold">Agendar</a>
          </nav>
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} Barbearia Cavalcante · Itu/SP
        </p>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        <span className="sm:inline">Agendar</span>
      </a>
    </div>
  );
}
