console.log("Hello!");

function cookiesAway(selector) {
    selector.setAttribute("style", "color:pink !important; font-size:50px !important;background-color:black !important")
}
//----------------------------------------------------------------------------------

window.onload = function () {//Attend que la page soit chargée pour déclencher le script
    setTimeout(() => {//Retarde l'execution du code 
        //On attribue une variable pour chaque élément à pointer
        let oneTrustId = document.getElementById("onetrust-reject-all-handler");
        let oneTrustClass = document.querySelector(".onetrust-reject-all-handler");
        let oneTrustClass2 = document.querySelector(".onetrust-close-btn-handler");
        let didomiClass = document.querySelector(".didomi-continue-without-agreeing");
        let didomiPaywall = document.querySelector(".didomi-popup-open");

        let arraySelector = [oneTrustId, oneTrustClass, didomiClass, oneTrustClass2, didomiPaywall];

        for (let i = 0; i < arraySelector.length; i++) {
            const element = arraySelector[i];
            try { // Instruction: Ici on essaie tout ce qu'on veut faire fonctionner. Si erreur, alors on bascule dans catch(error) sans stopper tout le code.
                cookiesAway(element);

            } catch (error) {
                console.log("pas d'element");
                let paywallFinder = document.querySelector("body").innerHTML.includes("paywall")
                if (paywallFinder) {

                    alert("Ce site te prend en otage !!!")
                }

            }

        }
    }, 500);// delay (en millisecondes)
}

chrome.runtime.onMessage.addListener(
    console.log("onMessage event has been fired ! ")
)
chrome.runtime.onMessage.addListener((message, sender) => {
    console.log("event detection 2")

    if (message = "lolilol") {
        console.log(`${message} received 5/5 !`)
    }
})