var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":23391,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTJspExpressionInAttribute","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_752":{"methods":[{"sl":13}],"name":"noQuoteAttrWithJspExpression","pass":true,"statements":[{"sl":14}]},"test_823":{"methods":[{"sl":13}],"name":"testExpressionInAttribute","pass":true,"statements":[{"sl":14}]},"test_921":{"methods":[{"sl":13}],"name":"quoteExpression","pass":true,"statements":[{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [823, 921, 752], [823, 921, 752], [], [], [], [], [], [], [], [], [], []]
