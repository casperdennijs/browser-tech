# Browser Technologies
Voor Browser Technologies heb ik gekozen om aan de enquete te gaan werken. Hiervoor ben ik bezig geweest met HTML, CSS en JS en heb ik voornamelijk gewerkt in de browser Chrome. De website moet zo goed mogelijk werken met wat de browsers te bieden hebben en moet dus bijvoorbeeld ook werken als alleen HTML werkt.

**Core functionaliteit:** Het versturen van de gegevens ingevuld in de formulier

## Features
### HTML
In de HTML heb basis validatie toegepast door gebruik te maken van de required tag in inputs, hierdoor kan een form niet gesubmit worden wanneer niet alle velden zijn ingevuld.

![image](https://github.com/casperdennijs/browser-tech/assets/56598338/3eff7da4-f733-497b-8e7c-0ddff2052aba)

### CSS
Met CSS heb ik ervoor gezorgd dat alles er fatsoenlijker uitziet en heb ik styling toegevoegd op de radio buttons, hierdoor zie je niet meer de standaard radio buttons maar lijkt het nu op een range die van 1 tot 10 gaat. Verder hebben ik de range border kleuren gegegeven op basis of deze wel of niet valid zijn.

![image](https://github.com/casperdennijs/browser-tech/assets/56598338/a9d7d224-0b29-4c26-95fe-6ea54e0a071c)

### JavaScript
Met JavaScript heb ik de laatste validatie toegevoegd aan de form, wanneer je op submit probeert te klikken krijg je een kleine waarschuwing met dat nog niet alles is ingevuld. 

Ik heb stappen toegevoegd zodat je een sectie te gelijk kan zien en niet meer hoeft te scrollen. Daarnaast heb ik ook localstorage toegepast op de radio buttons. Wanneer je een stap hebt ingevuld en naar de volgende stap gaat worden je antwoorden opgeslagen en opnieuw ingeladen bij een pagina refresh. 

Ook heb ik een simpele navigatie balk toegevoegd die weergeeft waar je in het proces bent. Dit heb ik aangegeven door bollen te gebruiken, hoe verder hoe meer er gevuld zijn.

![image](https://github.com/casperdennijs/browser-tech/assets/56598338/542fc72b-814a-456c-80a6-fd81963c909c)

## Browser testing
### Brave (gebruik ik persoonlijk)
In deze browser heb ik de applicatie in uitgewerkt, alles werkt hier dan ook zoals het moet zijn. 

![image](https://github.com/casperdennijs/browser-tech/assets/56598338/99690612-1e05-4803-af41-766bf90bd853)

### Chrome
Aangezien de Brave browser die ik hierboven heb laten zien draait op Chromium werkt het in Chrome net zo goed. Geen veranderingen en alles doet het zoals het hoort.

![image](https://github.com/casperdennijs/browser-tech/assets/56598338/369103d1-e617-4488-bd84-8dc7003ed348)

### Firefox
Firefox bied geen support voor de :has selector, hierdoor werken de radio buttons styling niet gebeurd er niks als je een cijfer geeft.

![image](https://github.com/casperdennijs/browser-tech/assets/56598338/94d7b01c-682f-4464-a55e-905f7dc79a55)

### Opera
Ondanks dat Opera niet op Chromium werkt, werkt alles net zo goed als bij Brave en Chrome. Ze supporten ook de :has selector!

![image](https://github.com/casperdennijs/browser-tech/assets/56598338/489bbb80-7eda-4d56-b90e-67f86720c8e8)

### Chrome voor Android
Chrome voor Android werkte zoals verwacht net zoals Chrome op desktop. Alles werkt prima.

![image](https://github.com/casperdennijs/browser-tech/assets/56598338/a71973c7-3894-4d86-879d-4b66f5c166b4)

### UC Browser (obscure browser)
UC Browser heeft wel wat kleinere foutjes, zo is de styling niet helemaal hetzelfde als op andere browser en miste het net zoals Firefox support voor de :has selector.

![image](https://github.com/casperdennijs/browser-tech/assets/56598338/b02b2001-fc62-4829-aa17-411834504429)

### Fixes
Ik heb voor de browsers die geen :has selector supporten ervoor gezorgd dat de radio buttons alsnog zichtbaar worden op de standaard manier door in CSS @supports te gebruiken. Ik wist helaas geen betere oplossing om zonder :has dit net zo netjes te maken voor deze browsers. Maar alle browsers die het wel supporten zien er dan netjes uit.
```CSS
@supports selector(:has(*)) {
    form label input[type=radio] {
        opacity: 0;
        height: 1px;
        width: 1px;
    }

    form .radio:not(:last-child) label:has(input:checked) {
        background-color: rgb(202, 202, 255);
        font-weight: bold;
        font-size: 1.5em;
    }
    
    form .radio:not(:last-child) label:has(input:checked):before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -1000%;
        width: 1000%;
        background-color: rgb(202, 202, 255);
        pointer-events: none;
        z-index: 3;
    }

    form section:has(input[type=radio]:checked) {
        border: 2px solid green;
    }
    
    form section:has(input[type=radio]:invalid) {
        border: 2px solid red;
    }
}
```
## Firefox
![image](https://github.com/casperdennijs/browser-tech/assets/56598338/b9daae1e-712a-4f6d-8c45-063f1edd5f29)

## UC Browser (obscure browser)
![image](https://github.com/casperdennijs/browser-tech/assets/56598338/a57bc251-73dc-44e0-9862-3b605998c17d)
