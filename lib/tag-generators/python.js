'use babel';

import sarama from 'sarama.js';

export default {
  parseFile(ctx) {
    // TODO: Options?

    const ast = sarama.parse(ctx, options);

    if (!ast || ast.parsingErrors.length > 0) {
      atom.notifications.addError(`Parsing CSS source code failed!`, {
        detail: ast.parsingErrors.join('\n'),
        dismissable: true
      });
      return {
        list: {},
        tree: null
      };
    }

    console.log(ast)

    const tags = {};
    // this.parseAst(tags, ast.rules);

    // return {
    //   list: {},
    //   tree: tags
    // };
    return {
      list: {},
      tree: {name: "Python elements to go here."}
    };
  },

  parseAst(tags, ast) {

  }
}
