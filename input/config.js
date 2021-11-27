const fs = require("fs");
const width = 3364;
const height = 5047;
const dir = __dirname;
const description = "This is an NFT made by the coolest generative code.";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 9700; //CHANGE THIS
const editionSize = 9700; //CHANGE THIS
const raceWeights = [
  {
    value: "skull",
    from: 1,
    to: editionSize,
  },
];

const races = {
  skull: {
    name: "background",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Light blue",
            path: `${dir}/1-background/paleblue.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/1-background/pink.png`,
            weight: 80
          },
          {
            id: 2,
            name: "Yellow",
            path: `${dir}/1-background/yellow.png`,
            weight: 60,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Suit",
        elements: [
          {
            id: 0,
            name: "greencactus",
            path: `${dir}/2-suit/greencactus.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "yellowcactus",
            path: `${dir}/2-suit/yellowcactus.png`,
            weight: 80,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "hat",
        elements: [
          {
            id: 0,
            name: "sombrero_1",
            path: `${dir}/3-hat/sombrero_1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "sombrero_2",
            path: `${dir}/3-hat/sombrero_2.png`,
            weight: 75,
          },
          {
            id: 2,
            name: "sombrero_3",
            path: `${dir}/3-hat/sombrero_3.png`,
            weight: 50,
          },
          {
            id: 3,
            name: "sombrero_4",
            path: `${dir}/3-hat/sombrero_4.png`,
            weight: 25,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "eyes",
        elements: [
          {
            id: 0,
            name: "blueeys",
            path: `${dir}/4-eyes/blueeys.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "greeneyes",
            path: `${dir}/4-eyes/greeneyes.png`,
            weight: 66.66,
          },
          {
            id: 2,
            name: "redeyes",
            path: `${dir}/4-eyes/redeyes.png`,
            weight: 33.33,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "accessories",
        elements: [
          {
            id: 0,
            name: "No facial hair",
            path: `${dir}/5-band/blueband.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "No facial hair",
            path: `${dir}/5-band/redband.png`,
            weight: 80,
          },
          {
            id: 2,
            name: "No facial hair",
            path: `${dir}/5-band/blackband.png`,
            weight: 60,
          },
          {
            id: 3,
            name: "No facial hair",
            path: `${dir}/5-band/purpleband.png`,
            weight: 40,
          },
          {
            id: 4,
            name: "No facial hair",
            path: `${dir}/5-band/yellowband.png`,
            weight: 20,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "accessories",
        elements: [
          {
            id: 0,
            name: "No facial hair",
            path: `${dir}/5-band1/bluebend.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "No facial hair",
            path: `${dir}/5-band1/redband.png`,
            weight: 66.66,
          },
          {
            id: 2,
            name: "No facial hair",
            path: `${dir}/5-band1/blackband.png`,
            weight: 33.33,
          },  
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "accessories",
        elements: [
          {
            id: 0,
            name: "No facial hair",
            path: `${dir}/5-band2/blueband.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "No facial hair",
            path: `${dir}/5-band2/redband.png`,
            weight: 66.66,
          },
          {
            id: 2,
            name: "No facial hair",
            path: `${dir}/5-band2/blackband.png`,
            weight: 33.33,
          },  
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "mouth",
        elements: [
          {
            id: 0,
            name: "mouth 1",
            path: `${dir}/6-mouth/mouth.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "mouth 1",
            path: `${dir}/6-mouth/mouth1.png`,
            weight: 66.66,
          },
          {
            id: 2,
            name: "mouth 1",
            path: `${dir}/6-mouth/mouth2.png`,
            weight: 33.33,
          },        
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
