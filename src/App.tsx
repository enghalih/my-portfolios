import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Layout, { type Page } from "./Layout";
import HomePage from "./pages/HomePage";
import PortfoliosPage from "./pages/PortfoliosPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const pageOrder: Page[] = ["home", "portofolios", "about", "contact"];

const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),

  center: {
    x: "0%",
    opacity: 1,
  },

  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

function App() {
  const [activePage, setActivePage] = useState<Page>("home");
  const [direction, setDirection] = useState(1);

  function navigateToPage(nextPage: Page) {
    if (nextPage === activePage) return;

    const currentIndex = pageOrder.indexOf(activePage);
    const nextIndex = pageOrder.indexOf(nextPage);

    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActivePage(nextPage);
  }

  function renderPage() {
    switch (activePage) {
      case "home":
        return <HomePage />;

      case "portofolios":
        return <PortfoliosPage />;

      case "about":
        return <AboutPage />;

      case "contact":
        return <ContactPage />;
    }
  }

  return (
    <div className="min-h-screen p-6 flex flex-col gap-8 overflow-x-clip">
      <main className="grid w-full max-w-7xl flex-1 my-auto mx-auto pb-19 md:pt-19 md:pb-0">
        <AnimatePresence mode="sync" initial={false} custom={direction}>
          <motion.div
            key={activePage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="col-start-1 row-start-1 w-full min-w-0"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Layout
        activePage={activePage}
        setActivePage={navigateToPage}
        className="fixed inset-x-6 inset-be-6 md:inset-bs-6 md:inset-be-auto"
      />
    </div>
  );
}

export default App;
