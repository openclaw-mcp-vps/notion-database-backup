export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Automated Notion Backups
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Lose Your{' '}
          <span className="text-[#58a6ff]">Notion Workspace</span>{' '}Again
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Daily automated backups, full version history, one-click restore, and export to Markdown, HTML, or PDF. Peace of mind for teams and individuals who live in Notion.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Backing Up — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔄</div>
            <h3 className="font-semibold text-white mb-1">Daily Auto-Backups</h3>
            <p className="text-sm text-[#8b949e]">Cron-powered snapshots of your entire workspace every 24 hours, automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⏪</div>
            <h3 className="font-semibold text-white mb-1">One-Click Restore</h3>
            <p className="text-sm text-[#8b949e]">Browse version history and restore any page or database to a previous state instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📦</div>
            <h3 className="font-semibold text-white mb-1">Multi-Format Export</h3>
            <p className="text-sm text-[#8b949e]">Download your data as Markdown, HTML, or PDF whenever you need it.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited workspaces</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 90-day version history</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Daily automated backups</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> One-click restore</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Export to MD, HTML, PDF</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email alerts on failure</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the Notion integration work?</h3>
            <p className="text-sm text-[#8b949e]">You connect your Notion workspace via OAuth. We use the official Notion API to read your pages and databases, then securely store encrypted snapshots on our servers daily.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I restore a specific page without overwriting everything?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Our dashboard lets you browse backups at the page or database level. You can restore individual items without touching the rest of your workspace.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my data secure?</h3>
            <p className="text-sm text-[#8b949e]">All backups are encrypted at rest using AES-256. We never share your data with third parties, and you can delete all stored backups at any time from your dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} NotionBackup. All rights reserved.
      </footer>
    </main>
  )
}
