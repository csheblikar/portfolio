export function formatDateISO(date: string) {
  return new Date(date).toISOString();
}

export function formatDate(date: string, format: "MMM yyyy" | "yyyy") {
  return new Date(date).toLocaleDateString("en-US", {
    year: format.includes("yyyy") ? "numeric" : undefined,
    month: format.includes("MMM") ? "short" : undefined,
  });
}
