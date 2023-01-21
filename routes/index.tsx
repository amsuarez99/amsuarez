import MainLayout from "@/components/layout.tsx";
import Me from "@/components/me.tsx";
// import Education from "@/components/education.tsx";
// import Experience from "@/components/experience.tsx";
// import Contact from "@/components/contact.tsx";
// import Footer from "@/components/footer.tsx";

export default function Home() {
  return (
    <>
      <MainLayout active="/">
        <Me />
        {
          /* <Education />
        <Experience />
        <Contact />
        <Footer /> */
        }
      </MainLayout>
    </>
  );
}
