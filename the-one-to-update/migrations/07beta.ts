import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export function update(options: any): Rule {
    return (tree: Tree, _context: SchematicContext) => {

        _context.logger.info("Running update schematic ...");
        _context.logger.info("With options: ", options);

        // Hardcoded path for the sake of simplicity
        const appModule = "./index.ts";

        const buffer = tree.read(appModule);
        if (!buffer) {
            return tree;
        }
        const content = buffer.toString("utf-8");

        // One more time, this is for the sake of simplicity
        const newContent = content.replace("6", "7");
        tree.overwrite(appModule, newContent);

        return tree;
    };
}
