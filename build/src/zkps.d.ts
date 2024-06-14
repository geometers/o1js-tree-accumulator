declare const zkp1: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        compute: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    privateInputTypes: {
        compute: [typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field)];
    };
    rawMethods: {
        compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js/dist/node/lib/provable/field").Field>;
    };
} & {
    compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>>;
};
declare const zkp2: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        compute: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    privateInputTypes: {
        compute: [typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field)];
    };
    rawMethods: {
        compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js/dist/node/lib/provable/field").Field>;
    };
} & {
    compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>>;
};
declare const zkp3: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        compute: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    privateInputTypes: {
        compute: [typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field)];
    };
    rawMethods: {
        compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js/dist/node/lib/provable/field").Field>;
    };
} & {
    compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>>;
};
declare const zkp4: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        compute: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    privateInputTypes: {
        compute: [typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field)];
    };
    rawMethods: {
        compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js/dist/node/lib/provable/field").Field>;
    };
} & {
    compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>>;
};
declare const zkp5: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        compute: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    privateInputTypes: {
        compute: [typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field)];
    };
    rawMethods: {
        compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js/dist/node/lib/provable/field").Field>;
    };
} & {
    compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>>;
};
declare const zkp6: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        compute: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    privateInputTypes: {
        compute: [typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field)];
    };
    rawMethods: {
        compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js/dist/node/lib/provable/field").Field>;
    };
} & {
    compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>>;
};
declare const zkp7: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        compute: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    privateInputTypes: {
        compute: [typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field)];
    };
    rawMethods: {
        compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js/dist/node/lib/provable/field").Field>;
    };
} & {
    compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>>;
};
declare const zkp8: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        compute: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    privateInputTypes: {
        compute: [typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field)];
    };
    rawMethods: {
        compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js/dist/node/lib/provable/field").Field>;
    };
} & {
    compute: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>>;
};
export { zkp1, zkp2, zkp3, zkp4, zkp5, zkp6, zkp7, zkp8 };
