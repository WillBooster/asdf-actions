import * as fs from 'node:fs';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import {pluginsAdd} from '~/plugins-add/index.ts';

async function toolsInstall(): Promise<void> {
	await pluginsAdd();

	let versionsText = '';
	try {
		if (fs.existsSync('.tool-versions')) {
			versionsText = fs.readFileSync('.tool-versions', 'utf8');
		}
	} catch {
		// Do nothing
	}

	if (versionsText.includes('gcloud') || versionsText.includes('poetry')) {
		await exec.exec('asdf', ['install', 'python']);
	}

	const before = core.getInput('before_install', {required: false});
	if (before) {
		await exec.exec('bash', ['-c', before]);
	}

	await exec.exec('asdf', ['install']);
}

export {toolsInstall};
