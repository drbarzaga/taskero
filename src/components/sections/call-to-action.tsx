import FreeTrailButton from "../free-trail-button";

export default function CallToActionSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Ready to transform your workflow?
          </h2>
          <p className="mt-4">
            Start your free trial today and experience the power of Taskero.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <FreeTrailButton />
          </div>
        </div>
      </div>
    </section>
  );
}
