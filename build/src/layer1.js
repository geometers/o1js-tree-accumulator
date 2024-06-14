import { Field, VerificationKey, ZkProgram } from "o1js";
import { ZkpProofLeft, ZkpProofRight } from "./data-structs.js";
const layer1 = ZkProgram({
    name: 'layer1',
    publicInput: Field,
    publicOutput: Field,
    methods: {
        compute: {
            privateInputs: [ZkpProofLeft, VerificationKey, ZkpProofRight, VerificationKey],
            async method(publicInput, piLeft, vkLeft, piRight, vkRight) {
                piLeft.verify(vkLeft);
                piRight.verify(vkRight);
                return piRight.publicOutput;
            },
        },
    },
});
export { layer1 };
//# sourceMappingURL=layer1.js.map