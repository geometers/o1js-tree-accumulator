import { Field, Undefined, VerificationKey, ZkProgram } from "o1js";
import { NodeProofLeft, NodeProofRight, SubtreeCarry } from "./data-structs.js";

const node = ZkProgram({
    name: 'node',
    publicInput: Undefined,
    publicOutput: SubtreeCarry,
    methods: {
      compute: {
        privateInputs: [NodeProofLeft, VerificationKey, NodeProofRight, VerificationKey],
        async method(
            piLeft: NodeProofLeft, 
            vkLeft: VerificationKey, 
            piRight: NodeProofRight, 
            vkRight: VerificationKey
        ) {
            piLeft.verify(vkLeft); 
            piRight.verify(vkRight); 

            piLeft.publicOutput.rightOut.assertEquals(piRight.publicOutput.leftIn);

            return new SubtreeCarry({
                leftIn: piLeft.publicOutput.leftIn, 
                rightOut: piRight.publicOutput.rightOut
            });
        },
      },
    },
});

export { node }