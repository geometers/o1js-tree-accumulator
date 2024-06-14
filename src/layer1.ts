import { Field, Undefined, VerificationKey, ZkProgram } from "o1js";
import { SubtreeCarry, ZkpProofLeft, ZkpProofRight } from "./data-structs.js";

const layer1 = ZkProgram({
    name: 'layer1',
    publicInput: Undefined,
    publicOutput: SubtreeCarry,
    methods: {
      compute: {
        privateInputs: [ZkpProofLeft, VerificationKey, ZkpProofRight, VerificationKey],
        async method(
            piLeft: ZkpProofLeft, 
            vkLeft: VerificationKey, 
            piRight: ZkpProofRight, 
            vkRight: VerificationKey
        ) {
            
            piLeft.verify(vkLeft); 
            piRight.verify(vkRight); 

            piLeft.publicOutput.assertEquals(piRight.publicInput);

            return new SubtreeCarry({
                leftIn: piLeft.publicInput, 
                rightOut: piRight.publicOutput
          });
        },
      },
    },
});

export { layer1 }