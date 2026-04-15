export function formatMinutes(minutes: number) {
  if (minutes <= 1) {
    return "1 min";
  }

  return `${minutes} mins`;
}

export function formatShortDateTime(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date(value));
}
