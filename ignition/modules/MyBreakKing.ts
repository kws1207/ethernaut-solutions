import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MyBreakKing = buildModule("MyBreakKing", (m) => {
  const breakKing = m.contract("BreakKing", [
    "0x71E849E67EDa7A0F0EdfDD50ec2b3251A5694cb9",
  ]);

  return { breakKing };
});

export default MyBreakKing;
