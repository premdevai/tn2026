export function withFallbackRepository<Repository extends object>(
  primary: Repository,
  fallback: Repository,
  onError?: (error: unknown, methodName: string) => void
): Repository {
  return new Proxy(primary, {
    get(target, property, receiver) {
      const primaryValue = Reflect.get(target, property, receiver);
      const fallbackValue = Reflect.get(fallback, property, receiver);

      if (typeof primaryValue !== "function" || typeof fallbackValue !== "function") {
        return primaryValue;
      }

      return async (...args: unknown[]) => {
        try {
          return await primaryValue.apply(target, args);
        } catch (error) {
          onError?.(error, String(property));
          return fallbackValue.apply(fallback, args);
        }
      };
    }
  }) as Repository;
}
