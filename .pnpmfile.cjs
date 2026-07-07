module.exports = {
  hooks: {
    readPackage(pkg, context) {
      if (pkg.dependencies && pkg.dependencies.postcss) {
        pkg.dependencies.postcss = '8.5.10';
      }
      if (pkg.devDependencies && pkg.devDependencies.postcss) {
        pkg.devDependencies.postcss = '8.5.10';
      }
      return pkg;
    }
  }
}
