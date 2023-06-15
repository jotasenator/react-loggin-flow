import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Vaca } from "./Vaca";
import { Chivo } from "./Chivo";
import { Carnero } from "./Carnero";
import { Navbar } from "../components/Navbar";
import { Guia } from "./Guia";
import { TitleH2 } from "../components/TitleH2";

export const Corral = () => {
  return (
    <>
      <Navbar />
      <TitleH2 text={"Aquí están los animales del corral"} />

      <Routes>
        <Route path="/" element={<Guia />} />
        <Route path="/carnero" element={<Carnero />} />
        <Route path="/chivo" element={<Chivo />} />
        <Route path="/vaca" element={<Vaca />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
