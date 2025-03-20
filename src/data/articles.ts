import type { Article } from "../models/interfaces"
import remoteWorkImage from "../assets/remote-work.png"
import talkImage from "../assets/talk.png"

export const articles: Article[] = [
  {
    id: 1,
    title: "El Maravilloso Equilibrio del Home Office: Trabajo, pasión y tiempo de calidad con mi familia",
    summary: "Importantancia en equilibrar el trabajo con la vida personal y establecer límites para evitar el exceso de burnout.",
    image: remoteWorkImage.src,
    url: "https://medium.com/@laduquesadev/el-maravilloso-equilibrio-del-home-office-trabajo-placer-y-tiempo-de-calidad-con-mi-familia-f0ad05b0d41e",
  },
  {
    id: 2,
    title: "Tips esenciales para hablar en público en el ámbito técnico y preparar una charla efectiva",
    summary: "Tips clave para preparar y dar una charla técnica sin morir en el intento, desde la planificación hasta cómo conectar con la audiencia, usando humor, buenas diapositivas y un cierre que deje huella.",
    image: talkImage.src,
    url: "https://medium.com/@laduquesadev/tips-esenciales-para-hablar-en-p%C3%BAblico-en-el-%C3%A1mbito-t%C3%A9cnico-y-preparar-una-charla-efectiva-3da66ff76e47",
  },
]


// Helper function to get all articles

export function getAllArticles(): Article[] {
  return articles
}


// Helper function to get an article by ID

export function getArticleById(id: number): Article | undefined {
  return articles.find((article) => article.id === id)
}


// Helper function to get an article by slug from the URL

export function getArticleBySlug(slug: string): Article | undefined {
  const urlPath = `/articles/${slug}`
  return articles.find((article) => article.url === urlPath)
}

