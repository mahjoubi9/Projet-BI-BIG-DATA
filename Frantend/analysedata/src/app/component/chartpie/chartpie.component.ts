import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5percent from "@amcharts/amcharts5/percent"
import {PublicationService} from "../../service/publication.service";
@Component({
  selector: 'app-chartpie',
  templateUrl: './chartpie.component.html',
  styleUrls: ['./chartpie.component.css']
})
export class ChartpieComponent {
  date1: any;
  date2: any;

  public newdata : any;
  dataany =  [
    {id:"CN",name:"China",value:639},{id:"AU",name:"Australia",value:117},{id:"UK",name:"United Kingdom",value:112},{id:"CA",name:"Canada",value:94},{id:"GA",name:"Gabon",value:10},{id:"US",name:"United States",value:248},{id:"FR",name:"France",value:48},{id:"LA",name:"Lao People's Democratic Republic",value:9},{id:"QA",name:"Qatar",value:8},{id:"HK",name:"Hong Kong",value:44},{id:"IT",name:"Italy",value:72},{id:"SN",name:"Senegal",value:1},{id:"IN",name:"India",value:180},{id:"DE",name:"Germany",value:97},{id:"GH",name:"Ghana",value:4},{id:"SA",name:"Saudi Arabia",value:34},{id:"PR",name:"Puerto Rico",value:37},{id:"KR",name:"South Korea",value:49},{id:"NZ",name:"New Zealand",value:7},{id:"MA",name:"Morocco",value:14},{id:"FI",name:"Finland",value:15},{id:"MY",name:"Malaysia",value:20},{id:"TR",name:"Turkey",value:18},{id:"IQ",name:"Iraq",value:8},{id:"PA",name:"Panama",value:8},{id:"IE",name:"Ireland",value:14},{id:"PT",name:"Portugal",value:15},{id:"DO",name:"Dominican Republic",value:4},{id:"ID",name:"Indonesia",value:9},{id:"DK",name:"Denmark",value:18},{id:"ES",name:"Spain",value:19},{id:"LU",name:"Luxembourg",value:4},{id:"EG",name:"Egypt",value:16},{id:"PE",name:"Peru",value:2},{id:"CO",name:"Colombia",value:19},{id:"JO",name:"Jordan",value:4},{id:"TN",name:"Tunisia",value:7},{id:"ST",name:"Sao Tome and Principe",value:16},{id:"AT",name:"Austria",value:60},{id:"AE",name:"United Arab Emirates",value:18},{id:"SG",name:"Singapore",value:44},{id:"NO",name:"Norway",value:30},{id:"PH",name:"Philippines",value:5},{id:"BE",name:"Belgium",value:11},{id:"SC",name:"Seychelles",value:4},{id:"BR",name:"Brazil",value:20},{id:"PL",name:"Poland",value:5},{id:"SV",name:"El Salvador",value:1},{id:"GR",name:"Greece",value:16},{id:"RO",name:"Romania",value:4},{id:"AL",name:"Albania",value:7},{id:"IR",name:"Iran",value:17},{id:"JP",name:"Japan",value:36},{id:"NL",name:"Netherlands",value:23},{id:"LT",name:"Lithuania",value:3},{id:"MX",name:"Mexico",value:3},{id:"LB",name:"Lebanon",value:4},{id:"PG",name:"Papua New Guinea",value:1},{id:"TW",name:"Taiwan",value:33},{id:"MP",name:"Northern Mariana Islands",value:2},{id:"AI",name:"Anguilla",value:6},{id:"PK",name:"Pakistan",value:20},{id:"BD",name:"Bangladesh",value:9},{id:"GE",name:"Georgia",value:11},{id:"MD",name:"Moldova",value:4},{id:"CX",name:"Island",value:2},{id:"SE",name:"Sweden",value:10},{id:"EE",name:"Estonia",value:4},{id:"IL",name:"Israel",value:13},{id:"KZ",name:"Kazakhstan",value:2},{id:"MO",name:"Macao",value:2},{id:"CH",name:"Switzerland",value:31},{id:"SK",name:"Slovakia",value:2},{id:"KY",name:"Cayman Islands",value:1},{id:"DZ",name:"Algeria",value:4},{id:"OM",name:"Oman",value:1},{id:"SL",name:"Sierra Leone",value:1},{id:"RU",name:"Russia",value:18},{id:"TO",name:"Tonga",value:5},{id:"NC",name:"New Caledonia",value:5},{id:"KO",name:"Korea",value:1},{id:"IS",name:"Iceland",value:4},{id:"SS",name:"South Sudan",value:1},{id:"MU",name:"Mauritius",value:1},{id:"CL",name:"Chile",value:1},{id:"AR",name:"Argentina",value:1},{id:"AM",name:"Armenia",value:2},{id:"VN",name:"Vietnam",value:6},{id:"JE",name:"Jersey",value:5},{id:"LK",name:"Sri Lanka",value:3},{id:"GG",name:"Guernsey",value:1},{id:"SY",name:"Syria",value:1},{id:"MS",name:"Montserrat",value:3},{id:"SR",name:"Suriname",value:1},{id:"ZA",name:"South Africa",value:4},{id:"RS",name:"Serbia",value:2},{id:"ET",name:"Ethiopia",value:1},{id:"SI",name:"Slovenia",value:2},{id:"MN",name:"Mongolia",value:3},{id:"SZ",name:"Eswatini",value:2},{id:"MG",name:"Madagascar",value:1},{id:"KW",name:"Kuwait",value:4},{id:"NG",name:"Nigeria",value:5},{id:"YE",name:"Yemen",value:1},{id:"AZ",name:"Azerbaijan",value:1},{id:"ML",name:"Mali",value:1},{id:"TH",name:"Thailand",value:4},{id:"CY",name:"Cyprus",value:3},{id:"NA",name:"Namibia",value:1},{id:"MM",name:"Myanmar",value:1},{id:"HU",name:"Hungary",value:2},{id:"LV",name:"Latvia",value:1},{id:"UA",name:"Ukraine",value:1},{id:"EC",name:"Ecuador",value:1},{id:"BG",name:"Bulgaria",value:1},{id:"CZ",name:"Czechia",value:1}
  ];
  constructor(private publicationService:PublicationService,@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}

  ngAfterViewInit(){
    // Create root and chart
  /*  let root = am5.Root.new("chartdiv");
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalHorizontal
      })
    );*/
    let root = am5.Root.new("chartdiv");
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {})
    );

// Define data
    let data=[] ;
    let dataaa="";
    for(let i=0;i<this.dataany.length;i++){
      dataaa=dataaa+ "{"+
        "country:\""+this.dataany[i].name +"\","
        +"sales:"+ this.dataany[i].value +"},";

    }
    console.log("dataaaa");
    console.log(dataaa);
    data = [{country:"China",sales:639},{country:"Australia",sales:117},{country:"United Kingdom",sales:112},{country:"Canada",sales:94},{country:"Gabon",sales:10},{country:"United States",sales:248},{country:"France",sales:48},{country:"Lao People's Democratic Republic",sales:9},{country:"Qatar",sales:8},{country:"Hong Kong",sales:44},{country:"Italy",sales:72},{country:"Senegal",sales:1},{country:"India",sales:180},{country:"Germany",sales:97},{country:"Ghana",sales:4},{country:"Saudi Arabia",sales:34},{country:"Puerto Rico",sales:37},{country:"South Korea",sales:49},{country:"New Zealand",sales:7},{country:"Morocco",sales:14},{country:"Finland",sales:15},{country:"Malaysia",sales:20},{country:"Turkey",sales:18},{country:"Iraq",sales:8},{country:"Panama",sales:8},{country:"Ireland",sales:14},{country:"Portugal",sales:15},{country:"Dominican Republic",sales:4},{country:"Indonesia",sales:9},{country:"Denmark",sales:18},{country:"Spain",sales:19},{country:"Luxembourg",sales:4},{country:"Egypt",sales:16},{country:"Peru",sales:2},{country:"Colombia",sales:19},{country:"Jordan",sales:4},{country:"Tunisia",sales:7},{country:"Sao Tome and Principe",sales:16},{country:"Austria",sales:60},{country:"United Arab Emirates",sales:18},{country:"Singapore",sales:44},{country:"Norway",sales:30},{country:"Philippines",sales:5},{country:"Belgium",sales:11},{country:"Seychelles",sales:4},{country:"Brazil",sales:20},{country:"Poland",sales:5},{country:"El Salvador",sales:1},{country:"Greece",sales:16},{country:"Romania",sales:4},{country:"Albania",sales:7},{country:"Iran",sales:17},{country:"Japan",sales:36},{country:"Netherlands",sales:23},{country:"Lithuania",sales:3},{country:"Mexico",sales:3},{country:"Lebanon",sales:4},{country:"Papua New Guinea",sales:1},{country:"Taiwan",sales:33},{country:"Northern Mariana Islands",sales:2},{country:"Anguilla",sales:6},{country:"Pakistan",sales:20},{country:"Bangladesh",sales:9},{country:"Georgia",sales:11},{country:"Moldova",sales:4},{country:"Island",sales:2},{country:"Sweden",sales:10},{country:"Estonia",sales:4},{country:"Israel",sales:13},{country:"Kazakhstan",sales:2},{country:"Macao",sales:2},{country:"Switzerland",sales:31},{country:"Slovakia",sales:2},{country:"Cayman Islands",sales:1},{country:"Algeria",sales:4},{country:"Oman",sales:1},{country:"Sierra Leone",sales:1},{country:"Russia",sales:18},{country:"Tonga",sales:5},{country:"New Caledonia",sales:5},{country:"Korea",sales:1},{country:"Iceland",sales:4},{country:"South Sudan",sales:1},{country:"Mauritius",sales:1},{country:"Chile",sales:1},{country:"Argentina",sales:1},{country:"Armenia",sales:2},{country:"Vietnam",sales:6},{country:"Jersey",sales:5},{country:"Sri Lanka",sales:3},{country:"Guernsey",sales:1},{country:"Syria",sales:1},{country:"Montserrat",sales:3},{country:"Suriname",sales:1},{country:"South Africa",sales:4},{country:"Serbia",sales:2},{country:"Ethiopia",sales:1},{country:"Slovenia",sales:2},{country:"Mongolia",sales:3},{country:"Eswatini",sales:2},{country:"Madagascar",sales:1},{country:"Kuwait",sales:4},{country:"Nigeria",sales:5},{country:"Yemen",sales:1},{country:"Azerbaijan",sales:1},{country:"Mali",sales:1},{country:"Thailand",sales:4},{country:"Cyprus",sales:3},{country:"Namibia",sales:1},{country:"Myanmar",sales:1},{country:"Hungary",sales:2},{country:"Latvia",sales:1},{country:"Ukraine",sales:1},{country:"Ecuador",sales:1},{country:"Bulgaria",sales:1},{country:"Czechia",sales:1},];

// Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country"
      })
    );
    series.data.setAll(data);

// Add legend
    let legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      layout: root.horizontalLayout
    }));

    legend.data.setAll(series.dataItems);
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
