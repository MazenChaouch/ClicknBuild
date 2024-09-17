import facebook from "@/app/assets/home/footer/facebook.svg";
import youtube from "@/app/assets/home/footer/youtube.svg";
import instagram from "@/app/assets/home/footer/instagram.svg";
import x from "@/app/assets/home/footer/x.svg";
import linkedin from "@/app/assets/home/footer/linkedin.svg";
import pinterest from "@/app/assets/home/footer/pinterest.svg";
import tiktok from "@/app/assets/home/footer/tiktok.svg";
import Image, { StaticImageData } from "next/image";
type FooterSection = {
  title: string;
  items: string[];
};

const footerSections: FooterSection[] = [
  {
    title: "Produit",
    items: [
      "Templates",
      "Créer un site internet",
      "Web design",
      "Fonctionnalités",
      "clickPro",
      "App Market",
      "Hébergement Web",
      "Nom de domaine",
      "Accessibilité du site",
      "Appli mobile",
    ],
  },
  {
    title: "Solutions",
    items: [
      "Boutique en ligne",
      "Réservations en ligne",
      "Sites de restaurant",
      "Créer un blog",
      "Portfolio en ligne",
      "Studio",
      "Entreprise",
      "Sites pour étudiants",
      "E-mail professionnel",
    ],
  },
  {
    title: "Apprendre",
    items: ["Blog", "Confidentialité et sécurité"],
  },
];

const socials: { Icon: StaticImageData; href: string }[] = [
  { Icon: facebook, href: "#" },
  { Icon: youtube, href: "#" },
  { Icon: instagram, href: "#" },
  { Icon: tiktok, href: "#" },
  { Icon: pinterest, href: "#" },
  { Icon: x, href: "#" },
  { Icon: linkedin, href: "#" },
];

const legalLinks = [
  "Ne pas utiliser mes données personnelles",
  "Conditions d'utilisation",
  "Politique de confidentialité",
];

export const Footer = () => {
  return (
    <div className="flex h-fit w-full flex-col border-t">
      <div className="container flex flex-col py-12">
        <div className="flex w-full justify-between">
          <div className="flex w-fit justify-between gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h1 className="text-lg font-bold">{section.title}</h1>
                {section.items.map((item) => (
                  <a key={item} href="#" className="text-sm">
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <p className="w-72">
              La plateforme de création de sites propose une solution complète
              pour gérer votre activité: une infratructure robuste de niveau
              entreprise, des fonctionnalités avancées et des outils marketing
              et SEO pour vous permettre de développer votre présence en ligne.
            </p>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">À propos</h1>
              <h1 className="text-lg font-semibold">Contact</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2">
        <div className="container flex items-center justify-between py-4">
          <div className="flex gap-2">
            {socials.map((social) => (
              <Image
                key={social.href}
                src={social.Icon}
                alt="social"
                className="size-5"
              />
            ))}
          </div>
          <p className="text-sm">Ne pas utiliser mes données personnelles</p>
          <p className="text-sm">Conditions d&apos;utilisation</p>
          <p className="text-sm">Politique de confidentialité</p>
          <p className="w-28 text-sm">© 2024 clickPro.tn, Inc</p>
        </div>
      </div>
    </div>
  );
};
