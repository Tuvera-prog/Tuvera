import './globals.css';

export const metadata = {
  title: 'Tuvera',
  description: 'AI-powered learning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

