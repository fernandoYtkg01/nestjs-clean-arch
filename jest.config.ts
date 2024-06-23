import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

export default {
  moduleFileExtionsions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(mapping: compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },

  testRegex: ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
  collectCoverageFrom: [
   "**/*.(t|j)s"
  ],
  coverageDirectory: "../coverage",
  testEnvironment: "node"
}
