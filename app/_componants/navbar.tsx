import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/currentUser";
import { LogoutButton } from "./auth/logout-button";

const solutions: { title: string; href: string; description: string }[] = [
  {
    title: "Éco-Signalements en Action",
    href: "/",
    description:
      "Visualisez les progrès des signalements pour une ville urbaine plus écologique et saine.",
  },
  {
    title: "Ville Propre, Signalez!",
    href: "/",
    description:
      "Participez à notre initiative de signalement pour une ville plus propre et durable.",
  },
  {
    title: "Classement des Éco-Champions",
    href: "/",
    description:
      "Découvrez où vous vous situez dans notre classement et devenez un leader écologique!",
  },
];
const resources: { title: string; href: string; description: string }[] = [
  {
    title: "Les Postes Écologiques",
    href: "/",
    description:
      "Partagez, Échangez, Contribuez! Découvrez les contributions écologiques de tous les utilisateurs.",
  },
  {
    title: "Partagez pour Prospérer",
    href: "/",
    description:
      "Remplissez le formulaire et partagez vos objets pour encourager l'échange écologique.",
  },
  {
    title: "Mon Éco-Inventaire",
    href: "/",
    description:
      "Gérez vos objets postés pour l'échange et suivez leur statut écologique.",
  },
];
const home: { title: string; href: string; description: string }[] = [
  {
    title: "Qui sommes-nous?",
    href: "/",
    description:
      "Découvrez notre mission, notre vision et notre équipe pour un monde plus vert.",
  },
  {
    title: "Nous Contacter",
    href: "/",
    description:
      "Contactez-nous pour toute question, suggestion ou collaboration.",
  },
];

export const Navbar = async () => {
  const session = await currentUser();
  return (
    <div className="flex h-full w-full shadow-md">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="mr-6 flex items-center justify-start">
            <Image src={logo} alt="logo" className="size-12 flex-none" />
          </Link>
          <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
            <NavigationMenuList className="flex w-full items-center justify-between py-3">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 bg-white p-4 text-black">
                    {home.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="hover:bg-[#6215dd51] hover:text-white"
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
            <NavigationMenuList className="flex w-full items-center justify-between py-3">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 bg-white p-4 text-black">
                    {solutions.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="hover:bg-[#6215dd51] hover:text-white"
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
            <NavigationMenuList className="flex w-full items-center justify-between py-3">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 bg-white p-4 text-black">
                    {resources.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="hover:bg-[#6215dd51] hover:text-white"
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
            <NavigationMenuList className="flex w-full items-center justify-between py-3">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 bg-white p-4 text-black">
                    {resources.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="hover:bg-[#6215dd51] hover:text-white"
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
            <NavigationMenuList className="flex w-full items-center justify-between py-3">
              <NavigationMenuItem>
                <Link href="/templates" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Templates
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
            <NavigationMenuList className="flex w-full items-center justify-between py-3">
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
            <NavigationMenuList className="flex w-full items-center justify-between py-3">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {session ? (
          <div className="flex gap-2">
            <Link href="/dashboard">
              <Button className="rounded-full px-8" variant={"outline"}>
                Go to Dashboard
              </Button>
            </Link>
            <LogoutButton>
              <Button className="rounded-full bg-[#166AEA] px-8 text-white hover:bg-[#166bead6]">
                Sign Out
              </Button>
            </LogoutButton>
          </div>
        ) : (
          <Link href="/sign-in">
            <Button className="rounded-full bg-[#166AEA] px-12 text-white hover:bg-[#166bead6]">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
