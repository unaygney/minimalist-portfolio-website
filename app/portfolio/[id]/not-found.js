import React from "react";
import NotFound from "@/assets/images/icons/notfound.svg";
import Link from "next/link";
function notFound() {
  return (
    <main className="flex items-center justify-center  py-10  px-12 ">
      <section className="flex flex-col">
        <p className="body-text-1">
          {" "}
          It looks like you tried to access a page that doesn't exist.
        </p>
        <NotFound />
        <Link className="text-center mt-10 underline " href={"/"}>
          Go Homepage
        </Link>
      </section>
    </main>
  );
}

export default notFound;
