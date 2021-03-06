import { workspace } from 'vscode';
import { homedir, tmpdir } from 'os';
import { join } from 'path';

const configuration = () => workspace.getConfiguration('ultnote');

export const getBaseFile = () => configuration().get<string>('baseFile') || 'index.md';

export const getBasePath = () => configuration().get<string>('basePath') || join(homedir(), 'ultnote');

export const getTempPath = () => configuration().get<string>('tempPath') || join(tmpdir(), 'ultnote');
