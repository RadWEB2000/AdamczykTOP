import { About, Blog, CaseStudies, Faq, Hero, Manifest, Services, Testimonials } from "@/views/home-view";

export default function HomePage(){
  return (
    <div>
      <Hero/>
      <main
        className="pt-20 pb-40"
      >
        <Manifest/>
        <CaseStudies/>
        <Services/>
        <About/>
        <Testimonials/>
        <Faq/>
        <Blog/>
      </main>
    </div>
  )
}