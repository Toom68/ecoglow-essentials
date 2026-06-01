export default function ProductsPage() {
  const products = ["bamboo toothbrushes","organic cotton face towels","natural deodorant"];

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Our Products</h1>
      <p style={{ color: "#666", marginBottom: "3rem" }}>Curated eco-friendly personal care products products for environmentally conscious consumers, health enthusiasts, millennials</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
        {products.map((p: string, i: number) => (
          <div key={i} style={{ border: "1px solid #eee", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ background: "var(--primary)", height: "220px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1.1rem", fontWeight: 600, padding: "1rem", textAlign: "center" }}>
              {p}
            </div>
            <div style={{ padding: "1.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{p}</h2>
              <p style={{ color: "#666", fontSize: "0.875rem", marginBottom: "1rem" }}>High quality eco-friendly personal care products product. Loved by environmentally conscious consumers, health enthusiasts, millennials.</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, color: "var(--primary)" }}>$10-$30</span>
                <button style={{ background: "var(--primary)", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: "9999px", border: "none", cursor: "pointer", fontWeight: 600 }}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
