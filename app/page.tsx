export default function HomePage() {
  const products = ["bamboo toothbrushes","organic cotton face towels","natural deodorant"];

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--primary)", color: "#fff", padding: "6rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, marginBottom: "1rem" }}>
          Transform Your Care, Naturally
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2rem", opacity: 0.9 }}>
          Discover eco-friendly essentials for a greener lifestyle.
        </p>
        <a
          href="/products"
          style={{ background: "#fff", color: "var(--primary)", padding: "0.9rem 2.5rem", borderRadius: "9999px", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}
        >
          Shop Now
        </a>
      </section>

      {/* Features */}
      <section style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: "3rem" }}>Why EcoGlow Essentials?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {["Premium Quality", "Fast Shipping", "100% Satisfaction Guarantee"].map((f) => (
            <div key={f} style={{ padding: "2rem", border: "1px solid #eee", borderRadius: "12px", textAlign: "center" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{f}</h3>
              <p style={{ color: "#666" }}>We stand behind every product we sell, made for environmentally conscious consumers, health enthusiasts, millennials.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: "4rem 2rem", background: "#f9f9f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: "3rem" }}>Featured Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {products.map((p: string, i: number) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #eee", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ background: "var(--primary)", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1.1rem", fontWeight: 600, padding: "1rem", textAlign: "center" }}>
                  {p}
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p}</h3>
                  <p style={{ color: "#666", marginBottom: "1rem", fontSize: "0.9rem" }}>Perfect for environmentally conscious consumers, health enthusiasts, millennials</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: "var(--primary)" }}>$10</span>
                    <a href="/products" style={{ background: "var(--primary)", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: "9999px", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>View</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
