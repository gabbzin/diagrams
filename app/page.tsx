"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dock, DockIcon } from "@/components/ui/dock";
import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";

const diagramas = [
  "Diagrama de Sequência",
  "Diagrama BPMN",
  "Diagrama de Casos de Uso",
  "Business Model Canvas",
];

// Componente principal
export default function DiagramViewer() {
  const [selected, setSelected] = useState<{
    id: number;
    title: string;
    img: string;
  } | null>(null);

  const diagrams = Array.from({ length: diagramas.length }).map((_, i) => ({
    id: i + 1,
    title: diagramas[i],
    img: `/diagrama${i + 1}.png`,
  }));

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-linear-to-b from-[#0c1a2c] to-[#15223c] text-white">
      <Image
        src={"/logo.png"}
        alt={""}
        className="h-[300px] w-[400px] object-cover rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-50"
        width={400}
        height={300}
      />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8">
        Visualizador de Diagramas Oportune +
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {diagrams.map((d) => (
          <Card
            key={d.id}
            className="cursor-pointer hover:scale-105 transition-transform duration-200 oportune-card border border-white/10"
            onClick={() => setSelected(d)}
          >
            <CardContent className="p-0">
              <Image
                src={d.img}
                alt={d.title}
                className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover rounded-t-lg"
                width={400}
                height={200}
              />
              <div className="p-3 md:p-4">
                <h2 className="text-lg md:text-xl font-semibold truncate text-white text-center">
                  {d.title}
                </h2>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex justify-center items-center p-2 sm:p-4 md:p-6 z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-black p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl max-w-7xl w-full shadow-xl relative border border-white/20 my-auto max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              className="sticky top-2 sm:top-3 right-2 sm:right-3 ml-auto mb-2 sm:mb-3 bg-red-600 text-white hover:bg-red-700 z-10 text-xs sm:text-sm flex cursor-pointer"
              onClick={() => setSelected(null)}
            >
              ✕ Fechar
            </Button>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center px-2">
                {selected.title}
              </h2>
              <div className="relative w-full">
                <Image
                  src={selected.img}
                  alt={selected.title}
                  className="w-full h-auto rounded-lg md:rounded-xl"
                  width={1200}
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <Dock
        direction="bottom"
        className="fixed bottom-4 left-1/2 -translate-x-1/2"
      >
        {/* <DockIcon> */}
          {/* <Link
            href={"https://www.linkedin.com/in/gabriel-pimentel-zxn111/"}
            target="_blank"
          >
            <Linkedin />
          </Link>
        </DockIcon> */}
        <DockIcon>
          <Link href={"https://github.com/PedrFelip/oportune"} target="_blank">
            <GithubIcon />
          </Link>
        </DockIcon>
        {/* <DockIcon>
          <Link href={"https://www.linkedin.com/in/pedrfelip/"} target="_blank">
            <Linkedin />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link
            href={"https://www.linkedin.com/in/eliandro-fideles/"}
            target="_blank"
          >
            <Linkedin />
          </Link>
        </DockIcon> */}
      </Dock>
    </div>
  );
}
