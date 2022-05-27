import React from "react";
import { Navigation } from "./Navigation";

export function Layout({children}) {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                {children}
            </main>
            <footer>&copy; {new Date().getFullYear()} Alexander Mamrovskii</footer>
        </>
    )
}
