"use client";

import { Button } from "./button";
import { Card } from "./card";
import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  HomeIcon,
  PercentIcon,
  ListOrderedIcon,
  LogOutIcon,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback } from "./avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "./separator";
import Link from "next/link";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="my-4 flex items-center gap-2 py-2">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{data?.user?.name}</p>
                  <p className="text-sm opacity-80">
                    Boas compras<span className="text-primary">!</span>
                  </p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size="18" />
              Início
            </Button>

            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size="18" />
                Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size="18" />
                Sair
              </Button>
            )}

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size="18" />
              Ofertas
            </Button>

            <SheetClose asChild>
              <Link href={`/catalog`}>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size="18" />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href={"/"}>
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Next</span> Store
        </h1>
      </Link>
      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
