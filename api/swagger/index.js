import { join, dirname } from "path";
import { fileURLToPath } from "url";
import swaggerAutogen from "swagger-autogen";

const _dirname = dirname(fileURLToPath(import.meta.url));

// const doc = ...

// путь и название генерируемого файла
const outputFile = join(_dirname, "output.json");
// массив путей к роутерам
const endpointsFiles = [join(_dirname, "../index.js")];

const doc = {
	// общая информация
	info: {
		title: "Blog-app API",
		description: "My blog API",
	},
	// что-то типа моделей
	definitions: {},
	host: "http://api.puputravel.com/:8000",
	schemes: ["http"],
};

swaggerAutogen(/*options*/)(outputFile, endpointsFiles, doc).then(
	({ success }) => {
		console.log(`Generated: ${success}`);
	}
);
