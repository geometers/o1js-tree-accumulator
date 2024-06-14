import { VerificationKey } from "o1js";
import { ZkpProofLeft, ZkpProofRight } from "./data-structs.js";
declare const layer1: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field.js").Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("o1js/dist/node/lib/provable/field.js").Field>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        compute: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    privateInputTypes: {
        compute: [typeof ZkpProofLeft, typeof VerificationKey, typeof ZkpProofRight, typeof VerificationKey];
    };
    rawMethods: {
        compute: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [ZkpProofLeft, VerificationKey, ZkpProofRight, VerificationKey] & any[]) => Promise<import("o1js/dist/node/lib/provable/field.js").Field>;
    };
} & {
    compute: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [ZkpProofLeft, VerificationKey, ZkpProofRight, VerificationKey] & any[]) => Promise<import("o1js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("o1js/dist/node/lib/provable/field.js").Field>>;
};
export { layer1 };
