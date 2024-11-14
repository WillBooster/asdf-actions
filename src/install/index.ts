import * as fs from 'node:fs';
import * as path from 'node:path';
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

	if (versionsText.includes('ruby')) {
		const {stdout: rubyVersions} = await exec.getExecOutput('asdf', ['list', 'ruby']);
		const [version] = rubyVersions.replaceAll('*', '').trim().split(/\s+/);
		if (version) {
			// See https://github.com/rbenv/ruby-build/discussions/1875#discussioncomment-2081287
			await exec.exec('asdf', ['global', 'ruby', version]);
		}
	}

	const before = core.getInput('before_install', {required: false});
	if (before) {
		await exec.exec('bash', ['-c', before]);
	}

	try {
		await exec.exec('asdf', ['install']);
	} catch {
		await exec.exec('asdf', ['plugin', 'update', '--all']);
		await exec.exec('asdf', ['install']);
	}

	if (versionsText.includes('java')) {
		const output = await exec.getExecOutput('asdf', ['which', 'java']);
		const javaPath = output.stdout.trim();
		if (fs.existsSync(javaPath)) {
			core.exportVariable('JAVA_HOME', path.dirname(path.dirname(output.stdout.trim())));
		}
	}

	if (versionsText.includes('ruby')) {
		// See https://github.com/rbenv/ruby-build/discussions/1875#discussioncomment-2081287
		await exec.exec('asdf', ['global', 'ruby', 'system']);
	}
}

export {toolsInstall};
