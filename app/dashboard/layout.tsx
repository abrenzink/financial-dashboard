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

// Next.js will prerender the static parts of your route and defer the dynamic parts until the user requests them.
// The great thing about Partial Prerendering is that you don't need to change your code to use it. 
// As long as you're using Suspense to wrap the dynamic parts of your route, 
// Next.js will know which parts of your route are static and which are dynamic.

export const experimental_ppr = true;
 
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