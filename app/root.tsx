import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { TruckIcon } from '@heroicons/react/24/outline'

import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ski Resort Travel",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div id="root">
          <div className='flex flex-col gap-5'>
            <header className='h-16 flex place-content-between items-end bg-purple-light px-5'>
              <NavLink
                to='/'
                >
                <TruckIcon className="h-6 w-6 fill-gray-dark"/>
              </NavLink>
              <svg width="125" height="47" viewBox="0 0 125 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 46L30 23.5M30 23.5L37 35.5V44L53.5 26L58.5 35.5L66.5 23.5L71.5 2M30 23.5L43 28.5L53.5 18.5H58.5L71.5 2M71.5 2L88.5 27L79 35.5L98 18.5M98 18.5L93 35.5L71.5 44M98 18.5L124 46" stroke="black" stroke-width="2"/>
                <path d="M1 46L30 23.5M30 23.5L37 35.5V44L53.5 26L58.5 35.5L66.5 23.5L71.5 2M30 23.5L43 28.5L53.5 18.5H58.5L71.5 2M71.5 2L88.5 27L79 35.5L98 18.5M98 18.5L93 35.5L71.5 44M98 18.5L124 46" stroke="black" stroke-opacity="0.2" stroke-width="2"/>
                <path d="M1 46L30 23.5M30 23.5L37 35.5V44L53.5 26L58.5 35.5L66.5 23.5L71.5 2M30 23.5L43 28.5L53.5 18.5H58.5L71.5 2M71.5 2L88.5 27L79 35.5L98 18.5M98 18.5L93 35.5L71.5 44M98 18.5L124 46" stroke="black" stroke-opacity="0.2" stroke-width="2"/>
              </svg>

            </header>
            <div className="w-full flex place-content-start">
              <div className="w-fit flex gap-5 py-2 px-10 bg-purple-light">
                <NavLink 
                  to="ikon"
                  className={({ isActive }: { isActive: boolean}) => 
                  isActive ? 'border-b-2 border-blue text-blue py-1' : 'text-blue py-1'
                }
                >
                  IKON
                </NavLink>
                <NavLink 
                  to="epic"
                  className={({ isActive }: { isActive: boolean}) => 
                  isActive ? 'border-b-2 border-blue text-blue py-1' : 'text-blue py-1'
                }
                >
                  EPIC
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
