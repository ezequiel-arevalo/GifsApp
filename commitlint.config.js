export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// Tipo de commit obligatorio
		'type-enum': [
			2,
			'always',
			[
				'feat', // Nueva funcionalidad
				'fix', // Corrección de bug
				'docs', // Documentación
				'style', // Formato, punto y coma faltante, etc.
				'refactor', // Refactorización de código
				'perf', // Mejora de rendimiento
				'test', // Agregar o corregir tests
				'build', // Cambios en el sistema de build
				'ci', // Cambios en CI/CD
				'chore', // Tareas de mantenimiento
				'revert', // Revertir commits
			],
		],
		// Tipo en minúsculas
		'type-case': [2, 'always', 'lower-case'],
		// Tipo no puede estar vacío
		'type-empty': [2, 'never'],
		// Alcance opcional pero si está presente debe estar en minúsculas
		'scope-case': [2, 'always', 'lower-case'],
		// Descripción obligatoria
		'subject-empty': [2, 'never'],
		// Descripción no puede terminar en punto
		'subject-full-stop': [2, 'never', '.'],
		// Descripción permitida en lower-case o sentence-case
		'subject-case': [2, 'always', ['lower-case', 'sentence-case']],
		// Línea en blanco obligatoria entre header y body
		'body-leading-blank': [1, 'always'],
		// Línea en blanco obligatoria entre body y footer
		'footer-leading-blank': [1, 'always'],
		// Longitud máxima del header
		'header-max-length': [2, 'always', 100],
	},
};
