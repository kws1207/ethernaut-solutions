import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MyForceSend = buildModule("MyForceSend", (m) => {
  const forceSend = m.contract("ForceSend", [
    "0x4376589925829Ab45448a60cacF2f01cb6994f33",
  ]);

  // m.send("sendEther", forceSend, BigInt(1));

  return { forceSend };
});

export default MyForceSend;
