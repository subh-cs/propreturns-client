import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Filter from "@/components/Filter";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start overflow-hidden">
        <Navbar/>
        <Filter/>
        <Hero/>
      </div>
    </>
  );
}
