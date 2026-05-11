import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Building2, CheckCircle2, ChevronRight, Gavel, Landmark, Mail, MapPin, Menu, Phone, Scale, ShieldCheck, X } from 'lucide-react'
import './style.css'

import vitor from './assets/vitor.jpg'
import marissol from './assets/marissol.jpg'
import rafaela from './assets/rafaela.png'
import logoLight from './assets/logo-transparent-light.png'
import logoDark from './assets/logo-transparent-dark.png'

const whatsapp = 'https://wa.me/5511958790511?text=Olá,%20gostaria%20de%20falar%20com%20o%20escritório.'

function Header() {
  const [open, setOpen] = React.useState(false)
  const links = ['Atuação', 'Escritório', 'Equipe', 'Contato']

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="Dias, Campos e Bozzoni Advogados">
          <img src={logoLight} alt="Dias, Campos e Bozzoni Advogados" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Fale conosco</a>
        <button className="mobile-button" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {links.map((link) => <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`}>{link}</a>)}
          <a onClick={() => setOpen(false)} className="mobile-cta" href={whatsapp} target="_blank" rel="noreferrer">Fale conosco</a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Advocacia estratégica em São Paulo</span>
          <h1>Excelência jurídica com atuação técnica, discreta e personalizada.</h1>
          <p>
            O Dias, Campos e Bozzoni Advogados une rigor técnico, visão empresarial e atendimento próximo para conduzir demandas consultivas, contratuais e contenciosas com segurança.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href={whatsapp} target="_blank" rel="noreferrer">Agendar atendimento <ArrowRight size={18} /></a>
            <a className="secondary-btn" href="#atuacao">Conhecer áreas</a>
          </div>
          <div className="hero-metrics">
            <div><strong>OAB/SP</strong><span>Atuação regular</span></div>
            <div><strong>SP</strong><span>Atendimento presencial</span></div>
            <div><strong>+20</strong><span>Anos de experiência</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Advogados do escritório">
          <div className="portrait-stack">
            <img className="portrait main" src={marissol} alt="Dra. Marissol" />
            <img className="portrait side top" src={vitor} alt="Dr. Vitor" />
            <img className="portrait side bottom" src={rafaela} alt="Dra. Rafaela" />
          </div>
          <div className="visual-card">
            <Scale size={22} />
            <span>Atendimento sob medida para pessoas físicas e empresas.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Areas() {
  const areas = [
    ['Direito Empresarial', 'Estruturação jurídica para empresas, contratos, riscos, governança e negociações estratégicas.', Building2],
    ['Contratos', 'Elaboração, revisão e negociação de instrumentos com clareza, segurança e proteção jurídica.', ShieldCheck],
    ['Contencioso Estratégico', 'Atuação em disputas relevantes com análise técnica, provas e condução personalizada.', Gavel],
    ['Direito Civil', 'Demandas patrimoniais, obrigações, responsabilidade civil e relações privadas.', Scale],
    ['Tributário Consultivo', 'Apoio jurídico em temas fiscais, memoriais, despachos e processos administrativos.', Landmark],
    ['Planejamento Preventivo', 'Diagnóstico jurídico para antecipar riscos, reduzir exposição e proteger decisões.', CheckCircle2],
  ]

  return (
    <section id="atuação" className="section areas-section">
      <div className="container">
        <div className="section-heading grid-heading">
          <div>
            <span className="eyebrow dark">Áreas de atuação</span>
            <h2>Soluções jurídicas com estratégia e precisão.</h2>
          </div>
          <p>Atuação focada em clareza, proteção patrimonial, previsibilidade e tomada de decisão segura.</p>
        </div>
        <div className="areas-grid">
          {areas.map(([title, text, Icon]) => (
            <article className="area-card" key={title}>
              <div className="area-icon"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span>Saiba mais <ChevronRight size={16} /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Office() {
  return (
    <section id="escritório" className="section office-section">
      <div className="container office-grid">
        <div className="office-panel">
          <img src={logoDark} alt="Dias, Campos e Bozzoni Advogados" />
          <p>Um escritório com posicionamento institucional, atendimento reservado e condução técnica de cada caso.</p>
        </div>
        <div className="office-content">
          <span className="eyebrow dark">O escritório</span>
          <h2>Presença, sofisticação e responsabilidade em cada detalhe.</h2>
          <p>
            A atuação do escritório é pautada por escuta qualificada, análise minuciosa dos documentos e construção de soluções alinhadas aos objetivos do cliente.
          </p>
          <div className="office-list">
            <div><CheckCircle2 size={20} /><span>Comunicação clara e acompanhamento próximo.</span></div>
            <div><CheckCircle2 size={20} /><span>Estratégia jurídica construída caso a caso.</span></div>
            <div><CheckCircle2 size={20} /><span>Atuação consultiva e contenciosa.</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const people = [
    { name: 'Dra. Marissol Maria Dias da Silva', role: 'Advogada | OAB/SP 169.955', img: marissol },
    { name: 'Dr. Vitor Bozzoni', role: 'Advogado', img: vitor },
    { name: 'Dra. Rafaela Campos', role: 'Advogada', img: rafaela },
  ]

  return (
    <section id="equipe" className="section team-section">
      <div className="container">
        <div className="section-heading center">
          <span className="eyebrow dark">Equipe</span>
          <h2>Profissionais preparados para conduzir temas relevantes.</h2>
          <p>Equipe com presença institucional, postura técnica e atendimento reservado para cada demanda.</p>
        </div>
        <div className="team-grid">
          {people.map((person) => (
            <article className="team-card" key={person.name}>
              <div className="team-photo"><img src={person.img} alt={person.name} /></div>
              <div className="team-info">
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="container contact-card">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Fale com o escritório</h2>
          <p>Envie sua solicitação e nossa equipe retornará para entender o caso e indicar o melhor encaminhamento.</p>
        </div>
        <div className="contact-info">
          <a href="tel:+5511958790511"><Phone size={18} /> (11) 95879-0511</a>
          <a href="https://diascamposebozzoni.com.br" target="_blank" rel="noreferrer"><Mail size={18} /> diascamposebozzoni.com.br</a>
          <span><MapPin size={18} /> Rua Cristiano Viana, 250, Cerqueira César, São Paulo/SP</span>
          <a className="primary-btn light" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <img src={logoDark} alt="Dias, Campos e Bozzoni Advogados" />
        <p>© {new Date().getFullYear()} Dias, Campos e Bozzoni Advogados. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Areas />
        <Office />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
