export const resolve = (specifier, context, next) => {
  if (
    specifier.startsWith("./") &&
    !specifier.endsWith(".js") &&
    !specifier.endsWith(".mjs")
  ) {
    return next(specifier + ".mjs", context, next);
  }
  return next(specifier, context, next);
};
