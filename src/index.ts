import { Field, verify } from "o1js";
import { layer1 } from "./layer1.js";
import { node } from "./node.js";
import { zkp1, zkp2, zkp3, zkp4, zkp5, zkp6, zkp7, zkp8 } from "./zkps.js"
import { NodeProofLeft, NodeProofRight, ZkpProofLeft, ZkpProofRight } from "./data-structs.js";

const vk1 = (await zkp1.compile()).verificationKey;
const vk2 = (await zkp2.compile()).verificationKey;
const vk3 = (await zkp3.compile()).verificationKey;
const vk4 = (await zkp4.compile()).verificationKey;
const vk5 = (await zkp5.compile()).verificationKey;
const vk6 = (await zkp6.compile()).verificationKey;
const vk7 = (await zkp7.compile()).verificationKey;
const vk8 = (await zkp8.compile()).verificationKey;

const layerVk = (await layer1.compile()).verificationKey; 
const nodeVk = (await node.compile()).verificationKey;

console.log("all loaded");

const p1 = await zkp1.compute(Field(1), Field(1)); 
const p2 = await zkp2.compute(p1.publicOutput, Field(1)); 
const p3 = await zkp3.compute(p2.publicOutput, Field(1)); 
const p4 = await zkp4.compute(p3.publicOutput, Field(1)); 
const p5 = await zkp5.compute(p4.publicOutput, Field(1)); 
const p6 = await zkp6.compute(p5.publicOutput, Field(1)); 
const p7 = await zkp7.compute(p6.publicOutput, Field(1)); 
const p8 = await zkp8.compute(p7.publicOutput, Field(1)); 

console.log("base proofs ready");

const l1 = await layer1.compute(ZkpProofLeft.fromProof(p1), vk1, ZkpProofRight.fromProof(p2), vk2);
const l2 = await layer1.compute(ZkpProofLeft.fromProof(p3), vk3, ZkpProofRight.fromProof(p4), vk4);

const l3 = await layer1.compute(ZkpProofLeft.fromProof(p5), vk5, ZkpProofRight.fromProof(p6), vk6);
const l4 = await layer1.compute(ZkpProofLeft.fromProof(p7), vk7, ZkpProofRight.fromProof(p8), vk8);

console.log("layers proof done");

const n1 = await node.compute(NodeProofLeft.fromProof(l1), layerVk, NodeProofRight.fromProof(l2), layerVk);
const n2 = await node.compute(NodeProofLeft.fromProof(l3), layerVk, NodeProofRight.fromProof(l4), layerVk);

console.log("node proofs done");

const r = await node.compute(NodeProofLeft.fromProof(n1), nodeVk, NodeProofRight.fromProof(n2), nodeVk);

console.log("root worked");

console.log("just verify all proofs"); 

let valid = await verify(p1, vk1); 
console.log("valid1: ", valid);

valid = await verify(p2, vk2); 
console.log("valid2: ", valid);

valid = await verify(p3, vk3); 
console.log("valid3: ", valid);

valid = await verify(p4, vk4); 
console.log("valid4: ", valid);

valid = await verify(p5, vk5); 
console.log("valid5: ", valid);

valid = await verify(p6, vk6); 
console.log("valid6: ", valid);

valid = await verify(p7, vk7); 
console.log("valid7: ", valid);

valid = await verify(p8, vk8); 
console.log("valid8: ", valid);

console.log("verify layers")

valid = await verify(l1, layerVk); 
console.log("valid l1: ", valid);

valid = await verify(l2, layerVk); 
console.log("valid l2: ", valid);

valid = await verify(l3, layerVk); 
console.log("valid l3: ", valid);

valid = await verify(l4, layerVk); 
console.log("valid l4: ", valid);

console.log("verify nodes")

valid = await verify(n1, nodeVk); 
console.log("valid n1: ", valid);

valid = await verify(n2, nodeVk); 
console.log("valid n2: ", valid);

console.log("verify root")

valid = await verify(r, nodeVk); 
console.log("valid root: ", valid);

console.log("make sure that all elements were carried correctly")

r.publicOutput.leftIn.assertEquals(p1.publicInput);
r.publicOutput.rightOut.assertEquals(p8.publicOutput);
