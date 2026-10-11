'use client'

import { useMemo, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Heart, Menu, Search, ShoppingCart, UserRound, X } from 'lucide-react'

const categories = ['Antiviry', 'Office', 'Windows', 'Hry', 'Dárkové karty', 'VPN a bezpečnost', 'Grafika a video', 'Optimalizace a ladění', 'Operační systémy', 'Kancelářské aplikace', 'Příslušenství']

const products = [
  { name: 'Microsoft Office 2024 Professional Plus', price: '1 159 Kč', tag: 'TOP', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80' },
  { name: 'Microsoft Xbox Game Pass Ultimate 1 měsíc', price: '409 Kč', tag: 'AKCE', image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=500&q=80' },
  { name: 'Microsoft 365 pro rodiny', price: '2 489 Kč', tag: 'NOVINKA', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80' },
  { name: 'Microsoft 365 pro jednotlivce', price: '1 859 Kč', tag: 'AKCE', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80' },
  { name: 'Microsoft Office 2024 pro domácnost', price: '2 749 Kč', tag: 'TOP', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80' },
  { name: 'Microsoft 365 pro rodiny', price: '2 489 Kč', tag: 'AKCE', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80' },
  { name: 'Bitdefender Antivirus Plus 1 PC / 1 rok', price: '295 Kč', tag: 'AKCE', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&q=80' },
  { name: 'Bitdefender Family Pack, 1 rok', price: '1 059 Kč', tag: 'AKCE', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80' },
  { name: 'Bitdefender Internet Security 1 PC na 1 rok', price: '439 Kč', tag: 'TOP', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80' },
  { name: 'Xbox Live Gold 3 měsíce', price: '495 Kč', tag: 'AKCE', image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=500&q=80' },
  { name: 'Microsoft Xbox Game Pass Ultimate 3 měsíce', price: '1 159 Kč', tag: 'AKCE', image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=500&q=80' },
  { name: 'Xbox Live Gold 6 měsíců', price: '874 Kč', tag: 'TOP', image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=500&q=80' },
]

const sections = [
  ['Vybrali jsme pro Vás', products.slice(0, 3)],
  ['Kancelářské balíčky za přijatelné ceny', products.slice(3, 6)],
  ['Antiviry Bitdefender', products.slice(6, 9)],
  ['Herní kupóny', products.slice(9, 12)],
  ['Novinky', products.slice(2, 5)],
  ['Roblox herní měna - Robux', products.slice(9, 12)],
]

function ProductCard({ product, onAdd }: { product: (typeof products)[number]; onAdd: () => void }) {
  return (
    <article className="product-card">
      <div className="product-top"><span className="pill">{product.tag}</span><span className="stock">SKLADEM</span></div>
      <div className="product-image-wrap"><img src={product.image} alt="" className="product-image" /></div>
      <h3>{product.name}</h3>
      <div className="product-bottom"><strong>{product.price}</strong><span className="delivery">Elektronická licence<br />ihned do e-mailu</span></div>
      <button className="buy-button" onClick={onAdd}>Do košíku <ShoppingCart size={14} /></button>
    </article>
  )
}

export default function Page() {
  const [cart, setCart] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('')
  const visibleSections = useMemo(() => sections.map(([title, items]) => [title, (items as typeof products).filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))] as const).filter(([, items]) => items.length), [query])

  return (
    <div className="site-shell">
      <div className="utility-bar"><div className="container utility-inner"><span>Akční nabídky</span><span>Jak nakupovat</span><span>Reklamace</span><span>Obchodní podmínky</span><span>Ochrana osobních údajů</span><span className="utility-right">Technická podpora 7 dní v týdnu · +420 515 555 696 · info@esoftis.cz</span></div></div>
      <header className="header"><div className="container header-inner"><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"><Menu /></button><div className="logo">e<span>Softis</span><i>.cz</i></div><label className="search"><span className="sr-only">Hledat produkt</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Hledat" /><Search size={16} /></label><div className="header-actions"><button><UserRound size={16} /> Přihlášení <ChevronDown size={12} /></button><button onClick={() => alert(`V košíku máte ${cart} položek`)}><ShoppingCart size={16} /> Košík ({cart}) <ChevronDown size={12} /></button></div></div></header>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}><div className="container nav-inner">{['Antiviry', 'Operační systémy', 'Kancelářské aplikace', 'Grafické aplikace', 'Optimalizace a ladění', 'Práce se soubory'].map((item) => <button key={item}>{item} <ChevronDown size={12} /></button>)}<button className="more">Více <ChevronDown size={12} /></button></div></nav>

      <main className="container layout">
        <aside className={`sidebar ${menuOpen ? 'show' : ''}`}><div className="side-title"><Menu size={14} /> Kategorie <button onClick={() => setMenuOpen(false)} aria-label="Zavřít menu"><X size={15} /></button></div><div className="category-list">{categories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}><span>›</span>{category}</button>)}</div><div className="top-products"><h4>TOP 10 PRODUKTŮ</h4>{['Microsoft Office 2024', 'Microsoft 365 pro rodiny', 'Xbox Game Pass Ultimate', 'Bitdefender Internet Security', 'Microsoft Windows 11'].map((item, i) => <div className="rank" key={item}><b>{i + 1}</b><span>{item}</span><strong>{[1159, 2489, 409, 439, 299][i]} Kč</strong></div>)}</div><div className="login-box"><h4>PŘIHLÁŠENÍ</h4><input placeholder="E-mail" /><input placeholder="Heslo" type="password" /><button>Přihlásit</button><button className="secondary">Nová registrace</button><a>Zapomněli jste heslo?</a></div><div className="help-box"><strong>Máte dotaz?</strong><span>Obraťte se na nás,<br />rádi Vám pomůžeme.</span><small>✉ info@esoftis.cz</small><small>☎ +420 515 555 696</small><button>Kontaktovat eshop</button></div></aside>
        <div className="content"><section className="hero"><button className="hero-arrow left" aria-label="Předchozí"><ChevronLeft /></button><div><span>PREMIUM SOFTWARE</span><h1>Vybavte se<br /><b>pro každý den</b></h1><p>Software, který vám ušetří čas i peníze.</p><button className="hero-cta">Prohlédnout nabídku</button></div><div className="hero-art"><div className="art-card one">365</div><div className="art-card two">OFFICE</div><div className="art-card three">PRO</div></div><button className="hero-arrow right" aria-label="Další"><ChevronRight /></button><div className="dots"><i></i><i className="selected"></i><i></i><i></i></div></section>
          {visibleSections.map(([title, items]) => <section className="product-section" key={title}><h2>{title}</h2><div className="product-grid">{items.map((product) => <ProductCard key={product.name} product={product} onAdd={() => setCart((count) => count + 1)} />)}</div></section>)}
          <section className="faq"><h2>Často kladené otázky</h2><div className="faq-tabs"><button className="selected">Aktivace</button><button>Obchod</button><button>Platba</button></div><details open><summary>Jak uplatnit licenční klíč?</summary><p>Po zaplacení vám doručíme licenční klíč a jednoduchý návod k aktivaci na e-mail.</p></details></section>
        </div>
      </main>
      <footer><div className="container footer-grid"><div><div className="logo footer-logo">e<span>Softis</span><i>.cz</i></div><p>Váš ověřený prodejce<br />digitálních licencí.</p></div><div><h4>Ověřeno zákazníky</h4><p className="rating">★★★★★</p><p>98 % doporučuje náš e-shop</p></div><div><h4>Informace pro vás</h4><a>Jak nakupovat</a><a>Obchodní podmínky</a><a>Reklamace</a><a>Ochrana osobních údajů</a></div><div><h4>Kontakt</h4><a>✉ info@esoftis.cz</a><a>☎ +420 515 555 696</a><button>Kontaktní formulář</button></div></div><div className="footer-bottom"><div className="container">© 2026 eSoftis.cz · Všechna práva vyhrazena <span>Vytvořeno s péčí o zákazníky</span></div></div></footer>
    </div>
  )
}
