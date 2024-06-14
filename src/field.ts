import { createForeignField } from "o1js";

const P = 21888242871839275222246405745257275088696311157297823662689037894645226208583n
class Fp extends createForeignField(P) {}
class FpC extends Fp.Canonical {}

export { FpC }