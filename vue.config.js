const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'livro.free.nf.local',
      'localhost' // Adicione localhost se necessário
    ],
    // ou desabilitar a verificação de host (não recomendado para produção)
    // disableHostCheck: true,
  }
});
