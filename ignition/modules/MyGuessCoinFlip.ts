import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const MyGuessCoinFlip = buildModule("MyGuessCoinFlip", (m) => {
//   const guessCoinFlip = m.contract("GuessCoinFlip");

//   return { guessCoinFlip };
// });

const MyGuessCoinFlip = buildModule("MyGuessCoinFlip", (m) => {
  const guessCoinFlip = m.contractAt(
    "GuessCoinFlip",
    "0xb4E6abbe74021ff507cC98cd4Ff9AA5fb5814B21"
  );

  m.call(guessCoinFlip, "guess");

  return { guessCoinFlip };
});

export default MyGuessCoinFlip;
