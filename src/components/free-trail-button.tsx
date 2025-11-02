import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FreeTrialButton() {
  return (
    <Button
      size="lg"
      asChild
      className="
      from-primary via-primary/60 to-primary bg-transparent bg-linear-to-r bg-size-[200%_auto] hover:bg-transparent hover:bg-position-[99%_center]"
    >
      <Link href="#">
        <span className="text-nowrap">Start Free Trial</span>
        <ArrowRight className="relative size-4 motion-safe:animate-pulse" />
      </Link>
    </Button>
  );
}
