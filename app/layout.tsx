// LAYOUT FILE

// It is used to define components and reusable layout structure. 
// The layout can include a header, footer, sidebars, 
// or any structure that is shared between multiple pages in the application.

import '@/app/ui/global.css';
import { inter, } from '@/app/ui/fonts';

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

