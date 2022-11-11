import mongoose from "mongoose";

const mapsImagesSchemma = mongoose.Schema({
    // home-page
    // generalWeatherState: [{
    //   pointText: String,
    //   pointstate: String // 'normal' or 'hint'
    // }],
    generalWeatherState: [String],
    // maps-page
    mapsArray: [String],

    //regions-temp-page
    regionsTempPage: [{ 
      name: String, 
      weatherData: [
        { 
          icon: String,
          maxTemp: Number,
          minTemp: Number,
          wind: Number,
          date: String,
          rainPercentage: String,
          notes: String,
          rainingWeight: String,
          ms: {
            windStart: {type: Number, default: 0},
            windEnd: {type: Number, default: 0},
            windDirection: {type: Number, default: 0},
            waveStart: {type: String, default: "1.5"},
            waveEnd: {type: String, default: "2.5"},
          },
          rs: {
            windStart: {type: Number, default: 0},
            windEnd: {type: Number, default: 0},
            windDirection: {type: Number, default: 0},
            waveStart: {type: String, default: "1.5"},
            waveEnd: {type: String, default: "2.5"},
          }
         
          // dsc: [String]
        }
      ]
    }],
    

    spacCasePage: { 
      mainTitle: String,
      subTitle: String,
      StartingDay: Number,
      allSpcWeatherPoints: [String],
      allSpcWarningPoints: [String],
      spcMaps: [String]
    }
})

const maps = mongoose.model('maps', mapsImagesSchemma)
export default maps
 