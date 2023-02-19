import { colors } from './colors';

export const nodes = [];
export const links = [];

const MAIN_NODE_SIZE = 40;
const CHILD_NODE_SIZE = 15;
const LEAF_NODE_SIZE = 5;
const DEFAULT_DISTANCE = 150;
const MAIN_NODE_DISTANCE = 190;
const LEAF_NODE_DISTANCE = 50;
export const MANY_BODY_STRENGTH = -100;

let i = 0;

const addMainNode = (node) => {
  node.size = MAIN_NODE_SIZE;
  node.color = colors[i++][1];
  nodes.push(node);
};



const addChildNode = (
  parentNode,
  childNode,
  size = CHILD_NODE_SIZE,
  distance = DEFAULT_DISTANCE
) => {
  childNode.size = size;
  childNode.color = parentNode.color;
  nodes.push(childNode);
  links.push({
    source: parentNode,
    target: childNode,
    distance,
    color: parentNode.color,
  });
};

const assembleChildNode = (parentNode, id, numLeaves=20) => {
  const childNode = { id };
  addChildNode(parentNode, childNode);

  for (let i = 0; i < numLeaves; i++) {
    addChildNode(childNode, { id: '' }, LEAF_NODE_SIZE, LEAF_NODE_DISTANCE);
  }
};

const connectMainNodes = (source, target) => {
  links.push({
    source,
    target,
    distance: MAIN_NODE_DISTANCE,
    color: source.color
  });
};

const coordinacion = { id: '平均变化率' };
addMainNode(coordinacion);


const equipoComercial = { id: '函数的性质' };
addMainNode(equipoComercial);
assembleChildNode(equipoComercial, '函数的单调性', 1);
assembleChildNode(equipoComercial, '函数的零点', 2);





const areaTecnica = { id: '定积分' };
addMainNode(areaTecnica);
assembleChildNode(areaTecnica, '曲边梯形法',3);
assembleChildNode(areaTecnica, '图像法求积分',2);


const admin = { id: '微积分基本定理' };
addMainNode(admin);
assembleChildNode(admin, '不定积分', 1);
assembleChildNode(admin, '导数与单调区间', 1);
assembleChildNode(admin, '导数求最值', 1);


const it = {id: '导函数概念'};
addMainNode(it);
assembleChildNode(it,'常见函数导数',1);




connectMainNodes(coordinacion, equipoComercial);
connectMainNodes(coordinacion,it); 
connectMainNodes(coordinacion, areaTecnica);
connectMainNodes(areaTecnica,it); 
connectMainNodes(equipoComercial,it); 
connectMainNodes(admin, coordinacion);
connectMainNodes(admin, it);
connectMainNodes(admin, coordinacion);

