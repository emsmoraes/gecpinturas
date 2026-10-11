import { useEffect } from 'react'

/** Marca como visibles los elementos con `data-reveal` cuando entran en pantalla. */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-visible', 'true')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    document.querySelectorAll('[data-reveal]:not([data-visible])').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
