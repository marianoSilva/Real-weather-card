// my-weather-card.js
class MyWeatherCard extends HTMLElement {
    setConfig(config) {
      if (!config.temperature || !config.rain) {
        throw new Error("Você deve definir 'temperature' e 'rain' no config");
      }
      this.config = config;
      this.attachShadow({ mode: 'open' });
    }
  
    set hass(hass) {
      const tempEntity = hass.states[this.config.temperature];
      const rainEntity = hass.states[this.config.rain];
  
      const temp = parseFloat(tempEntity.state);
      const isRaining = rainEntity.state === 'on';
  
      const icon = isRaining
        ? 'mdi:weather-rainy'
        : temp >= 30
          ? 'mdi:weather-sunny'
          : temp >= 20
            ? 'mdi:weather-partly-cloudy'
            : 'mdi:weather-cloudy';
  
      this.shadowRoot.innerHTML = `
        <ha-card header="Clima Atual">
          <div class="card-content">
            <ha-icon icon="${icon}"></ha-icon>
            <p>Temperatura: ${temp} °C</p>
            <p>Chuva: ${isRaining ? 'Sim' : 'Não'}</p>
          </div>
          <style>
            .card-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 16px;
              font-size: 1.2em;
            }
            ha-icon {
              --mdc-icon-size: 48px;
              margin-bottom: 8px;
            }
          </style>
        </ha-card>
      `;
    }
  
    getCardSize() {
      return 2;
    }
  }
  
  customElements.define('real-weather-card', MyWeatherCard);
  