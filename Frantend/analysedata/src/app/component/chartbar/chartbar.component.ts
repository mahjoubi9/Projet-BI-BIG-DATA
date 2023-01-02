import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import {PublicationService} from "../../service/publication.service";

@Component({
  selector: 'app-chartbar',
  templateUrl: './chartbar.component.html',
  styleUrls: ['./chartbar.component.css']
})
export class ChartbarComponent {
  private root!: am5.Root;
  date1: any;
  date2: any;

  public newdata : any;
  dataany =  [
    {id:"CN",name:"China",value:639},{id:"AU",name:"Australia",value:117},{id:"UK",name:"United Kingdom",value:112},{id:"CA",name:"Canada",value:94},{id:"GA",name:"Gabon",value:10},{id:"US",name:"United States",value:248},{id:"FR",name:"France",value:48},{id:"LA",name:"Lao People's Democratic Republic",value:9},{id:"QA",name:"Qatar",value:8},{id:"HK",name:"Hong Kong",value:44},{id:"IT",name:"Italy",value:72},{id:"SN",name:"Senegal",value:1},{id:"IN",name:"India",value:180},{id:"DE",name:"Germany",value:97},{id:"GH",name:"Ghana",value:4},{id:"SA",name:"Saudi Arabia",value:34},{id:"PR",name:"Puerto Rico",value:37},{id:"KR",name:"South Korea",value:49},{id:"NZ",name:"New Zealand",value:7},{id:"MA",name:"Morocco",value:14},{id:"FI",name:"Finland",value:15},{id:"MY",name:"Malaysia",value:20},{id:"TR",name:"Turkey",value:18},{id:"IQ",name:"Iraq",value:8},{id:"PA",name:"Panama",value:8},{id:"IE",name:"Ireland",value:14},{id:"PT",name:"Portugal",value:15},{id:"DO",name:"Dominican Republic",value:4},{id:"ID",name:"Indonesia",value:9},{id:"DK",name:"Denmark",value:18},{id:"ES",name:"Spain",value:19},{id:"LU",name:"Luxembourg",value:4},{id:"EG",name:"Egypt",value:16},{id:"PE",name:"Peru",value:2},{id:"CO",name:"Colombia",value:19},{id:"JO",name:"Jordan",value:4},{id:"TN",name:"Tunisia",value:7},{id:"ST",name:"Sao Tome and Principe",value:16},{id:"AT",name:"Austria",value:60},{id:"AE",name:"United Arab Emirates",value:18},{id:"SG",name:"Singapore",value:44},{id:"NO",name:"Norway",value:30},{id:"PH",name:"Philippines",value:5},{id:"BE",name:"Belgium",value:11},{id:"SC",name:"Seychelles",value:4},{id:"BR",name:"Brazil",value:20},{id:"PL",name:"Poland",value:5},{id:"SV",name:"El Salvador",value:1},{id:"GR",name:"Greece",value:16},{id:"RO",name:"Romania",value:4},{id:"AL",name:"Albania",value:7},{id:"IR",name:"Iran",value:17},{id:"JP",name:"Japan",value:36},{id:"NL",name:"Netherlands",value:23},{id:"LT",name:"Lithuania",value:3},{id:"MX",name:"Mexico",value:3},{id:"LB",name:"Lebanon",value:4},{id:"PG",name:"Papua New Guinea",value:1},{id:"TW",name:"Taiwan",value:33},{id:"MP",name:"Northern Mariana Islands",value:2},{id:"AI",name:"Anguilla",value:6},{id:"PK",name:"Pakistan",value:20},{id:"BD",name:"Bangladesh",value:9},{id:"GE",name:"Georgia",value:11},{id:"MD",name:"Moldova",value:4},{id:"CX",name:"Island",value:2},{id:"SE",name:"Sweden",value:10},{id:"EE",name:"Estonia",value:4},{id:"IL",name:"Israel",value:13},{id:"KZ",name:"Kazakhstan",value:2},{id:"MO",name:"Macao",value:2},{id:"CH",name:"Switzerland",value:31},{id:"SK",name:"Slovakia",value:2},{id:"KY",name:"Cayman Islands",value:1},{id:"DZ",name:"Algeria",value:4},{id:"OM",name:"Oman",value:1},{id:"SL",name:"Sierra Leone",value:1},{id:"RU",name:"Russia",value:18},{id:"TO",name:"Tonga",value:5},{id:"NC",name:"New Caledonia",value:5},{id:"KO",name:"Korea",value:1},{id:"IS",name:"Iceland",value:4},{id:"SS",name:"South Sudan",value:1},{id:"MU",name:"Mauritius",value:1},{id:"CL",name:"Chile",value:1},{id:"AR",name:"Argentina",value:1},{id:"AM",name:"Armenia",value:2},{id:"VN",name:"Vietnam",value:6},{id:"JE",name:"Jersey",value:5},{id:"LK",name:"Sri Lanka",value:3},{id:"GG",name:"Guernsey",value:1},{id:"SY",name:"Syria",value:1},{id:"MS",name:"Montserrat",value:3},{id:"SR",name:"Suriname",value:1},{id:"ZA",name:"South Africa",value:4},{id:"RS",name:"Serbia",value:2},{id:"ET",name:"Ethiopia",value:1},{id:"SI",name:"Slovenia",value:2},{id:"MN",name:"Mongolia",value:3},{id:"SZ",name:"Eswatini",value:2},{id:"MG",name:"Madagascar",value:1},{id:"KW",name:"Kuwait",value:4},{id:"NG",name:"Nigeria",value:5},{id:"YE",name:"Yemen",value:1},{id:"AZ",name:"Azerbaijan",value:1},{id:"ML",name:"Mali",value:1},{id:"TH",name:"Thailand",value:4},{id:"CY",name:"Cyprus",value:3},{id:"NA",name:"Namibia",value:1},{id:"MM",name:"Myanmar",value:1},{id:"HU",name:"Hungary",value:2},{id:"LV",name:"Latvia",value:1},{id:"UA",name:"Ukraine",value:1},{id:"EC",name:"Ecuador",value:1},{id:"BG",name:"Bulgaria",value:1},{id:"CZ",name:"Czechia",value:1}
  ];
  constructor(private publicationService:PublicationService,@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout
        })
      );

      // Define data
      let data=[] ;
      let dataaa="";
      for(let i=0;i<this.dataany.length;i++){
        dataaa=dataaa+ "{"+
          "category:\""+this.dataany[i].name +"\","
          +"value1:"+ this.dataany[i].value +"},";

        }
      console.log("dataaaa");
      console.log(dataaa);
     // let obj = JSON.parse(dataaa);
      //data.push(obj);
       data = [
         {category:"China",value1:639},{category:"Australia",value1:117},{category:"United Kingdom",value1:112},{category:"Canada",value1:94},{category:"Gabon",value1:10},{category:"United States",value1:248},{category:"France",value1:48},{category:"Lao People's Democratic Republic",value1:9},{category:"Qatar",value1:8},{category:"Hong Kong",value1:44},{category:"Italy",value1:72},{category:"Senegal",value1:1},{category:"India",value1:180},{category:"Germany",value1:97},{category:"Ghana",value1:4},{category:"Saudi Arabia",value1:34},{category:"Puerto Rico",value1:37},{category:"South Korea",value1:49},{category:"New Zealand",value1:7},{category:"Morocco",value1:14},{category:"Finland",value1:15},{category:"Malaysia",value1:20},{category:"Turkey",value1:18},{category:"Iraq",value1:8},{category:"Panama",value1:8},{category:"Ireland",value1:14},{category:"Portugal",value1:15},{category:"Dominican Republic",value1:4},{category:"Indonesia",value1:9},{category:"Denmark",value1:18},{category:"Spain",value1:19},{category:"Luxembourg",value1:4},{category:"Egypt",value1:16},{category:"Peru",value1:2},{category:"Colombia",value1:19},{category:"Jordan",value1:4},{category:"Tunisia",value1:7},{category:"Sao Tome and Principe",value1:16},{category:"Austria",value1:60},{category:"United Arab Emirates",value1:18},{category:"Singapore",value1:44},{category:"Norway",value1:30},{category:"Philippines",value1:5},{category:"Belgium",value1:11},{category:"Seychelles",value1:4},{category:"Brazil",value1:20},{category:"Poland",value1:5},{category:"El Salvador",value1:1},{category:"Greece",value1:16},{category:"Romania",value1:4},{category:"Albania",value1:7},{category:"Iran",value1:17},{category:"Japan",value1:36},{category:"Netherlands",value1:23},{category:"Lithuania",value1:3},{category:"Mexico",value1:3},{category:"Lebanon",value1:4},{category:"Papua New Guinea",value1:1},{category:"Taiwan",value1:33},{category:"Northern Mariana Islands",value1:2},{category:"Anguilla",value1:6},{category:"Pakistan",value1:20},{category:"Bangladesh",value1:9},{category:"Georgia",value1:11},{category:"Moldova",value1:4},{category:"Island",value1:2},{category:"Sweden",value1:10},{category:"Estonia",value1:4},{category:"Israel",value1:13},{category:"Kazakhstan",value1:2},{category:"Macao",value1:2},{category:"Switzerland",value1:31},{category:"Slovakia",value1:2},{category:"Cayman Islands",value1:1},{category:"Algeria",value1:4},{category:"Oman",value1:1},{category:"Sierra Leone",value1:1},{category:"Russia",value1:18},{category:"Tonga",value1:5},{category:"New Caledonia",value1:5},{category:"Korea",value1:1},{category:"Iceland",value1:4},{category:"South Sudan",value1:1},{category:"Mauritius",value1:1},{category:"Chile",value1:1},{category:"Argentina",value1:1},{category:"Armenia",value1:2},{category:"Vietnam",value1:6},{category:"Jersey",value1:5},{category:"Sri Lanka",value1:3},{category:"Guernsey",value1:1},{category:"Syria",value1:1},{category:"Montserrat",value1:3},{category:"Suriname",value1:1},{category:"South Africa",value1:4},{category:"Serbia",value1:2},{category:"Ethiopia",value1:1},{category:"Slovenia",value1:2},{category:"Mongolia",value1:3},{category:"Eswatini",value1:2},{category:"Madagascar",value1:1},{category:"Kuwait",value1:4},{category:"Nigeria",value1:5},{category:"Yemen",value1:1},{category:"Azerbaijan",value1:1},{category:"Mali",value1:1},{category:"Thailand",value1:4},{category:"Cyprus",value1:3},{category:"Namibia",value1:1},{category:"Myanmar",value1:1},{category:"Hungary",value1:2},{category:"Latvia",value1:1},{category:"Ukraine",value1:1},{category:"Ecuador",value1:1},{category:"Bulgaria",value1:1},{category:"Czechia",value1:1},
         ];

      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: "category"
        })
      );
      xAxis.data.setAll(data);

      // Create series
      let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category"
        })
      );
      series1.data.setAll(data);

      let series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value2",
          categoryXField: "category"
        })
      );
      series2.data.setAll(data);

      // Add legend
      let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set("cursor", am5xy.XYCursor.new(root, {}));

      this.root = root;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
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

