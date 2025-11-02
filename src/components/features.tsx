import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartColumn,
  CrownIcon,
  FileText,
  FolderKanban,
  ListCheck,
  MessageCircle,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { ReactNode } from "react";

export default function FeaturesSection() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Everything in one place
          </h2>
          <p className="mt-4">
            From planning to delivery, manage every aspect of your projects
            seamlessly
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <FolderKanban className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Project Management</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                From design elements to functionality, you have complete control
                to create a unique and personalized experience.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ListCheck className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Tasks & Milestones</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Track every detail with tasks, subtasks, and milestones. Never
                miss a deadline with smart notifications.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Users className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Team Collaboration</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Share tasks, files, and updates with your team. Stay connected
                and aligned with real-time notifications.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ChartColumn className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Progress Tracking</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                See your progress at a glance with clear visualizations. Stay on
                top of deadlines and adjust your plans as needed.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ShieldCheck className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Secure & Reliable</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Your sensitive data stays safe and encrypted, with automatic
                backups and round-the-clock reliability you can trust.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <CrownIcon className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Unlimited Projects</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Our free plan includes 1 project, but you can upgrade to a
                premium plan for unlimited projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
