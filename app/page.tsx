"use client";

import TypewriterComponent from "typewriter-effect";

const DashboardPage = () => {
  return (
    <div className="h-full overflow-auto">
      <div
        className="h-screen 
                      w-full 
                      bg-main-blue-gradient 
                      flex flex-col justify-center items-center 
                      px-6 text-center py-12
                      text-slate-100"
      >
        <main>
          <div className="space-y-6">
            <div className="m-14 px-6 py-6 text-4xl rounded-md shadow-neon glass-mirror md:text-5xl">
              <TypewriterComponent
                options={{
                  strings: [
                    "Coming Soon",
                    "Próximamente",
                    "Bientôt disponible",
                    "Demnächst erhältlich",
                    "Em breve",
                    "近日公開",
                    "곧 출시",
                    "قريباً",
                    "Скоро откроется",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
