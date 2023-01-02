
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
//import * as am4core from '@amcharts/amcharts4/core';
//import * as am4maps from '@amcharts/amcharts5/maps';
//import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5geodata_region_usa_congressional2022_worldLow from "@amcharts/amcharts5-geodata/region/usa/congressional2022/flLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5map from "@amcharts/amcharts5/map";
import {PublicationService} from "../../service/publication.service";
import {Myobject} from "../../models/Myobject";




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  date1: any;
  date2: any;

  public newdata : any;
  dataany =  [
    {id:"CN",name:"China",value:639},{id:"AU",name:"Australia",value:117},{id:"UK",name:"United Kingdom",value:112},{id:"CA",name:"Canada",value:94},{id:"GA",name:"Gabon",value:10},{id:"US",name:"United States",value:248},{id:"FR",name:"France",value:48},{id:"LA",name:"Lao People's Democratic Republic",value:9},{id:"QA",name:"Qatar",value:8},{id:"HK",name:"Hong Kong",value:44},{id:"IT",name:"Italy",value:72},{id:"SN",name:"Senegal",value:1},{id:"IN",name:"India",value:180},{id:"DE",name:"Germany",value:97},{id:"GH",name:"Ghana",value:4},{id:"SA",name:"Saudi Arabia",value:34},{id:"PR",name:"Puerto Rico",value:37},{id:"KR",name:"South Korea",value:49},{id:"NZ",name:"New Zealand",value:7},{id:"MA",name:"Morocco",value:14},{id:"FI",name:"Finland",value:15},{id:"MY",name:"Malaysia",value:20},{id:"TR",name:"Turkey",value:18},{id:"IQ",name:"Iraq",value:8},{id:"PA",name:"Panama",value:8},{id:"IE",name:"Ireland",value:14},{id:"PT",name:"Portugal",value:15},{id:"DO",name:"Dominican Republic",value:4},{id:"ID",name:"Indonesia",value:9},{id:"DK",name:"Denmark",value:18},{id:"ES",name:"Spain",value:19},{id:"LU",name:"Luxembourg",value:4},{id:"EG",name:"Egypt",value:16},{id:"PE",name:"Peru",value:2},{id:"CO",name:"Colombia",value:19},{id:"JO",name:"Jordan",value:4},{id:"TN",name:"Tunisia",value:7},{id:"ST",name:"Sao Tome and Principe",value:16},{id:"AT",name:"Austria",value:60},{id:"AE",name:"United Arab Emirates",value:18},{id:"SG",name:"Singapore",value:44},{id:"NO",name:"Norway",value:30},{id:"PH",name:"Philippines",value:5},{id:"BE",name:"Belgium",value:11},{id:"SC",name:"Seychelles",value:4},{id:"BR",name:"Brazil",value:20},{id:"PL",name:"Poland",value:5},{id:"SV",name:"El Salvador",value:1},{id:"GR",name:"Greece",value:16},{id:"RO",name:"Romania",value:4},{id:"AL",name:"Albania",value:7},{id:"IR",name:"Iran",value:17},{id:"JP",name:"Japan",value:36},{id:"NL",name:"Netherlands",value:23},{id:"LT",name:"Lithuania",value:3},{id:"MX",name:"Mexico",value:3},{id:"LB",name:"Lebanon",value:4},{id:"PG",name:"Papua New Guinea",value:1},{id:"TW",name:"Taiwan",value:33},{id:"MP",name:"Northern Mariana Islands",value:2},{id:"AI",name:"Anguilla",value:6},{id:"PK",name:"Pakistan",value:20},{id:"BD",name:"Bangladesh",value:9},{id:"GE",name:"Georgia",value:11},{id:"MD",name:"Moldova",value:4},{id:"CX",name:"Island",value:2},{id:"SE",name:"Sweden",value:10},{id:"EE",name:"Estonia",value:4},{id:"IL",name:"Israel",value:13},{id:"KZ",name:"Kazakhstan",value:2},{id:"MO",name:"Macao",value:2},{id:"CH",name:"Switzerland",value:31},{id:"SK",name:"Slovakia",value:2},{id:"KY",name:"Cayman Islands",value:1},{id:"DZ",name:"Algeria",value:4},{id:"OM",name:"Oman",value:1},{id:"SL",name:"Sierra Leone",value:1},{id:"RU",name:"Russia",value:18},{id:"TO",name:"Tonga",value:5},{id:"NC",name:"New Caledonia",value:5},{id:"KO",name:"Korea",value:1},{id:"IS",name:"Iceland",value:4},{id:"SS",name:"South Sudan",value:1},{id:"MU",name:"Mauritius",value:1},{id:"CL",name:"Chile",value:1},{id:"AR",name:"Argentina",value:1},{id:"AM",name:"Armenia",value:2},{id:"VN",name:"Vietnam",value:6},{id:"JE",name:"Jersey",value:5},{id:"LK",name:"Sri Lanka",value:3},{id:"GG",name:"Guernsey",value:1},{id:"SY",name:"Syria",value:1},{id:"MS",name:"Montserrat",value:3},{id:"SR",name:"Suriname",value:1},{id:"ZA",name:"South Africa",value:4},{id:"RS",name:"Serbia",value:2},{id:"ET",name:"Ethiopia",value:1},{id:"SI",name:"Slovenia",value:2},{id:"MN",name:"Mongolia",value:3},{id:"SZ",name:"Eswatini",value:2},{id:"MG",name:"Madagascar",value:1},{id:"KW",name:"Kuwait",value:4},{id:"NG",name:"Nigeria",value:5},{id:"YE",name:"Yemen",value:1},{id:"AZ",name:"Azerbaijan",value:1},{id:"ML",name:"Mali",value:1},{id:"TH",name:"Thailand",value:4},{id:"CY",name:"Cyprus",value:3},{id:"NA",name:"Namibia",value:1},{id:"MM",name:"Myanmar",value:1},{id:"HU",name:"Hungary",value:2},{id:"LV",name:"Latvia",value:1},{id:"UA",name:"Ukraine",value:1},{id:"EC",name:"Ecuador",value:1},{id:"BG",name:"Bulgaria",value:1},{id:"CZ",name:"Czechia",value:1}
  ];


    constructor(private publicationService:PublicationService) {

  }
  ngAfterViewInit(){
    /!* Chart code *!/
    let data= this.dataany

    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(am5map.MapChart.new(root, {}));

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );

    let bubbleSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        calculateAggregates: true,
        polygonIdField: "id"
      })
    );

    let circleTemplate = am5.Template.new({});

    bubbleSeries.bullets.push(function(root, series, dataItem) {
      let container = am5.Container.new(root, {});

      let circle = container.children.push(
        am5.Circle.new(root, {
          radius: 20,
          fillOpacity: 0.7,
          fill: am5.color(0xff0000),
          cursorOverStyle: "pointer",
          tooltipText: `{name}: [bold]{value}[/]`
        })
      );

      let countryLabel = container.children.push(
        am5.Label.new(root, {
          text: "{name}",
          paddingLeft: 5,
          populateText: true,
          fontWeight: "bold",
          fontSize: 13,
          centerY: am5.p50
        })
      );

      circle.on("radius", function(radius) {
        countryLabel.set("x", radius);
      })

      return am5.Bullet.new(root, {
        sprite: container,
        dynamic: true
      });
    });

    bubbleSeries.bullets.push(function(root, series, dataItem) {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          text: "{value.formatNumber('#.')}",
          fill: am5.color(0xffffff),
          populateText: true,
          centerX: am5.p50,
          centerY: am5.p50,
          textAlign: "center"
        }),
        dynamic: true
      });
    });



// minValue and maxValue must be set for the animations to work
    bubbleSeries.set("heatRules", [
      {
        target: circleTemplate,
        dataField: "value",
        min: 10,
        max: 50,
        minValue: 0,
        maxValue: 100,
        key: "radius"
      }
    ]);

    bubbleSeries.data.setAll(data);

    updateData();
    setInterval(() => {
      if(this.newdata!=null){
   /*     console.log("this.dataany");
        console.log(this.dataany);
        console.log("this.dataany");*/

  /*      console.log("data");
        console.log(data);
        console.log("data");
        console.log("this.newdata");
        console.log(this.newdata);
        console.log("this.newdata");
        console.log("bubbleSeries.dataItems");
        console.log(bubbleSeries.dataItems);
        console.log("bubbleSeries.dataItems");*/
       for (var i = 0; i < bubbleSeries.dataItems.length; i++) {
          for(var j=0;j<this.newdata.length; j++) {
            let obj = JSON.parse(this.newdata[j]);
  /*          console.log("this.dataany[j].name "+obj.name);
            console.log("data[i].name "+data[i].name);*/
            if(data[i].name==obj.name){

              bubbleSeries.data.setIndex(i, { value: obj.value, id: data[i].id, name: data[i].name })
            }
          }
        }
      }
      updateData();

    }, 4000)

    function updateData() {



      /* for (var i = 0; i < bubbleSeries.dataItems.length; i++) {
         bubbleSeries.data.setIndex(i, { value: Math.round(Math.random() * 100), id: data[i].id, name: data[i].name })
       }*/
     /* if(this.newdata!=null){
        for (var i = 0; i < bubbleSeries.dataItems.length; i++) {
          for(var j=0;j<this.newdata.length; j++) {

            console.log(data[i].name)
            if(data[i].name==this.newdata[j]){
              bubbleSeries.data.setIndex(i, { value: this.newdata[j].value, id: data[i].id, name: data[i].name })
            }
          }
        }
      }*/



    }




  }
  getdata() {
    this.publicationService.getdata(this.date1,this.date2).subscribe((data) => {
      this.newdata =data;
      console.log(this.newdata[0]);
      let obj = JSON.parse(this.newdata[0]);
      console.log("obj.name");
      console.log(obj.name);
      console.log("obj.name");
      console.log("obj.id");
      console.log(obj.id);
      console.log("obj.id");
      console.log("obj.value");
      console.log(obj.value);
      console.log("obj.value");
      this.dataany=this.newdata;
    }, error => {
      console.log(error);
    });
  }
}


/*
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
//import * as am4core from '@amcharts/amcharts4/core';
//import * as am4maps from '@amcharts/amcharts5/maps';
//import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5geodata_region_usa_congressional2022_worldLow from "@amcharts/amcharts5-geodata/region/usa/congressional2022/flLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5map from "@amcharts/amcharts5/map";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  ngAfterViewInit(){
    /!* Chart code *!/
    let data = [
      {
        id: "US",
        name: "United States",
        value: 100
      }, {
        id: "GB",
        name: "United Kingdom",
        value: 100
      }, {
        id: "CN",
        name: "China",
        value: 100
      }, {
        id: "IN",
        name: "India",
        value: 100
      }, {
        id: "AU",
        name: "Australia",
        value: 100
      }, {
        id: "CA",
        name: "Canada",
        value: 100
      }, {
        id: "BR",
        name: "Brasil",
        value: 100
      }, {
        id: "ZA",
        name: "South Africa",
        value: 100
      }
    ];

    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(am5map.MapChart.new(root, {}));

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );

    let bubbleSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        calculateAggregates: true,
        polygonIdField: "id"
      })
    );

    let circleTemplate = am5.Template.new({});

    bubbleSeries.bullets.push(function(root, series, dataItem) {
      let container = am5.Container.new(root, {});

      let circle = container.children.push(
        am5.Circle.new(root, {
          radius: 20,
          fillOpacity: 0.7,
          fill: am5.color(0xff0000),
          cursorOverStyle: "pointer",
          tooltipText: `{name}: [bold]{value}[/]`
        })
      );

      let countryLabel = container.children.push(
        am5.Label.new(root, {
          text: "{name}",
          paddingLeft: 5,
          populateText: true,
          fontWeight: "bold",
          fontSize: 13,
          centerY: am5.p50
        })
      );

      circle.on("radius", function(radius) {
        countryLabel.set("x", radius);
      })

      return am5.Bullet.new(root, {
        sprite: container,
        dynamic: true
      });
    });

    bubbleSeries.bullets.push(function(root, series, dataItem) {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          text: "{value.formatNumber('#.')}",
          fill: am5.color(0xffffff),
          populateText: true,
          centerX: am5.p50,
          centerY: am5.p50,
          textAlign: "center"
        }),
        dynamic: true
      });
    });



// minValue and maxValue must be set for the animations to work
    bubbleSeries.set("heatRules", [
      {
        target: circleTemplate,
        dataField: "value",
        min: 10,
        max: 50,
        minValue: 0,
        maxValue: 100,
        key: "radius"
      }
    ]);

    bubbleSeries.data.setAll(data);

    updateData();
    setInterval(function() {
      updateData();
    }, 2000)

    function updateData() {
      for (var i = 0; i < bubbleSeries.dataItems.length; i++) {
        bubbleSeries.data.setIndex(i, { value: Math.round(Math.random() * 100), id: data[i].id, name: data[i].name })
      }
    }

  }
}
*/
