import type {Metadata,Viewport} from "next";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import PwaRegister from "@/app/pwa-register";
import "./globals.css";
import "./pwa.css";
const siteUrl=process.env.NEXT_PUBLIC_BASE_URL||"https://atlas-service-centre.vercel.app";
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"Atlas Service Centre",template:"%s | Atlas Service Centre"},description:"Heavy & light duty mechanical and auto-electrical specialists in Gaborone.",applicationName:"Atlas Service Centre",keywords:["Atlas Service Centre","heavy duty workshop","auto electrical","Gaborone","Botswana","fleet maintenance","towing"],alternates:{canonical:"/"},openGraph:{type:"website",url:siteUrl,siteName:"Atlas Service Centre",title:"Atlas Service Centre",description:"Your Auto Mechanical & Electrical Specialists."},twitter:{card:"summary",title:"Atlas Service Centre",description:"Heavy & light duty mechanical and auto-electrical specialists."},icons:{icon:"/icon.svg",apple:"/icon.svg"},manifest:"/manifest.webmanifest",appleWebApp:{capable:true,title:"Atlas Service Centre",statusBarStyle:"black-translucent"}};
export const viewport:Viewport={themeColor:"#00873D",colorScheme:"light"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-BW"><body><PwaRegister/>{children}<Analytics/><SpeedInsights/></body></html>}
