export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Welcome to Tortilla Supplier</h1>
      <p style={{ marginTop: '1rem' }}>
        This is a Next.js application with Vercel Web Analytics configured.
      </p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h2>✅ Vercel Analytics is now active</h2>
        <p style={{ marginTop: '0.5rem' }}>
          The Analytics component has been added to the root layout. Once deployed to Vercel,
          analytics will automatically track page views and web vitals.
        </p>
      </div>
    </main>
  );
}
