import { ASTNode, evaluateAST } from "./evaluator";

// Example usage
const expression : ASTNode = {
type: "BinaryExpression",
operator: "+",
left: { type: "Literal", value: 3 },
right: {
    type: "BinaryExpression",
    operator: "*",
    left: { type: "Literal", value: 5 },
    right: { type: "Literal", value: 2 },
},
};

const main = (): void => {
    console.log(evaluateAST(expression)); // Output: 13
}

main(); 