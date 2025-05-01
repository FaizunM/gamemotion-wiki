import { MainLayout } from "@/components/layouts/main-layout";
import { JSX } from "react";

export default function CharactersLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return <MainLayout>{children}</MainLayout>;
}
