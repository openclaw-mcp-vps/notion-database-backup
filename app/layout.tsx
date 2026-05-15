import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NotionBackup — Automated Notion Workspace Backups',
  description: 'Daily automated backups of your Notion workspace. Version history, one-click restore, and export to multiple formats. Never lose your work again.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1a843f88-b085-46f1-9303-e1fa36b17748"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
