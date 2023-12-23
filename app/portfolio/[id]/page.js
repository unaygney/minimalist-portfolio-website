import DetailContainer from "@/containers/DetailContainer";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = params;
  const pages = ["manage", "bookmark", "insure", "fylo"];

  const isInclude = pages.find((page) => page === id);

  if (!isInclude) {
    notFound();
  }
  return <DetailContainer id={id} />;
}
