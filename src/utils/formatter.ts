export const formatAsDollars = (centavo: string): string => {
  const centavoNumber = parseInt(centavo, 10);

  if (isNaN(centavoNumber)) {
    throw new Error("Invalid centavo amount");
  }

  const dollars = centavoNumber / 100;

  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
