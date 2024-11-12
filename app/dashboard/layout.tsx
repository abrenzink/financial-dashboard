// LAYOUT FILE

// It is used to define components and reusable layout structure. 
// The layout can include a header, footer, sidebars, 
// or any structure that is shared between multiple pages in the application.

// First, you're importing the <SideNav /> component into your layout.
// Any components you import into this file will be part of the layout.

// The <Layout /> component receives a children prop. This child 
// can either be a page or another layout. In this case, the pages inside 
// /dashboard will automatically be nested inside a <Layout />

import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}