type ClassValue = string | false | null | undefined;

export function classNames(...classes: readonly ClassValue[]) {
  return classes
    .filter((className): className is string => Boolean(className))
    .join(" ");
}
