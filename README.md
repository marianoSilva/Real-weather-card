# My Weather Card

Um cartão customizado para o Home Assistant que exibe temperatura e condição de chuva com ícones dinâmicos.

## 📦 Instalação manual

1. Copie o arquivo `my-weather-card.js` para a pasta `www/custom_cards/my-weather-card/`
2. Adicione nos recursos do Lovelace:
   ```yaml
   resources:
     - url: /local/custom_cards/my-weather-card/my-weather-card.js
       type: module