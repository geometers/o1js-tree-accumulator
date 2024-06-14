import { DynamicProof, Field } from "o1js"

class ZkpProofLeft extends DynamicProof<Field, Field> {
    static publicInputType = Field;
    static publicOutputType = Field;
    static maxProofsVerified = 0 as const;
}

class ZkpProofRight extends DynamicProof<Field, Field> {
    static publicInputType = Field;
    static publicOutputType = Field;
    static maxProofsVerified = 0 as const;
}

class NodeProofLeft extends DynamicProof<Field, Field> {
    static publicInputType = Field;
    static publicOutputType = Field;
    static maxProofsVerified = 2 as const;
}

class NodeProofRight extends DynamicProof<Field, Field> {
    static publicInputType = Field;
    static publicOutputType = Field;
    static maxProofsVerified = 2 as const;
}

export { ZkpProofLeft, ZkpProofRight, NodeProofLeft, NodeProofRight }