import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as fs from "fs";
import { pluginsAdd } from "../plugins-add";

export async function toolsInstall(): Promise<void> {
  await pluginsAdd();

  if (fs.existsSync(".tool-versions")) {
    const toolVersionsText = fs.readFileSync(".tool-versions", "utf-8");
    if (toolVersionsText.includes("gcloud") || toolVersionsText.includes("poetry")) {
      await exec.exec("asdf", ["install", "python"]);
    }
  }

  if (
    fs.existsSync(".tool-versions") &&
    fs.readFileSync(".tool-versions", "utf-8").includes("gcloud")
  ) {
    await exec.exec("asdf", ["install", "python"]);
  }

  const before = core.getInput("before_install", { required: false });
  if (before) {
    await exec.exec("bash", ["-c", before]);
  }
  await exec.exec("asdf", ["install"]);
}
