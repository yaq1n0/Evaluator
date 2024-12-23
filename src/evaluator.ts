
export interface ASTNode {
    type: "Literal" | "BinaryExpression";
    value?: number; // For literals
    operator?: "+" | "-" | "*" | "/"; // For binary expressions
    left?: ASTNode; // For binary expressions
    right?: ASTNode; // For binary expressions
  }
  
  export function evaluateAST(node: ASTNode): number {
    if (node.type === "Literal") {
      return node.value!;
    }
  
    if (node.type === "BinaryExpression") {
      const leftValue = evaluateAST(node.left!);
      const rightValue = evaluateAST(node.right!);
  
      switch (node.operator) {
        case "+":
          return leftValue + rightValue;
        case "-":
          return leftValue - rightValue;
        case "*":
          return leftValue * rightValue;
        case "/":
          if (rightValue === 0) throw new Error("Division by zero");
          return leftValue / rightValue;
        default:
          throw new Error(`Unsupported operator: ${node.operator}`);
      }
    }
  
    throw new Error("Invalid AST Node");
  }
  

  
