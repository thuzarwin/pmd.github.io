var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":26,"id":17943,"methods":[{"el":25,"sc":5,"sl":17}],"name":"AvoidCatchingThrowableRule","sl":15}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_456":{"methods":[{"sl":17}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":24}]},"test_77":{"methods":[{"sl":17}],"name":"testPmdOptions","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [456, 77], [], [456, 77], [456, 77], [456, 77], [456], [], [456, 77], [], []]
