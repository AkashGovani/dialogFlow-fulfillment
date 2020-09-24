// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const functions = require('firebase-functions');
const {
  WebhookClient
} = require('dialogflow-fulfillment');
const {
  Card,
  Suggestion,
  Image
} = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({
    request,
    response
  });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function classify(agent) {
    const trashData = agent.parameters;
    console.log('Dialogflow Parameters: ' + JSON.stringify(trashData));
    if (trashData.special_items !== '') {
      switch (trashData.special_items) {
        case 'adhesive':
          agent.add('Text Response');
          break;
        case 'Baby bottle':
          agent.add('Text Response');
          break;
        case 'Beer Bottle':
          agent.add('Text Response');
          break;
        case 'Bottle lid':
          agent.add('Text Response');
          break;
        case 'CD rack':
          agent.add('Text Response');
          break;
        case 'Chain':
          agent.add('Text Response');
          break;
        case 'Cosmetic case':
          agent.add('Text Response');
          break;
        case 'Costume box':
          agent.add('Text Response');
          break;
        case 'Cup noodle container':
          agent.add('Text Response');
          break;
        case 'Diapers':
          agent.add('Text Response');
          break;
        case 'Dry-cell battery':
          agent.add('Text Response');
          break;
        case 'Edible Oil':
          agent.add('Text Response');
          break;
        case 'Electronic tabacco':
          agent.add('Text Response');
          break;
        case 'Food Oil':
          agent.add('Text Response');
          break;
        case 'Garden plant':
          agent.add('Text Response');
          break;
        case 'Glass Bottle':
          agent.add('Text Response');
          break;
        case 'glue':
          agent.add('Text Response');
          break;
        case 'Home App':
          agent.add('Text Response');
          break;
        case 'Ink cartridge':
          agent.add('Text Response');
          break;
        case 'Jewellery Box':
          agent.add('Text Response');
          break;
        case 'Mercury Thermometer':
          agent.add('Text Response');
          break;
        case 'Metal mechanical pencil':
          agent.add('Text Response');
          break;
        case 'PC':
          agent.add('Text Response');
          break;
        case 'Plastic container':
          agent.add('Text Response');
          break;
        case 'SprayCan':
          agent.add('Text Response');
          break;
        case 'Tableware':
          agent.add('Text Response');
          break;
        case 'Television':
          agent.add('Text Response');
          break;
        case 'Washing Machine':
          agent.add('Text Response');
          break;
        case 'refrigerator':
          agent.add('Text Response');
          break;
        case 'Air Conditioner':
          agent.add('Text Response');
          break;
        case 'Vase':
          agent.add('Text Response');
          break;
        case 'Syringe':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.bins !== '') {
      switch (trashData.bins) {
        case 'Whiskey bottle':
          agent.add('Text Response');
          break;
        case 'Wine bottle':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.cans !== '') {
      switch (trashData.cans) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.combustible !== '') {
      switch (trashData.combustible) {
        case 'Fallen Leaves':
          agent.add('Text Response');
          break;
        case 'Garden Plant':
          agent.add('Text Response');
          break;
        case 'Infected mask':
          agent.add('Text Response');
          break;
        case 'PET sheets':
          agent.add('Text Response');
          break;
        case 'Process Paper':
          agent.add('Text Response');
          break;
        case 'Shredded Book':
          agent.add('Text Response');
          break;
        case 'Clothes':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.homeAppliance !== '') {
      switch (trashData.homeAppliance) {
        default:
          agent.add('Text Response');
          agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/gomi4-webrichui.appspot.com/o/gomi4-ImageResponse%2Fclassify-homeApp-1.jpg?alt=media&token=4963d9b9-3e85-4489-9d76-f8f0707439b2'));
          agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/gomi4-webrichui.appspot.com/o/gomi4-ImageResponse%2Fclassify-homeApp-2.jpg?alt=media&token=4d928d54-e428-4051-a728-e051f53d1488'));
      }
    } else if (trashData.incombustible !== '') {
      switch (trashData.incombustible) {
        case 'Cracked bottle':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.largeSizeWaste !== '') {
      switch (trashData.largeSizeWaste) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.nonCollectable !== '') {
      switch (trashData.nonCollectable) {
        case 'Fire extinguisher':
          agent.add('Text Response');
          break;
        case 'Machine Oil':
          agent.add('Text Response');
          break;
        case 'soil':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.PET !== '') {
      switch (trashData.PET) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.recyclePlastics !== '') {
      switch (trashData.recyclePlastics) {
        case 'PET bottle cap':
          agent.add('Text Response');
          break;
        case 'PET bottle label':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.usedPaper !== '') {
      switch (trashData.usedPaper) {
        case 'Leather Bound':
          agent.add('Text Response');
          break;
        case 'Magazine':
          agent.add('Text Response');
          break;
        case 'Beverage container':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.wasteCategory !== '') {
      switch (trashData.wasteCategory) {
        case 'biz':
          agent.add('Text Response');
          break;
        case 'comwaste':
          agent.add('Text Response');
          break;
        case 'Grocery bags':
          agent.add('Text Response');
          break;
        case 'generalPaper':
          agent.add('Text Response');
          break;
        case 'largeSizeWaste':
          agent.add('Text Response');
          break;
        case 'Oil':
          agent.add('Text Response');
          break;
        case 'recPlastics':
          agent.add('Text Response');
          break;
        case 'recycle':
          agent.add('Text Response');
          break;
        case 'usedPaper':
          agent.add('Text Response');
          break;
        case 'incomwaste':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else {
      agent.add('Text Response');
    }
  }

  function grant(agent) {
    const trashData = agent.parameters;
    if (trashData.largeSizeWaste !== '') {
      switch (trashData.largeSizeWaste) {
        case 'Compost container':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.wasteCategory !== '') {
      switch (trashData.wasteCategory) {
        case 'Garbage':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else {
      agent.add('Text Response');
    }
  }

  function LawRule(agent) {
    const trashData = agent.parameters;
    if (trashData.special_items !== '') {
      switch (trashData.special_items) {
        case 'Home App':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.wasteCategory !== '') {
      switch (trashData.wasteCategory) {
        case 'recycle':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else {
      agent.add('Text Response');
    }
  }

  function Place(agent) {
    const trashData = agent.parameters;
    if(trashData.special_items !== ''){
      switch(trashData.special_items){
        case 'Electronic tabacco':
          agent.add('Text Response');
          break;
        case 'Television':
          agent.add('Text Response');
          break;
        case 'Washing Machine':
          agent.add('Text Response');
          break;
        case 'refrigerator':
          agent.add('Text Response');
          break;
        case 'Air Conditioner':
          agent.add('Text Response');
          break;
        case 'Syringe':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    }else if (trashData.bins !== '') {
      switch (trashData.bins) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.combustible !== '') {
      switch (trashData.combustible) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.incombustible !== '') {
      switch (trashData.incombustible) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.largeSizeWaste !== '') {
      switch (trashData.largeSizeWaste) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.cans !== '') {
      switch (trashData.cans) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.recyclePlastics !== '') {
      switch (trashData.recyclePlastics) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.PET !== '') {
      switch (trashData.PET) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.usedPaper !== '') {
      switch (trashData.usedPaper) {
        case 'Magazine':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.wasteCategory !== '') {
      switch (trashData.wasteCategory) {
        case 'comwaste':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else {
      agent.add('Text Response');
    }
  }

  function reduce(agent) {
    const trashData = agent.parameters;
    if (trashData.combustible !== '') {
      switch (trashData.combustible) {
        case 'Raw garbage':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.wasteCategory !== '') {
      switch (trashData.wasteCategory) {
        default:
          agent.add('Text Response');
      }
    } else {
      agent.add('Text Response');
    }
  }

  function size(agent) {
    const trashData = agent.parameters;
    if (trashData.special_items !== '') {
      switch (trashData.special_items) {
        case 'Furniture':
          agent.add('Text Response');
          break;
        case 'Television':
          agent.add('Text Response');
          break;
        case 'Washing Machine':
          agent.add('Text Response');
          break;
        case 'refrigerator':
          agent.add('Text Response');
          break;
        case 'Air Conditioner':
          agent.add('Text Response');
          break;
        case 'Syringe':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.bins !== '') {
      switch (trashData.bins) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.cans !== '') {
      switch (trashData.cans) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.combustible !== '') {
      switch (trashData.combustible) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.incombustible !== '') {
      switch (trashData.incombustible) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.largeSizeWaste !== '') {
      switch (trashData.largeSizeWaste) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.nonCollectable !== '') {
      switch (trashData.nonCollectable) {
        case 'soil':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.PET !== '') {
      switch (trashData.PET) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.recyclePlastics !== '') {
      switch (trashData.recyclePlastics) {
        case 'Grocery bags':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.usedPaper !== '') {
      switch (trashData.usedPaper) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.wasteCategory !== '') {
      switch (trashData.wasteCategory) {
        case 'biz':
          agent.add('Text Response');
          break;
        case 'comwaste':
          agent.add('Text Response');
          break;
        case 'Garbage':
          agent.add('Text Response');
          break;
        case 'gBag':
          agent.add('Text Response');
          break;
        case 'incomwaste':
          agent.add('Text Response');
          break;
        case 'largeSizeWaste':
          agent.add('Text Response');
          break;
        case 'movingGarbage':
          agent.add('Text Response');
          break;
        case 'recPlastics':
          agent.add('Text Response');
          break;
        case 'recycle':
          agent.add('Text Response');
          break;
        case 'recycle Bins':
          agent.add('Text Response');
          break;
        case 'usedPaper':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else {
      agent.add('Text Response');
    }
  }

  function time(agent) {
    const trashData = agent.parameters;
    if (trashData.special_items !== '') {
      switch (trashData.special_items) {
        case 'Soil':
          agent.add('Text Response');
          break;
        case 'Television':
          agent.add('Text Response');
          break;
        case 'Washing Machine':
          agent.add('Text Response');
          break;
        case 'refrigerator':
          agent.add('Text Response');
          break;
        case 'Air Conditioner':
          agent.add('Text Response');
          break;
        case 'Syringe':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.bins !== '') {
      switch (trashData.bins) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.cans !== '') {
      switch (trashData.cans) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.combustible !== '') {
      switch (trashData.combustible) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.homeAppliance !== '') {
      switch (trashData.homeAppliance) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.incombustible !== '') {
      switch (trashData.incombustible) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.largeSizeWaste !== '') {
      switch (trashData.largeSizeWaste) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.nonCollectable !== '') {
      switch (trashData.nonCollectable) {
        case 'soil':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else if (trashData.PET !== '') {
      switch (trashData.PET) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.recyclePlastics !== '') {
      switch (trashData.recyclePlastics) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.usedPaper !== '') {
      switch (trashData.usedPaper) {
        default:
          agent.add('Text Response');
      }
    } else if (trashData.wasteCategory !== '') {
      switch (trashData.wasteCategory) {
        case 'comwaste':
          agent.add('Text Response');
          agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/gomi4-webrichui.appspot.com/o/gomi4-ImageResponse%2Ftime-comWaste.JPG?alt=media&token=0ab75ffa-f861-4e6f-bc69-e443fd8a33ee'));
          break;
        case 'Garbage':
          agent.add('Text Response');
          break;
        case 'incomwaste':
          agent.add('Text Response');
          break;
        case 'largeSizeWaste':
          agent.add('Text Response');
          break;
        case 'recPlastics':
          agent.add('Text Response');
          break;
        case 'recycle':
          agent.add('Text Response');
          break;
        case 'recycle Bins':
          agent.add('Text Response');
          break;
        case 'usedPaper':
          agent.add('Text Response');
          break;
        case 'cannot be collected':
          agent.add('Text Response');
          break;
        default:
          agent.add('Text Response');
      }
    } else {
      agent.add('Text Response');
    }
  }



  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Classify', classify);
  intentMap.set('grant', grant);
  intentMap.set('LawRule', LawRule);
  intentMap.set('Place', Place);
  intentMap.set('reduce', reduce);
  intentMap.set('size', size);
  intentMap.set('time', time);
  agent.handleRequest(intentMap);
});
