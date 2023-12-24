import React from "react";
import SocialLinks from "./social-links.svg";
function Content() {
  return (
    <section>
      <div className="flex flex-col gap-6 border-y border-[#33323D] border-opacity-15 py-8 my-8 lg:flex-row lg:gap-[125px]">
        <div className="lg:w-[350px]">
          <h2 className="heading-m ">Get in Touch</h2>
        </div>
        <div className="lg:flex-1 lg:max-w-[650px] flex flex-col gap-6">
          <p className="body-text-2">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

export default Content;
