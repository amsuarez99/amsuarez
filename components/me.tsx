import ImageTooltip from "@/components/image-tooltip.tsx";
export default function Me() {
  return (
    <section class="h-full">
      <h1>
        Hi, I'm Marcelo Suarez
      </h1>
      <p>
        I'm a 23 y/o Software Engineer and I like to build cool stuff. I'm
        interested in <b>modern web development technologies</b>.
      </p>
      <br />
      <p>
        In 2022 I graduated with my B.S. in Computer Science @{" "}
        <a href="https://tec.mx/es" class="text-green-300">ITESM</a>{" "}
        and I'm currently working as a{" "}
        <b>Frontend Developer</b>. In my spare time I like to dabble a little
        bit in{"  "}
        <ImageTooltip src="/img/grizzly-lol.webp">powerlifting</ImageTooltip>
        {" "}
        and{" "}
        <ImageTooltip src="/img/chicken-legs.webp">calisthenics</ImageTooltip>.
      </p>
    </section>
  );
}
