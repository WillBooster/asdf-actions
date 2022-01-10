import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as fs from "fs";
import { pluginsAdd } from "../plugins-add";

export async function toolsInstall(): Promise<void> {
  await pluginsAdd();

  let toolVersionsText = '';
  try {
    if (fs.existsSync(".tool-versions")) {
      toolVersionsText = fs.readFileSync(".tool-versions", "utf-8");
    }
  } catch (_) {
    // do nothing
  }
  if (toolVersionsText.includes("gcloud") || toolVersionsText.includes("poetry")) {
    await exec.exec("asdf", ["install", "python"]);
  }

  const before = core.getInput("before_install", { required: false });
  if (before) {
    await exec.exec("bash", ["-c", before]);
  }
  await exec.exec("asdf", ["install"]);
}
