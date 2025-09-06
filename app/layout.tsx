import './globals.css';

export const metadata = {
  title: 'ClearPass - Passport Photo Validator',
  description: 'AI-powered passport and visa photo compliance validation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
