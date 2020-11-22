import * as path from 'path';
import * as dotenv from 'dotenv-flow';
import { ContainerBuilder, PackageReference, YamlFileLoader, Definition, Parameter } from 'node-dependency-injection';

const ROOT_DIR = path.join(__dirname, '..', '..');

// load dotenv
dotenv.config({
    default_node_env: 'local',
    path: ROOT_DIR
});

// start container
let container = new ContainerBuilder(true, __dirname);

let loader = new YamlFileLoader(container);
loader.load(path.join(ROOT_DIR, 'config', 'services.yml'));

export { container as app };