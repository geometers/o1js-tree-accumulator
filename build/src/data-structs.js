import { DynamicProof, Field } from "o1js";
class ZkpProofLeft extends DynamicProof {
}
ZkpProofLeft.publicInputType = Field;
ZkpProofLeft.publicOutputType = Field;
ZkpProofLeft.maxProofsVerified = 0;
class ZkpProofRight extends DynamicProof {
}
ZkpProofRight.publicInputType = Field;
ZkpProofRight.publicOutputType = Field;
ZkpProofRight.maxProofsVerified = 0;
class NodeProofLeft extends DynamicProof {
}
NodeProofLeft.publicInputType = Field;
NodeProofLeft.publicOutputType = Field;
NodeProofLeft.maxProofsVerified = 2;
class NodeProofRight extends DynamicProof {
}
NodeProofRight.publicInputType = Field;
NodeProofRight.publicOutputType = Field;
NodeProofRight.maxProofsVerified = 2;
export { ZkpProofLeft, ZkpProofRight, NodeProofLeft, NodeProofRight };
//# sourceMappingURL=data-structs.js.map