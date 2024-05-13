const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const homePage = document.querySelector('.homePage');
const galleryPage = document.querySelector('.galleryPage');
const detailsPage = document.querySelector('.detailsPage');
const pricingPage = document.querySelector('.pricingPage');
const contactPage = document.querySelector('.contactPage');
const contactButton = document.querySelector('.contactButton');
//const banner1Title = document.querySelector('.banner1Title');
//const banner2Title = document.querySelector('.banner2Title');
//const banner3Title = document.querySelector('.banner3Title');
const processRedTitle = document.querySelector('.processRedTitle');
const virtualTourAnd360PhotosTitle = document.querySelector('.virtualTourAnd360PhotosTitle');
const scheduleCall = document.querySelector('.scheduleCall');
const howToGetInTouch = document.querySelector('.howToGetInTouch');
const howToGetInTouchBody = document.querySelector('.howToGetInTouchBody');
const howDoesItWorks = document.querySelector('.howDoesItWorks');
const howDoesItWorksBody = document.querySelector('.howDoesItWorksBody');
const whyBest = document.querySelector('.whyBest');
const whyBestBody = document.querySelector('.whyBestBody');
const virtualTourExample = document.querySelector('.virtualTourExample');
const diveIntoVirtualTour = document.querySelector('.diveIntoVirtualTour');
const forWho = document.querySelector('.forWho');
const anyTypeOfBusiness = document.querySelector('.anyTypeOfBusiness');
const infosAppart = document.querySelector('.infosAppart');
const infosResto = document.querySelector('.infosResto');
const infosShops = document.querySelector('.infosShops');
const sectionGalerie = document.querySelector('.sectionGalerie');
const youFindProjects = document.querySelector('.youFindProjects');
const contactUsSection = document.querySelector('.contactUsSection');
const getInTouchWithUs = document.querySelector('.getInTouchWithUs');
const decouvrezOffres = document.querySelector('.decouvrezOffres');
const packBasicDescription = document.querySelector('.packBasicDescription');
const packSmartDescription = document.querySelector('.packSmartDescription');
const packPremiumDescription = document.querySelector('.packPremiumDescription');



const yckprodlogo = document.querySelector(".yckprodlogo");

const topScreenShown = window.innerHeight







        
function changeLanguage(lang) {
  const attr = lang;

  if (homePage) homePage.textContent = data[attr].homePage;
	if (galleryPage) galleryPage.textContent = data[attr].galleryPage;
  if (detailsPage) detailsPage.textContent = data[attr].detailsPage;
  if (pricingPage) pricingPage.textContent = data[attr].pricingPage;
  if (contactPage) contactPage.textContent = data[attr].contactPage;
  //const words1 = data[attr].colorBanner1Title.split(' ');
  //banner1Title.innerHTML = data[attr].banner1Title + " " + `<img src="./assets/images/logo google mapS.png" alt="logo Google Maps" class="logoGoogleMaps">`;
  //banner2Title.innerHTML = data[attr].banner2Title;
  //banner3Title.innerHTML = data[attr].banner3Title;
  if (processRedTitle) processRedTitle.textContent = data[attr].processRedTitle;
  if (virtualTourAnd360PhotosTitle) virtualTourAnd360PhotosTitle.textContent = data[attr].virtualTourAnd360PhotosTitle;
  if (scheduleCall) scheduleCall.innerHTML = `<i class="fa fa-calendar"></i>` + data[attr].scheduleCall;
  if (howToGetInTouch) howToGetInTouch.textContent = data[attr].howToGetInTouch;
  if (howToGetInTouchBody) howToGetInTouchBody.textContent = data[attr].howToGetInTouchBody;
  if (howDoesItWorks) howDoesItWorks.textContent = data[attr].howDoesItWorks;
  if (howDoesItWorksBody) howDoesItWorksBody.textContent = data[attr].howDoesItWorksBody;
  if (whyBest) whyBest.textContent = data[attr].whyBest;
  if (whyBestBody) whyBestBody.textContent = data[attr].whyBestBody;
  if (virtualTourExample) virtualTourExample.textContent = data[attr].virtualTourExample;
  if (diveIntoVirtualTour) diveIntoVirtualTour.textContent = data[attr].diveIntoVirtualTour;
  if (forWho) forWho.textContent = data[attr].forWho;
  if (anyTypeOfBusiness) anyTypeOfBusiness.textContent = data[attr].anyTypeOfBusiness;
  if (infosAppart) infosAppart.innerHTML = data[attr].infosAppart;
  if (infosResto) infosResto.innerHTML = data[attr].infosResto;
  if (infosShops) infosShops.innerHTML = data[attr].infosShops;
  if (sectionGalerie) sectionGalerie.innerHTML = data[attr].sectionGalerie;
  if (youFindProjects) youFindProjects.innerHTML = data[attr].youFindProjects;
  if (contactUsSection) contactUsSection.innerHTML = data[attr].contactUsSection;
  if (getInTouchWithUs) getInTouchWithUs.innerHTML = data[attr].getInTouchWithUs;
  if (decouvrezOffres) decouvrezOffres.innerHTML = data[attr].decouvrezOffres;
  if (packBasicDescription) packBasicDescription.innerHTML = data[attr].packBasicDescription;
  if (packSmartDescription) packSmartDescription.innerHTML = data[attr].packSmartDescription;
  if (packPremiumDescription) packPremiumDescription.innerHTML = data[attr].packPremiumDescription;

  
  
  
  
  
  
  
  

  

  

  

  // Sauvegarde la langue dans le Local Storage
  localStorage.setItem('preferredLanguage', lang);
}
function loadPreferredLanguage() {
  let preferredLanguage = localStorage.getItem('preferredLanguage');
  if (!preferredLanguage) {
    // Forcer la langue française comme langue par défaut pour les nouveaux visiteurs
    preferredLanguage = 'french';
    localStorage.setItem('preferredLanguage', preferredLanguage);
  }

  // Appliquer la langue préférée
  changeLanguage(preferredLanguage);

  // Mettre à jour l'interface utilisateur pour refléter la langue active
  const activeLangEl = langEl.querySelector(`[language="${preferredLanguage}"]`);
  if (activeLangEl) {
    langEl.querySelector('.active').classList.remove('active');
    activeLangEl.classList.add('active');
  }
}

// Appeler la fonction loadPreferredLanguage au chargement de la page
document.addEventListener('DOMContentLoaded', loadPreferredLanguage);

// Ajout des écouteurs d'événements pour les changements de langue
link.forEach(el => {
  el.addEventListener('click', () => {
      langEl.querySelector('.active').classList.remove('active');
      el.classList.add('active');

      const attr = el.getAttribute('language');
      changeLanguage(attr);
  });
});

		
		var data = {
			  "english": 
			  {
			    "homePage": "Home",
			    "galleryPage": "Gallery",
                "detailsPage": "Details",
                "pricingPage": "Pricing",
                "contactPage": "Contact",
                "scheduleCall": "Schedule a call",
                "banner1Title": "panoramic 360 Google Maps",
                "colorBanner1Title": "Virtual Tour",
                "banner2Title": "Gain visibility in Google searches",
                "banner3Title": "Convert more sales",
                "processRedTitle": "| Process",
                "virtualTourAnd360PhotosTitle": "Virtual Tour & 360° Photos",
                "howToGetInTouch": "How to get in touch ?",
                "howToGetInTouchBody": "Send us an email at info.lightmemory@gmail.com. We will be glad to answer to all of your questions",
                "howDoesItWorks": "How does it works ?",
                "howDoesItWorksBody": "We are taking care of everything. You decide when you want an appointment with the photograph. Then we publish the virtual tour on your My Google Business page",
                "whyBest": "Why would you work with us ?",
                "whyBestBody": "The efficiency of our agency is our greatest asset, from the moment the appointment is made the virtual tour will be published within a week",
                "virtualTourExample": "| VIRTUAL TOUR EXAMPLE",
                "diveIntoVirtualTour": "Dive into this virtual tour",
                "forWho": "| FOR WHO",
                "anyTypeOfBusiness": "Any type of business",
                "infosAppart": "We can deal with any surface, from a small appartment of 10 m² to a big penthouse with different floors...<br><br>When the photograph come to your place to take picture you can choose with his guidance what you want to show, indoor and outdoor",
                "infosResto": "We know that it's easier to take pictures when there's no client. We can either take picture during or after your shift. In any case, we blur people faces to respect privacy",
                "infosShops": "From the clothing store to the car garage, virtual tours are always a plus for your visibility on Google searches.<br><br>If you have more than one adress, we can schedule multiple appointments to take picture in every shop",
                "sectionGalerie": "| GALLERY",
                "youFindProjects": "Some of our projects",
                "contactUsSection": "| CONTACT US",
                "getInTouchWithUs": "Get In Touch <br>With Us",
                "decouvrezOffres": "Discover our offers",
                "packBasicDescription": "Perfect for small spaces, this pack includes three 360° photos with editing and online publishing in just 2 working days.",
                "packSmartDescription": "For more extensive coverage, opt for our SMART pack, which offers 5 360° photos with editing and online publishing in 2 working days.",
                "packPremiumDescription": "Treat yourself to our best offer with the PREMIUM pack, including 10 360° photos, fast editing and uploading in just 5 working days, and a personalized QR code to direct your customers to the reviews section of your Google page.", 
                
			  },
			  "french": 
			  {
			    "homePage": "Accueil",
			    "galleryPage": "Galerie",
                "detailsPage": "Details",
                "pricingPage": "Tarifs",
                "contactPage": "Contactez-nous",
                "scheduleCall": "Planifiez un appel",
                "banner1Title": "panoramique 360 ​​Google Maps",
                "colorBanner1Title": "Visite Virtuelle",
                "banner2Title": "Gagnez en visibilité sur Google",
                "banner3Title": "Augmentez vos ventes",
                "processRedTitle": "| Processus",
                "virtualTourAnd360PhotosTitle": "Visite Virtuelle & Photos 360°",
                "howToGetInTouch": "Comment entrer en contact?",
                "howToGetInTouchBody": "Envoyez-nous un email à info.lightmemory@gmail.com. Nous serons heureux de répondre à toutes vos questions",
                "howDoesItWorks": "Comment ça fonctionne ?",
                "howDoesItWorksBody": "Nous nous occupons de tout. Vous décidez quand vous souhaitez un rendez-vous avec le photographe. Ensuite nous publions la visite virtuelle sur votre page My Google Business",
                "whyBest": "Pourquoi Light Memory ?",
                "whyBestBody": "L'efficacité de notre agence est notre plus grand atout, dès la prise de rendez-vous la visite virtuelle sera publiée sous une semaine",
                "virtualTourExample": "| EXEMPLE DE VISITE VIRTUELLE",
                "diveIntoVirtualTour": "Plongez dans cette visite virtuelle",
                "forWho": "| POUR QUI ?",
                "anyTypeOfBusiness": "Tout type d'entreprise",
                "infosAppart": "Nous pouvons traiter n'importe quelle surface, d'un petit appartement de 10 m² à un grand penthouse avec différents étages...<br><br>Lorsque le photographe vient chez vous pour prendre une photo, vous pouvez choisir avec ses conseils ce que vous que vous voulez montrer, à l'intérieur et à l'extérieur",
                "infosResto": "Nous savons qu'il est plus facile de prendre des photos lorsqu'il n'y a pas de client. Nous pouvons prendre des photos pendant ou après votre quart de travail. Dans tous les cas, nous floutons les visages des personnes pour respecter la vie privée",
                "infosShops": "Du magasin de vêtements au garage automobile, les visites virtuelles sont toujours un plus pour votre visibilité sur les recherches Google.<br><br>Si vous avez plusieurs adresses, nous pouvons planifier plusieurs rendez-vous pour prendre des photos dans chaque magasin",
                "sectionGalerie": "| GALERIE",
                "youFindProjects": "Voici quelques exemples",
                "contactUsSection": "| CONTACTEZ-NOUS",
                "getInTouchWithUs": "Prenez contact <br>avec nous",
                "decouvrezOffres": "Découvrez nos offres",
                "packBasicDescription": "Parfait pour les petites surfaces, ce pack comprend 3 photos 360° avec édition et mise en ligne en seulement 2 jours ouvrables",
                "packSmartDescription": "Pour une couverture plus étendue, optez pour notre pack SMART qui propose 5 photos 360° avec édition et mise en ligne en 2 jours ouvrables",
                "packPremiumDescription": "Offrez vous notre meilleure offre avec le pack PREMIUM, comprenant 10 photos 360°, une édition et mise en ligne rapide en seulement 5 jours ouvrables, ainsi qu'un QR code personnalisé pour diriger vos clients vers la section avis de votre page Google", 

			  },
			  "italian": 
			  {
			    "homePage": "Accoglienza",
			    "galleryPage": "galleria",
                "detailsPage": "Dettagli",
                "pricingPage": "Tariffe",
                "contactPage": "Contatto",
                "scheduleCall": "Pianifica una chiamata",
                "banner1Title": "panoramico 360 Google Maps",
                "colorBanner1Title": "Tour Virtuale",
                "banner2Title": "Aumenta la visibilità su Google",
                "banner3Title": "Incrementa le vendite",
               "processRedTitle": "| Processi",
               "virtualTourAnd360PhotosTitle": "Tour virtuale e foto a 360°",
               "howToGetInTouch": "Come entrare in contatto?",
               "howToGetInTouchBody": "Inviateci un'e-mail all'indirizzo info.lightmemory@gmail.com. Saremo lieti di rispondere a tutte le vostre domande",
               "howDoesItWorks": "Come funziona ?",
               "howDoesItWorksBody": "Ci stiamo occupando di tutto. Decidi tu quando vuoi un appuntamento con la fotografia. Successivamente pubblichiamo il tour virtuale sulla tua pagina My Google Business",
               "whyBest": "Perché Light Memory ?",
               "whyBestBody": "L'efficienza della nostra agenzia è il nostro punto di forza, dal momento in cui viene fissato l'appuntamento il tour virtuale verrà pubblicato entro una settimana",
               "virtualTourExample": "| ESEMPIO DI TOUR VIRTUALE",
               "diveIntoVirtualTour": "Tuffatevi in ​​questo tour virtuale",
               "forWho": "| PER CHI ?",
               "anyTypeOfBusiness": "Qualsiasi tipo di attività",
               "infosAppart": "Possiamo occuparci di qualsiasi superficie, da un piccolo appartamento di 10 m² ad un grande attico con diversi piani...<br><br>Quando il fotografo viene a casa tua per scattare la foto puoi scegliere con la sua guida ciò che desideri voglio mostrare, indoor e outdoor",
               "infosResto": "Sappiamo che è più facile scattare foto quando non c'è un cliente. Possiamo scattare foto durante o dopo il turno. In ogni caso, offusiamo i volti delle persone per rispettare la privacy",
               "infosShops": "Dal negozio di abbigliamento al garage, i tour virtuali sono sempre un vantaggio per la tua visibilità nelle ricerche di Google.<br><br>Se hai più di un indirizzo, possiamo fissare più appuntamenti per scattare una foto in ogni negozio",
               "sectionGalerie": "| GALLERIA",
               "youFindProjects": "Puoi trovare i nostri progetti qui",
               "contactUsSection": "| CONTATTACI",
               "getInTouchWithUs": "Mettiti in contatto <br>con noi",
               "decouvrezOffres": "Scopri le nostre offerte",
               "packBasicDescription": "Perfetto per i piccoli spazi, questo pacchetto comprende 3 foto a 360°, editate e online in soli 2 giorni lavorativi.",
               "packSmartDescription": "Per una copertura più ampia, optate per il nostro pacchetto SMART, che comprende 5 foto a 360°, editate e online entro 2 giorni lavorativi.",
               "packPremiumDescription": "Concedetevi la nostra migliore offerta con il pacchetto PREMIUM, che include 10 foto a 360°, editing e caricamento rapido in soli 5 giorni lavorativi e un codice QR personalizzato per indirizzare i vostri clienti alla sezione recensioni della vostra pagina Google.", 

			  },
              "german": 
			  {
			    "homePage": "Willkommen",
                "galleryPage": "Galerie",
                "detailsPage": "Einzelheiten",
                "pricingPage": "Tarife",
                "contactPage": "Kontakt",
                "scheduleCall": "Einen Anruf planen",
                "banner1Title": "360 Google Maps",
                "colorBanner1Title": "Virtuelle Panoramatour",
                "banner2Title": "Steigern Sie Ihre Sichtbarkeit bei Google",
                "banner3Title": "Mehr Verkäufe erzielen",
                "processRedTitle": "| Verfahren",
                "virtualTourAnd360PhotosTitle": "Virtueller Rundgang und 360°-Fotos",
                "howToGetInTouch": "Wie Sie uns erreichen ?",
                "howToGetInTouchBody": "Schicken Sie uns eine E-Mail an info.lightmemory@gmail.com. Wir freuen uns darauf, alle Ihre Fragen zu beantworten",
                "howDoesItWorks": "Wie funktioniert es ?",
                "howDoesItWorksBody": "Wir kümmern uns um alles. Sie entscheiden, wann Sie einen Termin mit dem Fotografieren wünschen. Anschließend veröffentlichen wir den virtuellen Rundgang auf Ihrer My Google Business-Seite",
                "whyBest": "Warum Light Memory ?",
                "whyBestBody": "Die Effizienz unserer Agentur ist unser größtes Kapital. Ab dem Zeitpunkt der Terminvereinbarung wird der virtuelle Rundgang innerhalb einer Woche veröffentlicht",
                "virtualTourExample": "| BEISPIEL EINER VIRTUELLEN TOUR",
                "diveIntoVirtualTour": "Tauchen Sie ein in diesen virtuellen Rundgang",
                "forWho": "| FÜR WEN ?",
                "anyTypeOfBusiness": "Jede Art von Geschäft",
                "infosAppart": "Wir können jede Fläche bearbeiten, von einer kleinen Wohnung von 10 m² bis hin zu einem großen Penthouse mit verschiedenen Etagen...<br><br>Wenn der Fotograf zu Ihnen kommt, um ein Foto zu machen, können Sie unter seiner Anleitung auswählen, was Sie möchten zeigen möchte, drinnen und draußen",
                "infosResto": "Wir wissen, dass es einfacher ist, Bilder zu machen, wenn kein Kunde da ist. Wir können entweder während oder nach Ihrer Schicht Fotos machen. Auf jeden Fall verwischen wir die Gesichter von Menschen, um die Privatsphäre zu respektieren",
                "infosShops": "Vom Bekleidungsgeschäft bis zur Autowerkstatt sind virtuelle Rundgänge immer ein Plus für Ihre Sichtbarkeit bei Google-Suchen.<br><br>Wenn Sie mehr als eine Adresse haben, können wir mehrere Termine vereinbaren, um in jedem Geschäft Fotos zu machen",
                "sectionGalerie": "| GALERIE",
                "youFindProjects": "Unsere Projekte finden Sie hier",
                "contactUsSection": "| KONTAKTIERE UNS",
                "getInTouchWithUs": "Nehmen Sie Kontakt <br>mit uns auf",
                "decouvrezOffres": "Entdecke unsere Angebote",
                "packBasicDescription": "Perfekt für kleine Flächen. Dieses Paket enthält 3 360°-Fotos mit Bearbeitung und Upload in nur 2 Werktagen.",
                "packSmartDescription": "Wenn Sie eine größere Abdeckung wünschen, entscheiden Sie sich für unser SMART-Paket, das 5 360°-Fotos mit Bearbeitung und Upload innerhalb von 2 Werktagen bietet.",
                "packPremiumDescription": "Gönnen Sie sich unser bestes Angebot mit dem PREMIUM-Paket, das 10 360°-Fotos, eine schnelle Bearbeitung und Upload in nur 5 Werktagen sowie einen personalisierten QR-Code enthält, der Ihre Kunden zum Bewertungsbereich Ihrer Google-Seite leitet.", 

			  }
			}


      