import { keccak256 } from "js-sha3";

export function getFunctionSignature(
  functionName: string,
  paramTypes: string[]
): string {
  const functionSignature = `${functionName}(${paramTypes.join(",")})`;
  const hash = keccak256(functionSignature);
  return `0x${hash.slice(0, 8)}`;
}

// console.log(getFunctionSignature("claimKing", []));
