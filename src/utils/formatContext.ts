export const formatCard = (cardNumber: string) => {
  const maxCharacters = 16;
  const zero = "0";
  const size = cardNumber.length;
  if (size === maxCharacters) return cardNumber;
  return `${cardNumber}${zero.repeat(maxCharacters - size)}`;
};

export const getCardFormatted = (cardNumber: string) =>
  formatCard(cardNumber)
    .match(/.{1,4}/g)
    ?.join(" ");
