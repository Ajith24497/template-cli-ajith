import * as fs from "fs";
const CURR_DIR = process.cwd();

const createDirectoryContents = (templatePath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);
    const writePath =
      newProjectPath === "."
        ? `${CURR_DIR}/${file}`
        : `${CURR_DIR}/${newProjectPath}/${file}`;

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, "utf8");

      // Rename
      if (file === ".npmignore") file = ".gitignore";

      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(writePath);

      // recursive call
      createDirectoryContents(
        `${templatePath}/${file}`,
        newProjectPath === "." ? `${file}` : `${newProjectPath}/${file}`
      );
    }
  });
};

export default createDirectoryContents;
