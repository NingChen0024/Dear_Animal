
import React ,{ Component }from 'react';
import axios from 'axios'
import $ from 'jquery';
import Carousel from 'react-bootstrap/Carousel'
import { withScriptjs, withGoogleMap, GoogleMap,Map,address,map,markers,marker,content, } from "react-google-maps"
import {animalData} from './results.js'


class About extends Component {


    render() {

      $(function(){
        $("#postCodeForm").on('submit', function(e){
          e.preventDefault();
          //  Clear markers here
            var matches = 0;
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];

            var postCode = document.getElementById('postCode').value;

            var infowindow = new google.maps.InfoWindow({
                content: ""
            });
            while(true){

                if (!animalData[postCode] || animalData[postCode].length == 0){
                postCode = parseInt(postCode);
                postCode += 1
            }else{
                break;
            }
            
            for (var i = 0; i < animalData[postCode].length; i++) {
                console.log(animalData[postCode][i]);
                matches += 1;
                console.log('match');
                // var name = []
                // name.push(animalData[i]['Vernacular name - original'])
                window.name = animalData[postCode][i]['Vernacular name - original'];
                address = animalData[postCode][i]['address'];
                console.log(window.name, address);
                marker = new google.maps.Marker({ position: { title: window.name + address, lat: parseFloat(animalData[postCode][i]['Latitude']), lng: parseFloat(animalData[postCode][i]['Longitude']) }, map: map });

                content = '<h3>' + window.name + '</h3><p>' + address + '</p><a href="https://www.google.com/maps/dir//'+address+'" target="_blank">Directions</a>';


                google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
                    return function () {
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                    };
                })(marker, content, infowindow));


                markers.push(marker);

                // Add infowindow HERE
            }

            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < markers.length; i++) {
                bounds.extend(markers[i].position);
            }

            map.fitBounds(bounds);


                }
            })
      })
        
    function initMap() {
        markers = [];
        var vic = { lat: -37.4713, lng: 144.7852 };
        map = new google.maps.Map(
            document.getElementById('map'), { zoom: 8, center: vic });
    }
    
      return (
      <div >
        <h3>My Google Maps Demo</h3>
        <form id="postCodeForm"><input type="text" id="postCode"/><button onClick="searchPostCode()">Search</button></form>
        <div id="map"></div>
      </div>
      )
    };
  }

export default About

