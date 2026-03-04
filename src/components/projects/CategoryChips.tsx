import { ProjectCategory } from "@/src/data/projects"

type Category = "Todos" | ProjectCategory

type CategoryChipsProps = {
  categories: Category[]
  selected: Category
  onSelect: (category: Category) => void
}

export function CategoryChips({ categories, selected, onSelect }: CategoryChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {categories.map((category) => {
        const isActive = selected === category
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`rounded-full border px-4 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viridian/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              isActive
                ? "border-viridian/60 bg-viridian/10 text-viridian shadow-[0_8px_30px_rgba(78,218,158,0.15)]"
                : "border-border bg-card text-muted-foreground hover:border-viridian/30 hover:text-foreground"
            }`}
            aria-pressed={isActive}
            aria-label={`Filtrar por ${category}`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
