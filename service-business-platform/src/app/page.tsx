import PageRenderer from "@/lib/PageRenderer";
import { home } from "@/config/pages";

export default function Home() {
  return (
    <>
      <PageRenderer page={home} />
    </>
  );
}