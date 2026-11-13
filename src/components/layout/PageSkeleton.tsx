export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-surface-page pt-24" aria-busy="true" aria-live="polite">
      <div className="mx-auto max-w-content space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-40 animate-pulse rounded-md bg-purple-soft" />
        <div className="h-12 w-3/4 max-w-xl animate-pulse rounded-xl bg-border" />
        <div className="h-4 w-full max-w-2xl animate-pulse rounded bg-border/80" />
        <div className="h-4 w-5/6 max-w-xl animate-pulse rounded bg-border/70" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-48 animate-pulse rounded-2xl bg-white shadow-soft" />
          ))}
        </div>
      </div>
    </div>
  )
}
