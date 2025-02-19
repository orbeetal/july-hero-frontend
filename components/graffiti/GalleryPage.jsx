"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import graffiti from "@/database/graffitiList.json";
export default function GraffitiPage() {
  
  console.log(graffiti);
  return (
    <div className="min-h-screen bg-white text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Graffiti Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {graffiti.map((art) => (
          <Link key={art.id} href={`/graffiti/${art.id}`} className="block">
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-brand bg-opacity-50 p-4 text-center">
                <h2 className="text-lg font-semibold">{art.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
