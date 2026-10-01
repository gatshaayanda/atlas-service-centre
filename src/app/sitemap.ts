import type {MetadataRoute} from "next";
const baseUrl=process.env.NEXT_PUBLIC_BASE_URL||"https://atlas-service-centre.vercel.app";
export default function sitemap():MetadataRoute.Sitemap(){return[{url:baseUrl,changeFrequency:"weekly",priority:1},{url:baseUrl+"/book",changeFrequency:"weekly",priority:.95},{url:baseUrl+"/account",changeFrequency:"weekly",priority:.5}];}
