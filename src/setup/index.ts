import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as io from '@actions/io';

async function setupAsdf(): Promise<void> {
	const asdfPath = await io.which('asdf', false);
	if (asdfPath) {
		return;
	}

	const asdfDir = path.join(os.homedir(), '.asdf');
	core.exportVariable('ASDF_DIR', asdfDir);
	core.exportVariable('ASDF_DATA_DIR', asdfDir);
	core.addPath(`${asdfDir}/bin`);
	core.addPath(`${asdfDir}/shims`);

	const skip = core.getBooleanInput('skip_install', {required: true});
	if (skip) {
		return;
	}

	const branch = core.getInput('asdf_branch', {required: true});
	if (fs.existsSync(asdfDir)) {
		core.info(`Updating asdf in ASDF_DIR "${asdfDir}" on branch "${branch}"`);
		const options = {cwd: asdfDir};
		await exec.exec('git', ['reset', '--hard'], options);
		await exec.exec('git', ['remote', 'set-branches', 'origin', branch], options);
		await exec.exec('git', ['fetch', '--depth', '1', 'origin', branch], options);
		await exec.exec('git', ['checkout', '-B', branch, 'origin'], options);
	} else {
		core.info(`Cloning asdf into ASDF_DIR "${asdfDir}" on branch "${branch}"`);
		await exec.exec('git', [
			'clone',
			'--depth',
			'1',
			'--branch',
			branch,
			'--single-branch',
			'https://github.com/asdf-vm/asdf.git',
			asdfDir,
		]);
	}

	fs.writeFileSync(
		path.join(os.homedir(), '.asdfrc'),
		'legacy_version_file = yes',
	);
}

export {setupAsdf};
