import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function useGSAP() {
  useEffect(() => {
    gsap.utils.toArray("section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.6, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      )
    })
  }, [])
}