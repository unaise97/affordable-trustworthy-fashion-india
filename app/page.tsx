"use client";
import { FormEvent, useState } from "react";
type Item = { id: string; url: string; addedAt: string };
const principles = [
  { n: "01", title: "Evidence before claims", detail: "Record the source and date for price, fabric, sizing and review information." },
  { n: "02", title: "Honest about unknowns", detail: "If fit, durability or quality cannot be verified, say so clearly." },
  { n: "03", title: "Affiliate links stay transparent", detail: "Disclose commercial relationships. Commission never replaces trust." }
];
export default function Home() {
  const [url, setUrl] = useState(""); const [error, setError] = useState(""); const [queue, setQueue] = useState<Item[]>([]);
  function addProduct(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError("");
    try {
      const parsed = new URL(url.trim());
      if (!["http:", "https:"].includes(parsed.protocol) || !parsed.hostname.includes(".")) throw new Error("Invalid URL");
      setQueue(items => [{ id: `${Date.now()}-${Math.random()}`, url: parsed.toString(), addedAt: new Date().toLocaleString() }, ...items]); setUrl("");
    } catch { setError("Enter a valid product page URL beginning with https://"); }
  }
  return <main className="app-shell">
    <aside className="sidebar">
      <a className="brand" href="#overview"><span className="brand-mark">A<span>+</span></span><span className="brand-copy"><strong>ATF India</strong><small>Fashion research studio</small></span></a>
      <div className="nav-label">WORKSPACE</div><nav className="navigation" aria-label="Main navigation">
        <a className="nav-item active" href="#overview"><span>◫</span> Overview</a><a className="nav-item" href="#research"><span>⌕</span> Product research <b>{queue.length}</b></a><a className="nav-item" href="#trust"><span>◇</span> Trust rules</a><span className="nav-item muted"><span>▤</span> Content planner <i>Later</i></span><span className="nav-item muted"><span>↗</span> Performance <i>Later</i></span>
      </nav><div className="sidebar-bottom"><span className="status-dot"/><div><strong>Prototype mode</strong><small>Queue is not yet saved to a database</small></div></div>
    </aside>
    <section className="main-panel"><header className="topbar"><div className="breadcrumb">Workspace <span>/</span> Overview</div><div className="topbar-right"><span className="tiny-dot"/> INDIA MARKET <span className="avatar">A</span></div></header>
      <div className="content"><section id="overview" className="welcome"><div><p className="eyebrow">YOUR FASHION DISCOVERY WORKSPACE</p><h1>Find the good stuff.<br/><em>Be honest about it.</em></h1><p className="welcome-copy">Research affordable fashion for women in India, then publish only what the evidence supports.</p></div><div className="welcome-stamp"><span>₹</span><strong>₹800</strong><small>initial price focus</small></div></section>
        <section className="metric-grid"><article className="metric-card"><div className="metric-label">PRODUCTS IN QUEUE <span>↗</span></div><div className="metric-value">{String(queue.length).padStart(2,"0")}</div><p>Added for research</p></article><article className="metric-card"><div className="metric-label">VERIFIED PRODUCTS <span>◇</span></div><div className="metric-value">00</div><p>No claims made yet</p></article><article className="metric-card"><div className="metric-label">PUBLISHED CONTENT <span>↗</span></div><div className="metric-value">00</div><p>Human review comes first</p></article></section>
        <section id="research" className="research-section"><div className="section-heading"><div><p className="eyebrow">STEP 01 · PRODUCT DISCOVERY</p><h2>Start with a product link</h2></div><span className="section-tag">MANUAL INTAKE</span></div><p className="section-description">Add a product page from a retailer you want to evaluate. This starter records the URL only; it does not scrape pages or verify price and reviews automatically.</p>
          <form className="url-form" onSubmit={addProduct}><label className="sr-only" htmlFor="product-url">Product page URL</label><span className="link-icon">↗</span><input id="product-url" type="url" placeholder="Paste a product URL (https://...)" value={url} onChange={e=>setUrl(e.target.value)}/><button type="submit">Add to research <span>＋</span></button></form>{error && <p className="form-error" role="alert">{error}</p>}
          <div className="queue-header"><h3>Research queue</h3><span>{queue.length} {queue.length===1?"item":"items"}</span></div>
          {queue.length===0 ? <div className="empty-state"><div className="empty-icon">⌕</div><strong>Your research queue is empty</strong><p>Add a product link above to begin. Every product starts as unverified.</p></div> : <div className="queue-list">{queue.map(item=><article className="queue-item" key={item.id}><div className="queue-item-icon">↗</div><div className="queue-item-main"><a href={item.url} target="_blank" rel="noreferrer">{new URL(item.url).hostname}</a><p>{item.url}</p><small>Added {item.addedAt}</small></div><span className="pending-pill"><span/>Needs review</span><button className="remove-button" type="button" aria-label="Remove product" onClick={()=>setQueue(items=>items.filter(x=>x.id!==item.id))}>×</button></article>)}</div>}
        </section>
        <section id="trust" className="trust-section"><div className="section-heading"><div><p className="eyebrow">NON-NEGOTIABLES</p><h2>Trust is the product</h2></div><span className="shield">◇</span></div><div className="principle-grid">{principles.map(p=><article className="principle-card" key={p.n}><span className="principle-number">{p.n}</span><h3>{p.title}</h3><p>{p.detail}</p></article>)}</div></section>
        <section className="next-step"><div className="next-icon">✳</div><div><strong>Next milestone: evidence-backed product records</strong><p>Capture price, source, checked date, fabric, sizing notes, return policy, review evidence and affiliate status.</p></div><span className="milestone">UP NEXT</span></section><footer><span>ATF INDIA · EARLY BUILD</span><span>Made for clarity, not hype.</span></footer>
      </div>
    </section>
  </main>;
}
