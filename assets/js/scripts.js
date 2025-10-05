    // Función Convertidor//

        function convertirADolaresChilenos(montoDolares) {
            const tipoCambio = 745;
            return montoDolares * tipoCambio;
        }

        
        function mostrarConversion() {
            const input = document.getElementById('montoDolares');
            const resultado = document.getElementById('resultado');
            const monto = parseFloat(input.value);

            if (isNaN(monto) || monto < 0) {
                resultado.textContent = "Por favor ingresa un monto válido en dólares.";
                return;
            }

            const montoCLP = convertirADolaresChilenos(monto);
            resultado.textContent = `$${monto} USD equivalen a $${montoCLP.toLocaleString('es-CL')} CLP.`;
        }

        

        //Subsidio//


      document.getElementById('subsidioForm').addEventListener('submit', function (e) {
      e.preventDefault();

   
      const nacionalidad = document.getElementById('nacionalidad').value;
      const cedulaVigente = document.getElementById('cedulaVigente').value;
      const edad = parseInt(document.getElementById('edad').value);
      const vulnerabilidad = parseFloat(document.getElementById('vulnerabilidad').value);
      const ahorro = parseFloat(document.getElementById('ahorro').value);
      const ahorroNombre = document.getElementById('ahorroNombre').value;
      const resultado = document.getElementById('resultado');


      if (cedulaVigente !== 'si') {
        resultado.textContent = "❌ No cumple: debe tener cédula de identidad vigente.";
      } else if (edad < 18) {
        resultado.textContent = "❌ No cumple: debe ser mayor de 18 años.";
      } else if (vulnerabilidad > 70) {
        resultado.textContent = "❌ No cumple: debe pertenecer al 70% más vulnerable de la población.";
      } else if (ahorro < 4) {
        resultado.textContent = "❌ No cumple: el ahorro debe ser de al menos 4 UF.";
      } else if (!['titular', 'conyuge', 'conviviente'].includes(ahorroNombre)) {
        resultado.textContent = "❌ No cumple: el ahorro debe estar a nombre del titular, cónyuge o conviviente.";
      } else {
        resultado.textContent = "✅ Cumple con todos los requisitos para postular al subsidio.";
      }
    });