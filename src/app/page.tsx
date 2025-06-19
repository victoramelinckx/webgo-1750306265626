
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Digitales en 24 Horas." subheadline="Transforma tu negocio con nuestra web rápida y soporte 24/7, sin complicaciones." cta1="Digitaliza Ahora" />
<How step1Title="Compra el paquete" step1Desc="Adquiere Asda por solo 1234." step2Title="Configura tu web" step2Desc="Nosotros la creamos en 24 horas." step3Title="Empieza a vender" step3Desc="Lanza ventas online sin preocupaciones." />
<Aboutus headline="WebGo: Impulsa tus ventas online" subheadline="WebGo digitaliza tus ventas sin complicaciones, ahorrando tiempo y aumentando tus ingresos." beneficiotitulo1="Gestión Sencilla" beneficio1="WebGo maneja todo por ti." beneficiotitulo2="Resultados Rápidos" beneficio2="Aumenta tus ventas en semanas." />
<Services heading="Transforma Recomendaciones en Ventas Digitales" description="asda (Precio: 1234) - asasda crea tu tienda online en 24 horas." services={[{"name":"Diseño Rápido","icon":"rocket","description":"Webs listas para vender en 24h."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu web."},{"name":"SEO Optimizado","icon":"chart-line","description":"Aumenta visibilidad y tráfico online."},{"name":"Integración eCommerce","icon":"shopping-cart","description":"Venta directa desde tu nuevo sitio."},{"name":"Gestión de Contenido","icon":"edit","description":"Actualiza tu web sin complicaciones."},{"name":"Analíticas Avanzadas","icon":"analytics","description":"Conoce tus clientes y mejora ventas."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en experiencias digitales asombrosas." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo ofrece servicios que facilitan la venta online, desde crear un sitio web atractivo hasta implementar herramientas de e-commerce. Esto te permitirá llegar a más clientes y no depender solo de recomendaciones."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo?","respuesta":"Con WebGo, obtienes un sitio web diseñado para convertir visitantes en clientes. Además, te liberamos del tiempo que lleva gestionar un sitio web, para que puedas enfocarte en otras áreas de tu negocio."},{"pregunta":"¿Cuánto cuesta el servicio de digitalización de ventas de WebGo?","respuesta":"Nuestro servicio de digitalización de ventas tiene un precio accesible de 1234, diseñado para adaptarse a las necesidades de tu negocio sin comprometer la calidad."},{"pregunta":"No sé cómo generar ventas online, ¿WebGo me puede ayudar con eso?","respuesta":"Sí, WebGo te guía paso a paso para generar ventas online. Desde la creación de una tienda online hasta estrategias de marketing digital, estamos aquí para asegurarnos de que tengas éxito."},{"pregunta":"¿Qué pasa si no tengo tiempo para gestionar un sitio web?","respuesta":"No te preocupes, en WebGo nos encargamos de todo. Desde el diseño hasta el mantenimiento, nuestro equipo gestiona tu sitio web para que puedas centrarte en tu negocio sin estrés."}]} />
<BookAppointment 
                      heading="Digitaliza tu Negocio en Santiago" 
                      description="Transforma recomendaciones en ventas online con WebGo. Ahorra tiempo y aumenta tus ingresos fácilmente. Precio: 1234 - Contáctanos hoy."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
