import * as fs from 'node:fs';
import type * as buffer from 'node:buffer';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import {setupAsdf} from '~/setup/index.ts';

async function pluginList() {
	let stdout = '';
	let stderr = '';
	const options = {
		listeners: {
			stdout(data: buffer.Buffer) {
				stdout += data.toString();
			},
			stderr(data: buffer.Buffer) {
				stderr += data.toString();
			},
		},
	};

	try {
		await exec.exec('asdf', ['plugin', 'list'], options);
	} catch (error) {
		if (!stderr.includes('No plugins installed')) {
			throw error;
		}
	}

	return stdout.split('\n');
}

async function pluginsAdd(): Promise<void> {
	await setupAsdf();
	let toolVersions = core.getInput('tool_versions', {required: false});

	if (toolVersions) {
		await fs.promises.writeFile('.tool-versions', toolVersions, {
			encoding: 'utf8',
		});
	} else {
		try {
			toolVersions = await fs.promises.readFile('.tool-versions', {
				encoding: 'utf8',
			});
		} catch {
			// Do nothing
		}
	}

	const pluginNames = toolVersions
		.split('\n')
		.map(x => x.replace(/#.*/, '').trim())
		.filter(x => x.length > 0)
		.map(x => x.split(' ')[0]);

	if (fs.existsSync('.node-version')) {
		pluginNames.push('nodejs');
	}

	if (fs.existsSync('.python-version')) {
		pluginNames.push('python');
	}

	const installedPluginNames = await pluginList();
	for (const pluginName of pluginNames) {
		if (installedPluginNames.includes(pluginName)) {
			core.info(
				`Skip installing ${pluginName} plugin since it's already installed`,
			);
		} else {
			core.info(`Installing ${pluginName} plugin...`);
			const args = pluginName === 'zig'
				? ['plugin', 'add', pluginName, 'https://github.com/asdf-community/asdf-zig.git']
				: ['plugin', 'add', pluginName];
			await exec.exec('asdf', args); // eslint-disable-line no-await-in-loop
		}
	}
}

export {pluginsAdd};
