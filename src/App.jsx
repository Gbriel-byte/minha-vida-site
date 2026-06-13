import { useState } from "react";
import {Menu, X,MapPin,Calendar,Mail,Github,Music,Gamepad2,BookOpen,Camera,Dumbbell,Plane,} from "lucide-react";
import "./App.css";

/*
  ===========================================================
  PÁGINA PESSOAL — "MINHA VIDA"
  ===========================================================
  Este componente usa classes CSS definidas em "App.css".
  Para mudar as cores, edite as variáveis no topo do App.css
  (--cor-fundo, --cor-destaque, --cor-escuro, etc).

  COMO PERSONALIZAR O CONTEÚDO:
  - Troque os textos das variáveis abaixo pelos seus dados.
  - Edite os arrays "timeline" e "hobbies" para mudar os cards.
  ===========================================================
*/

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  // ----- DADOS PESSOAIS (edite à vontade) -----
  const nome = "Gabriel ";
  const frase = "Estudante, curioso por tecnologia e que curte ouvir música.";
  const cidade = "Pires do Rio, GO";
  const idade = "20 anos";
  const profissao = "Estudante";

  // ----- LINHA DO TEMPO (adicione/remova itens) -----
  const timeline = [
    {
      ano: "2006",
      titulo: "Nascimento",
      texto: "Onde tudo começou — nasci em Aparecida de Goiânia, Goiás.",
    },
    {
      ano: "2024",
      titulo: "Terminei o ensino médio",
      texto: "Finalizei meu ensino médio e me preparei para a faculdade.",
    },
    {
      ano: "2025",
      titulo: "Entrada na faculdade",
      texto: "Comecei a graduação e adquiri mais conhecimento por tecnologia.",
    },
    {
      ano: "2026",
      titulo: "Hoje",
      texto: "Aprendendo React e criando meu primeiro site pessoal!",
    },
  ];

  // ----- HOBBIES (adicione/remova itens) -----
  const hobbies = [
    { icone: Music, titulo: "Música", texto: "Escuto música nos momentos livres." },
    { icone: Gamepad2, titulo: "Games", texto: "Adoro jogos de estratégia e FPS." },
    { icone: BookOpen, titulo: "Leitura", texto: "Livros de ficção científica são meus favoritos." },
    { icone: Camera, titulo: "Redes Sociais", texto: "Gosto de ter uma vida online." },
    { icone: Dumbbell, titulo: "Treino", texto: "Vou à academia algumas vezes por semana." },
    { icone: Plane, titulo: "Viagens", texto: "Sempre que posso, conheço lugares novos." },
  ];

  return (
    <div className="pagina">
      {/* ===================== NAVBAR ===================== */}
      <header className="navbar">
        <nav className="navbar-inner">
          <span className="logo">{nome}</span>

          {/* Links - versão desktop */}
          <ul className="nav-links">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#linha-do-tempo">Linha do tempo</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>

          {/* Botão menu - versão mobile */}
          <button
            className="menu-btn"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
          >
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Menu mobile aberto */}
        {menuAberto && (
          <ul className="mobile-menu">
            <li><a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</a></li>
            <li><a href="#linha-do-tempo" onClick={() => setMenuAberto(false)}>Linha do tempo</a></li>
            <li><a href="#hobbies" onClick={() => setMenuAberto(false)}>Hobbies</a></li>
            <li><a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a></li>
          </ul>
        )}
      </header>

      {/* ===================== HERO ===================== */}
      <section className="hero">
      
        <div className="avatar">{nome.charAt(0)}</div>

        <h1 className="hero-title">Olá, eu sou {nome}</h1>

        <p className="hero-subtitle">{frase}</p>

        <div className="hero-tags">
          <span className="tag">
            <MapPin size={16} /> {cidade}
          </span>
          <span className="tag">
            <Calendar size={16} /> {idade}
          </span>
          <span className="tag">🎓 {profissao}</span>
        </div>
      </section>

      {/* ===================== SOBRE ===================== */}
      <section id="sobre" className="section">
        <h2 className="section-title">Sobre mim</h2>
        <p className="section-text">
          Olá! Eu sou o Gabriel, um estudante de SI, morando em Pires do Rio. Este é meu primeiro contato com o React.
        </p>
      </section>

      {/* ===================== LINHA DO TEMPO ===================== */}
      <section id="linha-do-tempo" className="section">
        <h2 className="section-title">Linha do tempo</h2>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-dot" />
              <p className="timeline-year">{item.ano}</p>
              <h3 className="timeline-title">{item.titulo}</h3>
              <p className="timeline-text">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== HOBBIES ===================== */}
      <section id="hobbies" className="section">
        <h2 className="section-title">O que eu gosto de fazer</h2>

        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => {
            const Icone = hobby.icone;
            return (
              <div key={index} className="hobby-card">
                <Icone size={28} />
                <h3 className="hobby-title">{hobby.titulo}</h3>
                <p className="hobby-text">{hobby.texto}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================== CONTATO ===================== */}
      <section id="contato" className="contact-section">
        <div className="contact-inner">
          <h2 className="contact-title">Vamos nos conectar</h2>
          <p className="contact-text">
            Me encontre nas redes sociais ou envie um e-mail.
          </p>

          <div className="social-links">
            <a href="mailto:gbrl.lrnzo@gmail.com" aria-label="E-mail"><Mail size={28} /></a>
            <a href="https://github.com/Gbriel-byte" aria-label="GitHub"><Github size={28} /></a>
          </div>
        </div>
      </section>

      {/* ===================== RODAPÉ ===================== */}
      <footer className="footer">
        Feito usando React • {nome} © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
