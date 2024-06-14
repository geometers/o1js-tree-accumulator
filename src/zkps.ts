import { Field, ZkProgram } from "o1js";

const zkp1 = ZkProgram({
    name: 'zkp1',
    publicInput: Field,
    publicOutput: Field,
    methods: {
      compute: {
        privateInputs: [Field],
        async method(publicInput: Field, privateInput: Field) {
          return publicInput.mul(privateInput);
        },
      },
    },
});

const zkp2 = ZkProgram({
    name: 'zkp2',
    publicInput: Field,
    publicOutput: Field,
    methods: {
      compute: {
        privateInputs: [Field],
        async method(publicInput: Field, privateInput: Field) {
          return publicInput.mul(privateInput).mul(Field(2));
        },
      },
    },
});

const zkp3 = ZkProgram({
    name: 'zkp3',
    publicInput: Field,
    publicOutput: Field,
    methods: {
      compute: {
        privateInputs: [Field],
        async method(publicInput: Field, privateInput: Field) {
          return publicInput.mul(privateInput).mul(Field(3));
        },
      },
    },
});

const zkp4 = ZkProgram({
    name: 'zkp4',
    publicInput: Field,
    publicOutput: Field,
    methods: {
      compute: {
        privateInputs: [Field],
        async method(publicInput: Field, privateInput: Field) {
          return publicInput.mul(privateInput).mul(Field(4));
        },
      },
    },
});


const zkp5 = ZkProgram({
    name: 'zkp5',
    publicInput: Field,
    publicOutput: Field,
    methods: {
      compute: {
        privateInputs: [Field],
        async method(publicInput: Field, privateInput: Field) {
          return publicInput.mul(privateInput).mul(Field(5));
        },
      },
    },
});


const zkp6 = ZkProgram({
    name: 'zkp6',
    publicInput: Field,
    publicOutput: Field,
    methods: {
      compute: {
        privateInputs: [Field],
        async method(publicInput: Field, privateInput: Field) {
          return publicInput.mul(privateInput).mul(Field(6));
        },
      },
    },
});


const zkp7 = ZkProgram({
    name: 'zkp7',
    publicInput: Field,
    publicOutput: Field,
    methods: {
      compute: {
        privateInputs: [Field],
        async method(publicInput: Field, privateInput: Field) {
          return publicInput.mul(privateInput).mul(Field(7));
        },
      },
    },
});

const zkp8 = ZkProgram({
    name: 'zkp8',
    publicInput: Field,
    publicOutput: Field,
    methods: {
      compute: {
        privateInputs: [Field],
        async method(publicInput: Field, privateInput: Field) {
          return publicInput.mul(privateInput).mul(Field(8));
        },
      },
    },
});

export { zkp1, zkp2, zkp3, zkp4, zkp5, zkp6, zkp7, zkp8 }