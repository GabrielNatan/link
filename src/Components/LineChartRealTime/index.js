import {useState,useEffect} from "react"
import Styles from './lineChartRealTime.module.css'
import * as d3 from "d3"
let num  = 0;
let aux = []
function LineChartRealTime({ data }) {
    const [dataset, setDataset] = useState(aux);
    function createChart(){
        

var margin = {top: 40, right: 40, bottom: 40, left: 60},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);

var y = d3.scaleLinear()
    .range([height, 0]);

var svg = d3.select("#contRealTime").append("svg")
    .style("background-color", '#888')
    .attr("width", width + margin.left + margin.right )
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
  x.domain(dataset.map(function(d) { return d.month; }));
  y.domain([0, d3.max(dataset, function(d) { return d.pizzas; })]);

// Axes
  svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y));
  // Labels
  svg.append("text")
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .attr("transform", "translate("+ (margin.left - 108 ) +","+(height/2)+")rotate(-90)")  
            .text("Pizzas");

  svg.append("text")
            .style("font-size", "14px")
            .attr("text-anchor", "middle") 
            .attr("transform", "translate("+ (width/2) +","+(height-(margin.bottom -74))+")")
            .text("Month");

  //  Chart Title
  svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 20 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .text("Pizza consumption");
// Adding Bars
  svg.selectAll(".bar")
      .data(dataset)
      .enter().append("rect")
      .attr("width","300px")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.month); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.pizzas); })
      .attr("height", function(d) { return height - y(d.pizzas); })
      .transition()
    .duration(500)
    .style("transform","tranlateX("+ 30 * num + ")" )

// See also :
    }
    let obj = {
        "jan":{month:"feb",pizzas:"30000"},
        "feb":{month:"mar",pizzas:"90000"},
        "mar":{month:"apr",pizzas:"1000"},
        "apr":{month:"may",pizzas:"40000"},
        "may":{month:"jul",pizzas:"9000"},
        "jul":{month:"jun",pizzas:"9000"},
        "jun":{month:"ago",pizzas:"19000"},
        "ago":{month:"sep",pizzas:"5000"},
        "sep":{month:"out",pizzas:"7000"},
        "out":{month:"nov",pizzas:"5000"},
        "nov":{month:"dec",pizzas:"2000"},
        "dec":{month:"jan",pizzas:"7000"},
    }


    useEffect(() => {
        createChart()
        setInterval(()=>{
            let um = Object.keys(obj)[num]
            console.log(aux)
            console.log("Real Time", dataset)
            aux.push({month:new Date().getMinutes(),pizzas:Math.random()*100})
            if(num > 10){
                aux.shift()
            }
            setDataset(d => [...dataset,{month:new Date().getMinutes(),pizzas:Math.random()*100}])
           
            num = num + 1
        
        },1000 * 60)
    }, [])

    useEffect(()=>{
        let el = document.querySelector("#contRealTime")
        if(el){
            el.innerHTML = ""
        }
        createChart()
    },[dataset])

    return (
        <div id="contRealTime" className={Styles.container}>
         

        </div>
    )
}

export default LineChartRealTime
