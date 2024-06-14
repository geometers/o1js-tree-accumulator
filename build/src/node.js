import { Field, VerificationKey, ZkProgram } from "o1js";
import { NodeProofLeft, NodeProofRight } from "./data-structs.js";
const node = ZkProgram({
    name: 'node',
    publicInput: Field,
    publicOutput: Field,
    methods: {
        compute: {
            privateInputs: [NodeProofLeft, VerificationKey, NodeProofRight, VerificationKey],
            async method(publicInput, piLeft, vkLeft, piRight, vkRight) {
                piLeft.verify(vkLeft);
                piRight.verify(vkRight);
                return piRight.publicOutput;
            },
        },
    },
});
export { node };
//# sourceMappingURL=node.js.map