import { Field } from "o1js";
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
const p2 = await zkp2.compute(Field(1), Field(1)); 
const p3 = await zkp3.compute(Field(1), Field(1)); 
const p4 = await zkp4.compute(Field(1), Field(1)); 
const p5 = await zkp5.compute(Field(1), Field(1)); 
const p6 = await zkp6.compute(Field(1), Field(1)); 
const p7 = await zkp7.compute(Field(1), Field(1)); 
const p8 = await zkp8.compute(Field(1), Field(1)); 

console.log("base proofs ready");

const l1 = await layer1.compute(Field(1), ZkpProofLeft.fromProof(p1), vk1, ZkpProofRight.fromProof(p2), vk2);
const l2 = await layer1.compute(Field(1), ZkpProofLeft.fromProof(p3), vk3, ZkpProofRight.fromProof(p4), vk4);

const l3 = await layer1.compute(Field(1), ZkpProofLeft.fromProof(p5), vk5, ZkpProofRight.fromProof(p6), vk6);
const l4 = await layer1.compute(Field(1), ZkpProofLeft.fromProof(p7), vk7, ZkpProofRight.fromProof(p8), vk8);

console.log("layers proof done");

const n1 = await node.compute(Field(1), NodeProofLeft.fromProof(l1), layerVk, NodeProofRight.fromProof(l2), layerVk);
const n2 = await node.compute(Field(1), NodeProofLeft.fromProof(l3), layerVk, NodeProofRight.fromProof(l4), layerVk);

console.log("node proofs done");

const r = await node.compute(Field(1), NodeProofLeft.fromProof(n1), nodeVk, NodeProofRight.fromProof(n2), nodeVk);

console.log("root worked");