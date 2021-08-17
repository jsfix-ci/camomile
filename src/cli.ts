import { Command } from "commander";
import { name, description, version } from "../package.json";

const program = new Command();

program
	.name(name)
	.description(description)
	.version(version)
	.showHelpAfterError();

program.parse();

console.error("Camomile is WIP!");
