import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const MyHackTelephone = buildModule("MyHackTelephone", (m) => {
//   const hackTelephone = m.contract("HackTelephone");

//   return { hackTelephone };
// });

const MyHackTelephone = buildModule("MyHackTelephone", (m) => {
  const hackTelephone = m.contractAt(
    "HackTelephone",
    "0x1DF7E02480EC25182248eAa0d3e442F6C1Ec89fc"
  );

  m.call(hackTelephone, "changeOwner");

  return { hackTelephone };
});

export default MyHackTelephone;
